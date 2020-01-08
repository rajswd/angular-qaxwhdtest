import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeTwoComponent } from './type-two/type-two.component';


// import { AuthGuard }                from '../auth/auth.guard';

const typeTwoRoutes: Routes = [
  {
    path: '',
    component: TypeTwoComponent,
    
  }];

@NgModule({
  imports: [
    RouterModule.forChild(typeTwoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TypeTwoRoutingModule {}