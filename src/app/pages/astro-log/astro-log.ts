import { Component, signal, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HexGrid } from './hex-grid/hex-grid';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { PlayerSheet } from "./player-sheet/player-sheet";

enum View {
  Hexgrid,
  Character
}

interface ViewData {
  name:string,
  view:View
}

@Component({
  selector: 'app-astro-log',
  imports: [HexGrid, MatSidenavModule, MatButtonModule, PlayerSheet],
  templateUrl: './astro-log.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './astro-log.scss',
})
export class AstroLog {
  showNav = signal(false);
  selectedView = signal<View>(View.Character);
  VIEW = View;

  viewData:ViewData[] = [
    {name:"Planets", view:View.Hexgrid},
    {name:"Character", view:View.Character}
  ];

  @ViewChild('drawer') drawer: MatDrawer | null = null;
  selectView(view:View){
    this.selectedView.set(view);
    this.showDrawer();
  }

  showDrawer(){
    this.drawer?.toggle();
    this.showNav.update(val =>!val);
  }
}
