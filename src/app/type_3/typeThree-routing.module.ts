import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeThreeComponent } from './type-three/type-three.component';
import { AuthGuard } from '../guard/authentication';
import { ChildthreeComponent } from './type-three/childthree/childthree.component';
import { SecondChildComponent } from './type-three/second-child/second-child.component';



const typeTwoRoutes: Routes = [
  {
    path: '',
    component: TypeThreeComponent,
    
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard], 
        children: [
          { path: 'child-1', component: ChildthreeComponent},
          { path: 'child-2', component: SecondChildComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(typeTwoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TypeThreeRoutingModule {}