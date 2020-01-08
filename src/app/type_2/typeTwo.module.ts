import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TypeTwoComponent } from './type-two/type-two.component';
import { TypeTwoRoutingModule } from './typeTwo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TypeTwoRoutingModule
  ],
  declarations: [
    TypeTwoComponent
    
  ]
})
export class TypeTwoModule {}