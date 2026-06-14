import {InputSignal} from '@angular/core'


export class Tile{
    public id:number;
    public title:string;
    constructor(id:number,title:string){
        this.id = id;
        this.title = title;
    }
}