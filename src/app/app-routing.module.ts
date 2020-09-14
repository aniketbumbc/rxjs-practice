import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ReplaySubjectComponent } from './includes/observable/replay-subject/replay-subject.component';
import { TapComponent } from './includes/observable/tap/tap.component';
import { TakeComponent } from './includes/observable/take/take.component';
import { RetryComponent } from './includes/observable/retry/retry.component';


const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent,children:[
   {path: '', component:AllComponent},
   {path:'fromEvent',component:FromEventComponent},
   {path:'interval',component:IntervalComponent},
   {path:'of-from',component:OfnfromComponent},
   {path:'toarray',component:ToArrayComponent},
   {path:'ctsobse',component:CustomObservableComponent},
   {path:'mapotpr',component:MapoperatorComponent},
   {path:'pluck',component:PluckoptComponent},
   {path:'filter',component:FilterComponent},
   {path:'subject',component:SubjectComponent},
   {path:'reaplay-subject',component:ReplaySubjectComponent},
   {path:'tap',component:TapComponent},
   {path:'take',component:TakeComponent},
   {path:'retry',component:RetryComponent},

  ] },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
