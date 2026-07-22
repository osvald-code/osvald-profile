import { AfterViewInit, Component, ElementRef, inject, signal } from '@angular/core';
import { Hexagon } from "./hexagon/hexagon";

interface HexData{
  id:string,
  q:number,
  r:number
}


@Component({
  selector: 'app-hex-grid',
  imports: [Hexagon],
  templateUrl: './hex-grid.html',
  styleUrl: './hex-grid.scss',
})
export class HexGrid implements AfterViewInit {
  
  private elementRef = inject(ElementRef<HTMLElement>);
  width = signal(0);
  height = signal(0);

  hexWidth = this.width()/10;
  hexRadius = this.hexWidth/2;

  innerRing:Array<HexData>;
  middleRing:Array<HexData>;
  outerRing:Array<HexData>;

  qInnerRing:Array<number> = Array(6).fill(0);
  qMiddleRing:Array<number> = Array(12).fill(0);
  qOuterRing:Array<number> = Array(18).fill(0);

  rInnerRing:Array<number> = Array(6).fill(0);
  rMiddleRing:Array<number> = Array(12).fill(0);
  rOuterRing:Array<number> = Array(18).fill(0);

  ngAfterViewInit(): void {
    this.width.set(this.elementRef.nativeElement.offsetWidth);
    this.height.set(this.elementRef.nativeElement.offsetHeight);
  }
  
  constructor(){
    this.PopulateHexCoord(this.qInnerRing,0);
    this.PopulateHexCoord(this.qMiddleRing,0);
    this.PopulateHexCoord(this.qOuterRing,0);

    let i=0;
    for(let rq of this.qMiddleRing){
      console.log(i, rq);
      i++;
    }

    this.PopulateHexCoord(this.rInnerRing,-1);
    this.PopulateHexCoord(this.rMiddleRing,-2);
    this.PopulateHexCoord(this.rOuterRing,-3);

    for(let rq of this.rMiddleRing){
      console.log(i, rq);
      i++;
    }
    
    this.innerRing = Array(6).fill(null).map((_, index) => ({id:"IR" + index,q:0,r:0 }));
    this.middleRing = Array(12).fill(null).map((_, index) => ({id:"MR" + index,q:0,r:0 }));
    this.outerRing = Array(18).fill(null).map((_, index) => ({id:"OR" + index,q:0,r:0 }));

  }

  PopulateHexCoord(ring:number[], start:number){
    let actingNumber:number = start;
    let subSetSize = ring.length/6;
    let isIncreasing = true;
    for(let i=0;i<ring.length;){
      if(Math.abs(actingNumber) === subSetSize){
        for(let j=0;j<subSetSize+1;j++){
          ring[i] = actingNumber;
          i++;
        }
        isIncreasing = !isIncreasing;
      }else{
        ring[i] = actingNumber;
        i++
      }
      actingNumber = isIncreasing?actingNumber+1:actingNumber-1;
    }
  }
}

