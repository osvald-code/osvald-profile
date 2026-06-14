import { Component, computed, input, Input, inject} from '@angular/core';
import {CdkDrag, CdkDragPlaceholder} from '@angular/cdk/drag-drop';
import { TileManager } from '../tile-manager';
import { Tile } from '../tile';
@Component({
  selector: 'expandable-tile',
  imports: [CdkDrag, CdkDragPlaceholder],
  templateUrl: './expandable-tile.html',
  styleUrl: './expandable-tile.scss',
})


export class ExpandableTile{
  public title = input<string>('');
  @Input() id:number = 0;
  tileManager = inject(TileManager);

  isVisible = computed(() => this.title() === '');

  width:string = this.tileManager.tileSize;
  height:string = this.width;
}
