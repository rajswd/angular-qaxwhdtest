import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeOneComponent } from './type_1/type-one/type-one.component';
import { TypeFourComponent } from './type_4/type-four/type-four.component';
import { TypeFiveComponent } from './type_5/type-five/type-five.component';
import { TypeSevenComponent } from './type_7/type-seven/type-seven.component';
import { TypeEightComponent } from './type_8/type-eight/type-eight.component';
import { TypeNineComponent } from './type_9/type-nine/type-nine.component';
import { TypeTenComponent } from './type_10/type-ten/type-ten.component';
import { TypeElevenComponent } from './type_11/type-eleven/type-eleven.component';


const routes: Routes = [
  { path: 'type-1', component: TypeOneComponent },
  { path: 'type-2', 
    loadChildren: () => import('./type_2/typeTwo.module').then(mod => mod.TypeTwoModule)
  },
  { path: 'type-3',
    loadChildren: ()=> import('./type_3/typeThree.module').then(mod => mod.TypeThreeModule)
  },
  { path: 'type-4', component: TypeFourComponent },
  { path: 'type-5', component: TypeFiveComponent },
  { path: 'type-6',
    loadChildren: ()=> import('./type_6/typeSix.module').then(mod => mod.TypeSixModule)
  },
  { path: 'type-7', component: TypeSevenComponent },
  { path: 'type-8', component: TypeEightComponent },
  { path: 'type-9', component: TypeNineComponent },
  { path: 'type-10', component: TypeTenComponent },
  { path: 'type-11', component: TypeElevenComponent },
  { path: '',   redirectTo: '/type-1', pathMatch: 'full' },
  { path: '**',   redirectTo: 'type-1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
