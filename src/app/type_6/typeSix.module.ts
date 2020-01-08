import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { TypeSixRoutingModule } from './typeSix-routing.module';
import { PageoneComponent } from './child-six/pageone/pageone.component';
import { PagetwoComponent } from './child-six/pagetwo/pagetwo.component';
import { PagethreeComponent } from './child-six/pagethree/pagethree.component';
import { TypeSixComponent } from './type-six/type-six.component';



@NgModule({
  imports: [
    CommonModule,
    TypeSixRoutingModule
  ],
  declarations: [
    
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    TypeSixComponent
    
  ]
})
export class TypeSixModule {}