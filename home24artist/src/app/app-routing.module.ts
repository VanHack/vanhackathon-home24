import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { BodyDetailComponent } from './body-detail/body-detail.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'detail', component: BodyDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
