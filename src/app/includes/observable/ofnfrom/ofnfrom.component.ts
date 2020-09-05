import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-ofnfrom',
  templateUrl: './ofnfrom.component.html',
  styleUrls: ['./ofnfrom.component.scss']
})
export class OfnfromComponent implements OnInit {

  constructor(private _designService:DesignUtilityService) { }

  ngOnInit(): void {
    // of example

    const ObsOf = of('Aniket',' Bunny','Ipad');

    ObsOf.subscribe((res)=>{
      this._designService.print(res,'elContainer');
    });


    const ObsOf1 = of({a:'Aniket',b:' Bunny',c:'Ipad'});

    ObsOf1.subscribe((res)=>{
      this._designService.print(JSON.stringify(res),'elContainer1');
    });

    const ObsFrom1 = from(['Aniket',' Bunny','Ipad']);
    ObsFrom1.subscribe((res)=>{
      this._designService.print(res,'elContainer2');
    })

    //promise to from

    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Promise Resolve');
      },2000);
    })

    const ObsFromPromise = from(promise)
    ObsFromPromise.subscribe((res)=>{
      this._designService.print(res,'elContainer3');
    })

    // from string


    const ObsFromString = from('Welcome to From Opetr')
    ObsFromString.subscribe((res)=>{
      this._designService.print(res,'elContainer4');
    })


  }

}
