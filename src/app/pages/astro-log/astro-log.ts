import { Component, signal } from '@angular/core';
import { HexGrid } from './hex-grid/hex-grid';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-astro-log',
  imports: [HexGrid, MatSidenavModule, MatButtonModule],
  templateUrl: './astro-log.html',
  styleUrl: './astro-log.scss',
})
export class AstroLog {
  showFiller = signal(false);
}
