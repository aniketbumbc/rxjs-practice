import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
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
