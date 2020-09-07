import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName:string;

  constructor(private _designservice: DesignUtilityService) { }

  ngOnInit(): void {
   
    this._designservice.username.subscribe((res)=>{
      this.userName = res;

    })

  }

  changeName(e:any){
    this._designservice.username.next(e);
    
  }

}
