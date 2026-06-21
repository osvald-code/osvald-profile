import { Component,inject } from '@angular/core';
import { TileManager } from '../tile-manager';
@Component({
  selector: 'app-expanded-overlay',
  imports:[],
  templateUrl: './expanded-overlay.html',
  styleUrl: './expanded-overlay.scss',
})
export class ExpandedOverlay {
  title = '';
  id!: number;
  tileManager = inject(TileManager);

}

