import { Component,Input } from "@angular/core"

@Component({
    selector: "app-users",
    template: `
    <hr/>
    <i class="fa fa-heart fa-2x" aria-hidden="true"
    [class.heart-color]="activeheart" 
    (click)="Likeheart()"
    ></i>
    
    {{count}}
    `,
    styles: [`
      .heart-color{
          color:red;
      }
    
    `]
})

export class UsersComponent {
   @Input() public count: number;
    public chooseColor: boolean = false;
    public chooseStyle: boolean = false;
    public isActivestar: boolean = true;
    public activeheart:boolean=false;
    Action() {
        this.chooseColor = !this.chooseColor;
    };
    Area() {
        this.chooseStyle = !this.chooseStyle;
    };
    LikeStar() {
        this.isActivestar = !this.isActivestar;
    }
    Likeheart(){
        this.activeheart=!this.activeheart;
        this.count += this.activeheart ? 1:-1;
        // if(this.activeheart){
        //     this.count=this.count +1
        // }else{
        //     this.count=this.count -1
        // }
    }
    
}