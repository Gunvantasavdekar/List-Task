import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ListComponent} from "./list.component";
import {List} from "./list";
import { UsersComponent } from './users.component';
import { Gendercomponent } from './gender.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UsersComponent,
    Gendercomponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [List],
  bootstrap: [AppComponent]
})
export class AppModule { }
