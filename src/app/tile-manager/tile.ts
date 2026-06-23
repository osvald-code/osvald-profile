
export class Tile{
    id:number;
    title:string;
    isVisible:boolean = false;
    constructor(id:number = -1,title:string = ''){
        this.id = id;
        this.title = title;
        this.isVisible = title !== '';
    }
}