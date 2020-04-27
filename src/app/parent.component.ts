import{Component} from "@angular/core";
@Component({
    selector: "app-parent",
    template:`
    <div class="container">
     <div class="raw">
        <div class="col-md-12">
        <h1>PARENT SECTION</h1>
        <h2>{{usermail}}</h2>
        <app-child [name]="username" (event)="AddUser($event)"></app-child>
        </div>
      </div>
    </div>

    `
})
export class ParentComponent{
    public username:string ="Gunvanta";
    public usermail:string;
    AddUser(data){
     this.usermail=data;
    }
}