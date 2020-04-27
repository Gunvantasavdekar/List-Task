import{Component,Input,Output,EventEmitter} from "@angular/core";
@Component({
    selector: "app-child",
    template:`
   <div class="container">
    <div class="raw">
     <div class="col-md-12">
          <h1>CHILD SECTION</h1>
           {{name}}

           <button type="button" class="btn btn-danger btn-md"
              (click)=" AddEmail()"
              >
              click
           </button>
        </div>
     </div>
   </div>
    `
})

export class ChildComponent{
    @Input() public name:string;
    public mail:string="G@gmail.com";
    @Output() public event = new EventEmitter()

    AddEmail(){
        this.event.emit(this.mail);
        
    }
    
}