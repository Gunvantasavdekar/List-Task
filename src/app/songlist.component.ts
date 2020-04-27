import {Component} from "@angular/core";
@Component({
    selector:"app-songs",
    template:`
    <div class="container">
        <div class="row">
           <div class="col-md-12">
            <app-song [songs]="songs"(data)="AddSong($event)"></app-song>

           </div>
        </div>
    </div>

    `
})

export class SonglistComponent{
    public songs=[{
        id:1,
        name:"Life is Good"
    },
    {
        id:2,
        name:"Only The Young"
    }, 
    {
         id:3,
         name:"Old Me"
    },
    {
         id:4,
         name:"Selfish"
    }
    ];
    constructor(){}
    AddSong(data){
        this.songs.push(data);
    }
}