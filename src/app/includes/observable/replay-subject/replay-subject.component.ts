import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  userList1 = [
    'Angular',
    'React'
  ];
  userList2 = [];
  userList3 = [];

  //Subcribes modes

  subMode2:boolean = false;
  subMode3:boolean = false;

  sudMode2sub:Subscription;
  sudMode3sub:Subscription;

  constructor(private _deu:DesignUtilityService) { }

  ngOnInit(): void {
    this._deu.videoEmit.subscribe((res)=>{
      this.userList1.push(res);
    });
  }

  getData(value){
    this._deu.videoEmit.next(value);
  }
  getUser2(){
    if(this.subMode2){
      this.sudMode2sub .unsubscribe();
    }else{
   this.sudMode2sub = this._deu.videoEmit.subscribe((res)=>{
      this.userList2.push(res);
    });
  }
    this.subMode2 = !this.subMode2;
  }
  
  getUser3(){
    this.subMode3 = !this.subMode3;
  }
}
