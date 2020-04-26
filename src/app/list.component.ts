import {Component} from "@angular/core";
import {List} from "./list";
@Component({
    selector: "app-list",
    template:`
    <h2>Mobile Companies</h2>
    <ul *ngFor="let list of mobileName" >  
    <li> {{list}}</li>
    </ul>
    <h2>Laptop Companies</h2>
    <ul *ngFor="let list of laptopName">
    <li>{{list}}</li>
    </ul>
    <app-users [count]="totalCount"></app-users>
    `
})
export class ListComponent{
    public totalCount:number=10;
    public mobileName;
    public laptopName;
    constructor(private lap:List,private mob:List){
        this.laptopName=lap.GetLaptopCompanyName();
        this.mobileName=mob.GetMobileCompanyName();
    }
}