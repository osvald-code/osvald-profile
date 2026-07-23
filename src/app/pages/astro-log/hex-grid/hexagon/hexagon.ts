import { Component, Input } from '@angular/core';
import { HexModel } from './hex-model';

@Component({
  selector: 'app-hexagon',
  imports: [],
  templateUrl: './hexagon.html',
  styleUrl: './hexagon.scss',
})
export class Hexagon {
  @Input() model!:HexModel;
}
