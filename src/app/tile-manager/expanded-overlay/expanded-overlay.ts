import { Component,inject } from '@angular/core';
import { TileManager } from '../tile-manager';
import { Tile } from '../tile';
@Component({
  selector: 'app-expanded-overlay',
  imports:[],
  templateUrl: './expanded-overlay.html',
  styleUrl: './expanded-overlay.scss',
})
export class ExpandedOverlay {
  tileManager = inject(TileManager);
  tile = this.tileManager.openTile;
}

