import { Component } from '@angular/core';
import { Hexagon } from "./hexagon/hexagon";

@Component({
  selector: 'app-hex-grid',
  imports: [Hexagon],
  templateUrl: './hex-grid.html',
  styleUrl: './hex-grid.scss',
})
export class HexGrid {

}
