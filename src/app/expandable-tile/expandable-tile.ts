import { Component, input, Input } from '@angular/core';
import {CdkDrag, CdkDragPlaceholder} from '@angular/cdk/drag-drop';

@Component({
  selector: 'expandable-tile',
  imports: [CdkDrag, CdkDragPlaceholder],
  templateUrl: './expandable-tile.html',
  styleUrl: './expandable-tile.scss',
})


export class ExpandableTile {
  public title = input<string>('default');
  @Input() id:number =0;
  
  readonly INITIAL_WIDTH = '128px';
  readonly EXPANDED_WIDTH = '80%';

  // Define initial dimensions in pixels
 
  width:string = this.INITIAL_WIDTH;
  height:string = this.width;

  // Method to handle the resize trigger
  resizeElement() {
    this.width = this.width === this.INITIAL_WIDTH ? this.EXPANDED_WIDTH : this.INITIAL_WIDTH;
    this.height = this.height === this.width ? this.EXPANDED_WIDTH : this.width;
  }
}
