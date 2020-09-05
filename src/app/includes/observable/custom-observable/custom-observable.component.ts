import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit,OnDestroy {
  techStatus: any;
  subScription: Subscription;
  names:any;
  constructor(private _disignuitlity: DesignUtilityService) {}

  ngOnInit(): void {
    //example 1 manual.

    const custObs = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);

      setTimeout(() => {
        observer.next('Java');
      }, 4000);

      setTimeout(() => {
        observer.next('CSS n HTML');
        observer.complete();
      }, 6000);

      setTimeout(() => {
        observer.next('Node JS');
        observer.error(new Error('limit exceed'));
      }, 8000);
    });
    custObs.subscribe(
      (res) => {
        this._disignuitlity.print(res, 'elContainer');
      },
      (err) => {
        // console.log(err);
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'done';
      }
    );

    // example 02
      const array2 = ['Angular','JS','Java','Node','Mongo','AWS'];
    const custObse2 = Observable.create((obs) => {
      let count = 0;
      setInterval(() => {
        obs.next(array2[count]);

        if(count >=3){
         obs.error("emit error");
        }
        count++;
      }, 1000);
   
    });

    this.subScription = custObse2.subscribe((res) => {
      this._disignuitlity.print(res, 'elContainer1');
    });

    // example 03
    const array3 = ['Aniket',' Bunny','Ipad','Aniket-1',' Bunny-1','Ipad-1'];
    const custObs3 = Observable.create((obs)=>{
      let count = 0;
      setInterval(() => {

        obs.next(array3[count]);

        if(count >=5){
         obs.error("emit error names ");
        }
        count++;
      }, 1000);

    })

    custObs3.subscribe((res)=>{
      console.log(res);
      this.names = res;
    })
  }


  ngOnDestroy(){
    this.subScription.unsubscribe();
  }
}
