import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, toArray, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluckopt',
  templateUrl: './pluckopt.component.html',
  styleUrls: ['./pluckopt.component.scss'],
})
export class PluckoptComponent implements OnInit {
  data: any;
  data2:any;
  constructor() {}
  cars = [
    {
      make: 'Ford',
      model: 'Mustang',
      year: 1969,
      color:{
        color: 'red',
        carpet: 'blue',
      }
    },
    {
      make: 'Ford-1',
      model: 'Mustang',
      year: 1969,
      color:{
        color: 'red',
        carpet: 'pink',
      }
    },
    {
      make: 'Ford-2',
      model: 'Mustang',
      year: 1969,
      color:{
        color: 'red',
        carpet: 'black',
      }
    },
    {
      make: 'Ford-3',
      model: 'Mustang',
      year: 1969,
      color:{
        color: 'red',
        carpet: 'green',
      }
    },
  ];
  ngOnInit(): void {
    from(this.cars)
      .pipe(
          pluck('make'),
        //map((data) => data.make),
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
      });



      from(this.cars)
      .pipe(
          pluck('color','carpet'),
        //map((data) => data.make),
        toArray()
      )
      .subscribe((res) => {
        this.data2= res;
      });
  }
}
