import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  constructor(private _designservice: DesignUtilityService) {}

  ngOnInit(): void {
    console.log("text");
    this._designservice.exclusive.subscribe((res)=>{
      this.exclusive = res;
    })
  }
}
