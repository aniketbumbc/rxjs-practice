import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { retry, retryWhen, delay,scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private httpservice:HttpClient) { }
  data:any;
  fetching:boolean = false;
  statusData = 'No Data'
  ngOnInit(): void {
  
  }

  fetchDetails(){
    this.fetching = true;
    this.httpservice.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      //retry(2)
      retryWhen(err => err.pipe(
        delay(2000),
        scan((reCount)=>{
          if(reCount >= 3){
            throw err
          }else{
            reCount = reCount + 1;
            console.log('reCount => ',reCount);
            this.statusData = 'Retrying Count # ' + reCount;
          }
          return reCount;
        },0)
      ))
    )
    .subscribe((res)=>{
      console.log(res)
    this.data = res;
    this.statusData = 'Data Fetch';
    this.fetching = false;
    },
    (err)=>{
      console.log(err);
      this.statusData = 'Error Fetching';
      this.fetching = false;
    }
    )
  }

}
