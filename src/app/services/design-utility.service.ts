import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  constructor() { }

  exclusive = new Subject<boolean>();
  username = new BehaviorSubject("Bunny");

  print(val,containerId){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }
}
