import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestHomeComponent } from './home/test-home.component';

const routes: Routes = [
  {
    path: '', component: TestHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
