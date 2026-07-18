import { Component } from '@angular/core';
import { HexGrid } from './hex-grid/hex-grid';
@Component({
  selector: 'app-astro-log',
  imports: [HexGrid],
  templateUrl: './astro-log.html',
  styleUrl: './astro-log.scss',
})
export class AstroLog {

}
