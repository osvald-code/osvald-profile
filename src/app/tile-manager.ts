import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TileManager{
  static readonly TILE_WIDTH = 128;
  static readonly TILE_MARGIN = 15;
  private readonly tileSize = TileManager.TILE_WIDTH+(TileManager.TILE_MARGIN*2);

  public readonly tileMargin = `${TileManager.TILE_MARGIN}px`;
  public readonly tileInnerSize = `${TileManager.TILE_WIDTH}px`;
  public readonly tileOuterSize =`${this.tileSize}px`

  public width = signal(TileManager.TILE_WIDTH);
  public height = signal(TileManager.TILE_WIDTH);
  public tileTotal = computed(()=> ((this.columnTileCount() * this.rowTileCount()))); 
  public columnTileCount = computed(() => Math.floor(this.width() / this.tileSize));
  public rowTileCount = computed(() => Math.floor(this.height() / this.tileSize));
  public sidePadding = computed(() => `${(this.width()-(this.columnTileCount()*TileManager.TILE_WIDTH))/2}px`);

  printOut = ():void => {
    console.log("width: ", this.width());
    console.log("height: ", this.height());
    console.log("tile size: ", this.tileSize);
    console.log("cols: ",this.columnTileCount());
    console.log("rows: ",this.rowTileCount());
    console.log("padding: ",this.sidePadding());
    console.log("Tile total: ", this.tileTotal());
  }

  public readonly startingTitles = [
    "Home",
    "Projects",
    "About",
    "Contact"
  ];



}
