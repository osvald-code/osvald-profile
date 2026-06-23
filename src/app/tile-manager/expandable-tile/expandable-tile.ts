import { Component, computed, input, inject, signal} from '@angular/core';
import {CdkDrag, CdkDragPlaceholder} from '@angular/cdk/drag-drop';
import { TileManager } from '../tile-manager';
import { OverlayModule } from '@angular/cdk/overlay';
import { Tile } from '../tile';
@Component({
  selector: 'expandable-tile',
  imports: [CdkDrag, CdkDragPlaceholder,OverlayModule],
  templateUrl: './expandable-tile.html',
  styleUrl: './expandable-tile.scss',
})


export class ExpandableTile{
  tile = input.required<Tile>();
  tileManager = inject(TileManager);
  isOverlayVisible = signal(false);
  isTileVisible = computed( () => this.tile().isVisible);
  innerWidth = this.tileManager.tileInnerSize; 
  innerHeight = this.innerWidth; //its a square lol
  tileWidth = this.tileManager.tileOuterSize;
  tileHeight = this.tileWidth

  showOverlay = ():void =>{
    this.isOverlayVisible.set(!this.isOverlayVisible())
      console.log("Overlay: ",this.isOverlayVisible());
    }
  };

