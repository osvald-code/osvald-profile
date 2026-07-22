export class HexModel{
    width:number;
    height:number;
    outerRadius:number;
    innerRadius:number;
    s:number;
    q:number;
    r:number;
    x:number=0;
    y:number=0;
    constructor(width:number,r:number,q:number){
        this.width = width;
        this.outerRadius = width/2;
        this.innerRadius = this.outerRadius * Math.sqrt(3);
        this.height = this.innerRadius*2;
        this.q = q;
        this.r = r;
        this.s = -q-r;
    }
}