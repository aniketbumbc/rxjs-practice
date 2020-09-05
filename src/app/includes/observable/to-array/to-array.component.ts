import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from,of} from 'rxjs';
import { toArray,take} from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
sourceSub:Subscription;
 cars = [
  {
    "color": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
  {
    "color": "blue",
    "type": "station metro",
    "capacity": 5
  },
  {
    "color": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
  {
    "color": "blue",
    "type": "station metro",
    "capacity": 5
  },
  {
    "color": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
  {
    "color": "blue",
    "type": "station metro",
    "capacity": 5
  },
]
  constructor(private _designservice:DesignUtilityService) { }
// toarray,pipe,take

  ngOnInit(): void {
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
      ).subscribe((res)=>{
    console.log(res);
    })

    // example 2 from to array

    const source2 = from(this.cars);
    source2.pipe(
      take(7),
      toArray()
    ).
    subscribe((res)=>console.log(res));

        // example 3 argument to array 
      
        const source3 = of('aniket','bunny','yahoo');
        source3.pipe(toArray()).subscribe((res)=>console.log(res));
  }

}
