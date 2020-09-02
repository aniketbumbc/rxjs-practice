import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  promiseVal:any;
  ngOnInit(): void {
    let buyLaptop = new Promise((reslove, reject) => {
      // reslove("promise reslove yupppee");
      //reject("Reject Promise")

      if (this.dellLaptop()) {
        return setTimeout(() => {
          reslove('Dell is purchased yupppee');
        }, 3000);
       
      } else if (this.hpLaptop()) {
        return setTimeout(() => {
          reslove('HP is purchased yupppee');
        }, 3000);
      } else {
        return setTimeout(() => {
            reject('No laptop is in store');
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log('Got it =>', res);
        this.promiseVal = res;
      })
      .catch((e) => {
        console.log('catch code =>', e);
        this.promiseVal = e;
      });
  }
  dellLaptop() {
    return false;
  }
  hpLaptop() {
    return false;
  }
}
