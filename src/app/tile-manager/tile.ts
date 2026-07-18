
export class Tile{
    id:number;
    title:string;
    isVisible:boolean = false;
    icon:string = "";
    constructor(id:number = -1,title:string = '', icon:string =''){
        this.id = id;
        this.title = title;
        this.icon = icon;
        this.isVisible = title !== '';
    }
}