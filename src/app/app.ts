import { Component} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { TileWindow } from './tile-manager/tile-window/tile-window';
import { NavBar } from "./nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TileWindow, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  
}
