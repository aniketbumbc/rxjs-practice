import { Component, OnInit } from '@angular/core';
import { interval, from, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  unSubMode: Subscription;
  unSubMode2: Subscription;
  myColor:any = '';
  constructor(private _des: DesignUtilityService) {}

  ngOnInit(): void {
    const source = interval(1000);
    const city = [
      'Sydney',
      'Albury',
      'Armidale',
      'Bathurst',
      'Broken Hill',
      'Cessnock',
      'Coffs Harbour',
    ];
    this.unSubMode = source
      .pipe(
        tap((res) => {
          if (res == city.length) {
            this.unSubMode.unsubscribe();
          }
        }),
        map((res) => {
          this._des.print(city[res], 'elContainer');
        })
      )
      .subscribe((res) => {});


      const color = [
        'red',
        'blue',
        'black',
        'pink',
        'green',
        'gray',
        'green',
      ];


      this.unSubMode2 = source
      .pipe(
        tap((res) => {
          this.myColor = color[res];
          if (res == color.length) {
            this.unSubMode2.unsubscribe();
          }
        }),
        map((res) => {
          
          this._des.print(color[res], 'elContainer1');
        })
      )
      .subscribe((res) => {});
  }
}
