import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription: Subscription;
  constructor(private _disignutility:DesignUtilityService) {}

  ngOnInit(): void {
    const broadCastVideos = interval(1000);

    this.videoSubscription = broadCastVideos.subscribe((res) => {
      this.obsMsg = `video ${res}`;
      this._disignutility.print(this.obsMsg,'elContainer');
      this._disignutility.print(this.obsMsg,'elContainer2');
      this._disignutility.print(this.obsMsg,'elContainer3');
      if (res >= 6) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
