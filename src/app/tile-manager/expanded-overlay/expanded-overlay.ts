import { Component,inject } from '@angular/core';
import { TileManager } from '../tile-manager';
import { Tile } from '../tile';
import { AboutMe } from "../../pages/about-me/about-me";
import { AstroLog } from "../../pages/astro-log/astro-log";
@Component({
  selector: 'app-expanded-overlay',
  imports: [AboutMe, AstroLog],
  templateUrl: './expanded-overlay.html',
  styleUrl: './expanded-overlay.scss',
})
export class ExpandedOverlay {
  tileManager = inject(TileManager);
  tile = this.tileManager.openTile;
}

