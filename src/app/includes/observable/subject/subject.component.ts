import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit,OnDestroy {
  userName:any;
  constructor(private _designservice: DesignUtilityService) { }

  ngOnInit(): void {
    this._designservice.exclusive.next(true);
    this._designservice.username.subscribe((res)=>{
      this.userName = res;

    })
  }
  ngOnDestroy(){
    this._designservice.exclusive.unsubscribe();
  
  }
}
