import { computed, Signal, signal } from "@angular/core";

export class HexModel{
    id;
    width:Signal<number> = signal(0);
    height:Signal<number> = signal(0);
    outerRadius:Signal<number> = signal(0);
    innerRadius:Signal<number> = signal(0);
    s:number;
    q:number;
    r:number;
    x:Signal<number>=signal(0);
    y:Signal<number>=signal(0);
    calcWidth:Signal<number>=signal(0);
    calcHeight:Signal<number>=signal(0);
    offsetY = 0;
    constructor(id:string, width:Signal<number>,r:number,q:number){
        this.id = id;
        this.width = computed(() => width());
        this.outerRadius = computed(() => width() / 2);
        this.innerRadius = computed(() => this.outerRadius() * Math.sqrt(3));
        this.height = computed(() => this.innerRadius() * 2);
        this.q = q;
        this.r = r;
        this.s = -q-r;
        this.offsetY = r + (q - (q&1))/2;
        this.calcWidth = computed(() => q * this.outerRadius() * 3/2 );
        this.calcHeight = computed(()=> this.offsetY * this.innerRadius());
    }
}