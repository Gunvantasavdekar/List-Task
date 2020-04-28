import {Component} from "@angular/core"
@Component({
    selector:"app-movie",
    template:`
     <div class="container">
       <div class="row">
          <div class="col-md-12">
            <ul *ngFor="let movie of movies; let i=index">
              <li>{{i+1}}-{{movie.id}}</li>
              <li>{{i+1}}-{{movie.name}}</li>
            </ul>
              
            <h1 *ngIf="username.length >=5; else error">{{username}}</h1>
             <ng-template #error>
              <h1>Username must be a 5  characters</h1>
             </ng-template>
          </div>
       </div>
       <div class="row">
       <div class="col-md-12">
       <button type="button" class="btn btn-danger btn-md"
       (click)="section='home'"
       >Home</button>
       <button type="button" class="btn btn-primary btn-md"
       (click)="section='about'"
       >About</button>

       <div [ngSwitch]="section" *ngIf="section">
       <h1 *ngSwitchCase="'home'">HOME SECTION</h1>
       <h1 *ngSwitchCase="'about'">ABOUT SECTION</h1>
       <h1 *ngSwitchDefault>Not FOUND</h1>
       </div>
       </div>
       </div>
     </div>   
    
    `
})
export class MovieListComponent{
    public username:string="Guna";
    public section;
    public movies:any[]=[{
         id:1,
         name:"Black Window"
        },
        {
            id:2,
            name:"Wonder Women"
        },
        {
            id:3,
            name:"No Time To Die"
        },
        {
            id:4,
            name:"Bad Boys For Life"
        }
    ]

}