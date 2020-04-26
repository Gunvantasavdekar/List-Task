import{Component} from "@angular/core";
@Component({
    selector:"app-gender",
    templateUrl:"./gender.component.html"
})
export class Gendercomponent{
    public male={
        Name:"JOY DOE",
        imgurl:"../assets/img/images (1).jpg"
    };
    public female={
        Name:"Angelina jolie",
        imgurl:"../assets/img/images (2).jpg"
    };
    public selectuser;
}