import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ListComponent} from "./list.component";
import {List} from "./list";
import { UsersComponent } from './users.component';
//import {Mobile} from "./mobile";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [List],
  bootstrap: [AppComponent]
})
export class AppModule { }
