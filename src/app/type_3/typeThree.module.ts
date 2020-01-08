import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';


import { TypeThreeComponent } from './type-three/type-three.component';
import { TypeThreeRoutingModule } from './typeThree-routing.module';
import { ChildthreeComponent } from './type-three/childthree/childthree.component';
import { SecondChildComponent } from './type-three/second-child/second-child.component';

@NgModule({
  imports: [
    CommonModule,
    TypeThreeRoutingModule
  ],
  declarations: [
    TypeThreeComponent,
    ChildthreeComponent,
    SecondChildComponent
    
  ]
})
export class TypeThreeModule {}