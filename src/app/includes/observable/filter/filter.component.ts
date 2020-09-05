import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { toArray,filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  data2:any;
  data3:any;
  data:any;
  constructor() {}

  emplyoee = [
    { id: 1, name: 'aniket', gender: 'male' },
    { id: 2, name: 'aniketmahe', gender: 'female' },
    { id: 3, name: 'aniketbhavsa', gender: 'male' },
    { id: 4, name: 'dont', gender: 'female' },
    { id: 5, name: 'bunny', gender: 'male' },
    { id: 6, name: 'bon', gender: 'female' },
    { id: 7, name: 'ramesh', gender: 'male' },
    { id: 8, name: 'ajay', gender: 'female' },
    { id: 9, name: 'sachin', gender: 'male' },
    { id: 10, name: 'don', gender: 'male' },
    { id: 11, name: 'yahooooo', gender: 'female' },
    { id: 12, name: 'bunnyy', gender: 'female' },
  ];

  ngOnInit(): void {
    const source = from(this.emplyoee);

    //example1

    source.pipe(
      filter(member => member.name.length < 5),
      toArray()
    )
    .subscribe((res)=> {
      this.data = res;
    });

     //example 2

     source.pipe(
      filter(member => member.gender == 'female'),
      toArray()
    )
    .subscribe((res)=> {
      this.data2 = res;
    });

         //example 3
         source.pipe(
          filter(member => member.id <= 6),
          toArray()
        )
        .subscribe((res)=> {
          this.data3 = res;
        });
    
  }
}
