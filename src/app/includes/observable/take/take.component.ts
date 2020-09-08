import { Component, OnInit } from '@angular/core';
import { interval,timer, fromEvent } from 'rxjs';
import { take, takeLast, takeUntil,map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private _des:DesignUtilityService) { }

  ngOnInit(): void {
    const soure = interval(1000);
    const soure1 = interval(1000);
    const cities = [
      'Sydney',
      'Albury',
      'Armidale',
      'Bathurst',
      'Broken Hill',
      'Cessnock',
      'Coffs Harbour',
      'Dubbo',
      'Gosford',
      'Goulburn',
      'Grafton',
      'Griffith',
      'Lake Macquarie',
      'Lismore',
      'Maitland',
      'Newcastle',
      'Nowra',
      'Orange',
      'Port Macquarie',
      'Queanbeyan',
      'Tamworth',
      'Tweed Heads',
      'Wagga Wagga',
      'Wollongong',
      'Wyong',
  ]
    soure.pipe(
      take(4)
    ).
    subscribe((res)=>{
      this._des.print(cities[res],'elContainer');
    })
    //let condtion1 = timer(3000);
    let condtion1 = fromEvent(document,'click');
    soure.pipe(
      
      map((res => 'Number ' + res)),
       
        takeUntil(condtion1)
    )
    .subscribe((res)=>{
      console.log(res)
      this._des.print(res,'elContainer1');
    })
    
  }

}
