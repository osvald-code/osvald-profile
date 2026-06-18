import { Component, computed, input, Input, inject, signal} from '@angular/core';
import {CdkDrag, CdkDragPlaceholder} from '@angular/cdk/drag-drop';
import { TileManager } from '../tile-manager';
import { OverlayModule } from '@angular/cdk/overlay';
@Component({
  selector: 'expandable-tile',
  imports: [CdkDrag, CdkDragPlaceholder,OverlayModule],
  templateUrl: './expandable-tile.html',
  styleUrl: './expandable-tile.scss',
})


export class ExpandableTile{
  public title = input<string>('');
  @Input() id:number = 0;
  tileManager = inject(TileManager);
  isOverlayVisible = signal(false);
  isVisible = computed(() => this.title() === '');
  innerWidth = this.tileManager.tileInnerSize; 
  innerHeight = this.innerWidth; //its a square lol
  tileWidth = this.tileManager.tileOuterSize;
  tileHeight = this.tileWidth

  showOverlay = ():void =>{
    this.isOverlayVisible.set(!this.isOverlayVisible())
      console.log("Overlay: ",this.isOverlayVisible());
    }
    
  };

