import { afterNextRender, Component, computed, ElementRef, inject, OnDestroy, signal } from '@angular/core';
import { Hexagon } from "./hexagon/hexagon";
import { HexModel } from './hexagon/hex-model';
import { O } from '@angular/cdk/keycodes';

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
export class HexGrid implements OnDestroy {
  
  private elementRef = inject(ElementRef<HTMLElement>);
  private resizeObserver?:ResizeObserver;
  parentWidth = signal(0);
  parentHeight = signal(0);

  hexWidth = computed(()=>this.parentWidth()/10);
  hexRadius = computed(() => this.hexWidth()/2);

  innerRing!:Array<HexData>;
  middleRing!:Array<HexData>;
  outerRing!:Array<HexData>;

  qInnerRing:Array<number> = Array(6).fill(0);
  qMiddleRing:Array<number> = Array(12).fill(0);
  qOuterRing:Array<number> = Array(18).fill(0);

  rInnerRing:Array<number> = Array(6).fill(0);
  rMiddleRing:Array<number> = Array(12).fill(0);
  rOuterRing:Array<number> = Array(18).fill(0);
  hexModels:Array<HexModel> = Array<HexModel>(0);

  
  constructor(){
    this.PopulateHexCoord(this.qInnerRing,0);
    this.PopulateHexCoord(this.qMiddleRing,0);
    this.PopulateHexCoord(this.qOuterRing,0);

    this.PopulateHexCoord(this.rInnerRing,-1);
    this.PopulateHexCoord(this.rMiddleRing,-2);
    this.PopulateHexCoord(this.rOuterRing,-3);

    this.innerRing = Array(6).fill(null).map((_, i) => ({id:"IR" + i,q:this.qInnerRing[i],r:this.rInnerRing[i]}));
    this.middleRing = Array(12).fill(null).map((_, i) => ({id:"MR" + i,q:this.qMiddleRing[i],r:this.rMiddleRing[i]}));
    this.outerRing = Array(18).fill(null).map((_, i) => ({id:"OR" + i, q:this.qOuterRing[i],r:this.rOuterRing[i]}));
    const rootModel = new HexModel("S0", this.hexWidth, 0, 0)
    this.hexModels = [...this.innerRing, ...this.middleRing, ...this.outerRing].map(hexData => {
      const model = new HexModel(hexData.id, this.hexWidth, hexData.r, hexData.q);  
      model.x = computed(() => model.calcWidth() + this.parentWidth()/2);
      model.y = computed(() => 
        model.calcHeight() + this.parentHeight()/2 + (!(model.q & 1) ? model.innerRadius()/2: model.innerRadius())
      );
      return model;
    });
    this.hexModels.push(rootModel);
    afterNextRender(() => {
        this.resizeObserver = new ResizeObserver(entries => {
          const entry = entries[0];
          if (!entry) {return;}

          const { width, height } = entry.contentRect;

          this.parentWidth.set(width);
          this.parentHeight.set(height);

          rootModel.x = computed(() => width / 2);
          rootModel.y = computed(() => height / 2 + rootModel.innerRadius()/2);
        });

        this.resizeObserver.observe(this.elementRef.nativeElement);
      });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  PopulateHexCoord(ring:number[], start:number){
    let actingNumber:number = start;
    let subSetSize = ring.length/6;
    let isIncreasing = true;
    for(let i=0;i<ring.length;){
      if(Math.abs(actingNumber) === subSetSize){
        for(let j=0;j<subSetSize+1;j++){
          ring[i++] = actingNumber;
        }
        isIncreasing = actingNumber<0;
      }else{
        ring[i++] = actingNumber;
      }
      actingNumber = isIncreasing?actingNumber+1:actingNumber-1;
    }
  }
}

