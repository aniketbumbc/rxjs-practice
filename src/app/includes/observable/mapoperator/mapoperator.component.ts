import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-mapoperator',
  templateUrl: './mapoperator.component.html',
  styleUrls: ['./mapoperator.component.scss'],
})
export class MapoperatorComponent implements OnInit {
  stopSub: Subscription;
  stopSub1: Subscription;
  constructor(private _designService: DesignUtilityService) {}

  ngOnInit(): void {
    // example1

    const broardCast = interval(1000);

    this.stopSub = broardCast
      .pipe(map((data) => 'video ' + data * 3))
      .subscribe((res) => {
        this._designService.print(res, 'elContainer');
      });

    setTimeout(() => {
      this.stopSub.unsubscribe();
    }, 11000);

    // example2

    this.stopSub1 = broardCast
      .pipe(map((data) => data + 100))
      .subscribe((res) => {
        this._designService.print(res, 'elContainer-1');
      });

    setTimeout(() => {
      this.stopSub1.unsubscribe();
    }, 5000);

    // Object example

    const carObj = from([
      {
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
      },
      {
        make: 'Ford-1',
        model: 'Mustang',
        year: 1969,
      },
      {
        make: 'Ford-2',
        model: 'Mustang',
        year: 1969,
      },
      {
        make: 'Ford-3',
        model: 'Mustang',
        year: 1969,
      },
      {
        make: 'Ford-4',
        model: 'Mustang',
        year: 1969,
      },
      {
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
      },
      {
        make: 'Ford-0',
        model: 'Mustang',
        year: 1969,
      },
      {
        make: 'Fordd',
        model: 'Mustang',
        year: 1969,
      },
      {
        make: 'Forded',
        model: 'Mustang',
        year: 1969,
      },
    ]);

    carObj.pipe(map((data) => data.make)).subscribe((res) => {
      this._designService.print(res, 'elContainer-2');
    });
  }
}
