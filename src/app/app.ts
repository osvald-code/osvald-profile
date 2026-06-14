import { Component} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { TileWindow } from './tile-window/tile-window';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TileWindow],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
