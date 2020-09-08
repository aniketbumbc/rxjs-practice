import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './includes/promise/promise.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { AllComponent } from './includes/observable/all/all.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { IntervalComponent } from './includes/observable/interval/interval.component';
import { OfnfromComponent } from './includes/observable/ofnfrom/ofnfrom.component';
import { ToArrayComponent } from './includes/observable/to-array/to-array.component';
import { CustomObservableComponent } from './includes/observable/custom-observable/custom-observable.component';
import { MapoperatorComponent } from './includes/observable/mapoperator/mapoperator.component';
import { PluckoptComponent } from './includes/observable/pluckopt/pluckopt.component';
import { FilterComponent } from './includes/observable/filter/filter.component';
import { SubjectComponent } from './includes/observable/subject/subject.component';
import { Comp1Component } from './coms/comp1/comp1.component';
import { Comp2Component } from './coms/comp2/comp2.component';
import { Comp3Component } from './coms/comp3/comp3.component';
import { ReplaySubjectComponent } from './includes/observable/replay-subject/replay-subject.component';
import { TapComponent } from './includes/observable/tap/tap.component';
import { TakeComponent } from './includes/observable/take/take.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfnfromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapoperatorComponent,
    PluckoptComponent,
    FilterComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    TapComponent,
    TakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
