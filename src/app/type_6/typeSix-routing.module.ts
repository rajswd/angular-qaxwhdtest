import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypeSixComponent } from './type-six/type-six.component';
import { PageoneComponent } from './child-six/pageone/pageone.component';
import { PagetwoComponent } from './child-six/pagetwo/pagetwo.component';
import { PagethreeComponent } from './child-six/pagethree/pagethree.component';


// import { AuthGuard }                from '../auth/auth.guard';

const typeSixRoutes: Routes = [
  {
    path: '',
    component: TypeSixComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'page1', component: PageoneComponent   },
          { path: 'page2', component: PagetwoComponent   },
          { path: 'page3', component: PagethreeComponent  },
          { path: '', component: PageoneComponent }
        ]
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(typeSixRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TypeSixRoutingModule {}