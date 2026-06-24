import { Component, inject } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { TileManager } from '../tile-manager/tile-manager';
@Component({
  selector: 'app-nav-bar',
  imports: [OverlayModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  tileManager = inject(TileManager);
  isOpen = false;

  selectItem(id:number){
    this.tileManager.openOverlay(id);
    this.isOpen = false;
  }
}
