import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TileManager {
  static readonly TILE_WIDTH = 128;
  public readonly tileSize = `${TileManager.TILE_WIDTH}px`;
  public windowWidth = signal(window.innerWidth);
  public windowHeight = signal(window.innerHeight);
  public tileTotal = computed(()=> this.columnTileCount() * this.rowTileCount());
  private columnTileCount = computed(() => Math.floor(this.windowWidth() / TileManager.TILE_WIDTH));
  private rowTileCount = computed(() => Math.floor(this.windowHeight() / TileManager.TILE_WIDTH));

  public readonly startingTitles = [
    "Home",
    "Projects",
    "About",
    "Contact"
  ];

  
  


}
