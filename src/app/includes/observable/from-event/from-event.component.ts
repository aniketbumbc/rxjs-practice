import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { DesignUtilityService } from '../../../services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn: ElementRef;
  count: any = 1;

  constructor(private _designService: DesignUtilityService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let val = `video ${this.count++}`;
      this._designService.print(val, 'elCotainer');
      this._designService.print(val, 'elCotainer-1');
    });
  }
}
