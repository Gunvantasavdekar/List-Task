import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ListComponent} from "./list.component";
import {List} from "./list";
import { UsersComponent } from './users.component';
import { Gendercomponent } from './gender.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SonglistComponent } from './songlist.component';
import { SongComponent } from './song.component';
import { MovieListComponent } from './movielist.component';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UsersComponent,
    Gendercomponent,
    ParentComponent,
    ChildComponent,
    SonglistComponent,
    SongComponent,
    MovieListComponent,
   

  ],
  imports: [
    BrowserModule
  ],
  providers: [List],
  bootstrap: [AppComponent]
})
export class AppModule { }
