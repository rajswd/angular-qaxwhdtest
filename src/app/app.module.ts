import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeOneComponent } from './type_1/type-one/type-one.component';
import { TypeFourComponent } from './type_4/type-four/type-four.component';
import { TypeFiveComponent } from './type_5/type-five/type-five.component';
import { TypeSevenComponent } from './type_7/type-seven/type-seven.component';
import { TypeEightComponent } from './type_8/type-eight/type-eight.component';
import { TypeNineComponent } from './type_9/type-nine/type-nine.component';
import { TypeTenComponent } from './type_10/type-ten/type-ten.component';
import { ChildOneComponent } from './type_1/type-one/childOne/child-one/child-one.component';
import { NumberFormatDirective } from './type_9/number-format.directive';
import { ChildeightComponent } from './type_8/child-8/childeight/childeight.component';


@NgModule({
  declarations: [
    AppComponent,
    TypeOneComponent,
    TypeFourComponent,
    TypeFiveComponent,
    TypeSevenComponent,
    TypeEightComponent,
    TypeNineComponent,
    TypeTenComponent,
    ChildOneComponent,
    NumberFormatDirective,
    ChildeightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
