import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  constructor() { }

  exclusive = new Subject<boolean>();
  username = new BehaviorSubject("Bunny");
  videoEmit = new ReplaySubject<string>(3,3000);

  print(val,containerId){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }
}
