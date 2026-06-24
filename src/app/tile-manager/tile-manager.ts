import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import { Tile } from './tile';

@Injectable({
  providedIn: 'root',
})
export class TileManager{
  static readonly TILE_WIDTH = 48;
  static readonly TILE_MARGIN = 20;
  private readonly tileSize = TileManager.TILE_WIDTH+(TileManager.TILE_MARGIN*2);

  readonly tileMargin = `${TileManager.TILE_MARGIN}px`;
  readonly tileInnerSize = `${TileManager.TILE_WIDTH}px`;
  readonly tileOuterSize =`${this.tileSize}px`


  width = signal(TileManager.TILE_WIDTH);
  height = signal(TileManager.TILE_WIDTH);
  tileTotal = computed(()=> ((this.columnTileCount() * this.rowTileCount()))); 
  columnTileCount = computed(() => Math.floor(this.width() / this.tileSize));
  rowTileCount = computed(() => Math.floor(this.height() / this.tileSize));
  sidePadding = computed(() => `${(this.width()-(this.columnTileCount()*TileManager.TILE_WIDTH))/2}px`);
  openTile:Tile|undefined = new Tile();
  isOverlayVisible = signal(false);

  items = signal(
    Array.from({ length: this.tileTotal() }, (_, i) => (
      new Tile(i,this.startingTitles[i] ?? ''))
    )
  );

  printOut = ():void => {
    console.log("width: ", this.width());
    console.log("height: ", this.height());
    console.log("tile size: ", this.tileSize);
    console.log("cols: ",this.columnTileCount());
    console.log("rows: ",this.rowTileCount());
    console.log("padding: ",this.sidePadding());
    console.log("Tile total: ", this.tileTotal());
  }

  readonly startingTitles = [
    "Home",
    "Projects",
    "About",
    "Contact"
  ];

  openOverlay = (id:number):void => {
    this.openTile = this.items().find(item => item.id === id);
    if(this.openTile?.isVisible??false){
      this.isOverlayVisible.set(true)
    }
  };

  closeOverlay = ():void => this.isOverlayVisible.set(false);
};
