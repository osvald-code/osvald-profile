import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import PlayerModel from './player-model';
import { Origin, PlayerData, Stat, StatType, FactionType, CyberTech, StatusType, Weapon, Roll} from './player-data';
import { JsonPipe } from '@angular/common';
import { disabled, form, FormField } from '@angular/forms/signals';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import {Listbox, Option} from '@angular/aria/listbox';
import {Grid, GridRow, GridCell, GridCellWidget} from '@angular/aria/grid';
@Component({
  selector: 'app-player-sheet',
  imports: [JsonPipe, FormField, MatButtonToggleModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatListModule,Listbox, Option,Grid, GridRow, GridCell],
  templateUrl: './player-sheet.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './player-sheet.scss',
})
export class PlayerSheet {
    weapons = [
    {
      name: "Carbon Dagger",
      damage: {rolls:1, size:6} as Roll,
      modifierType: StatType.GRA,
    } as Weapon
  ]

  origins = [
    {
      name:"Glitchblade",
      statBoosts:[
        {
          statType:StatType.VIG,
          value:1
        } as Stat,
        {
          statType:StatType.GRA,
          value:3
        } as Stat,
        {
          statType:StatType.MIN,
          value:2
        } as Stat
      ], 
    }
  ]
  playerModel = signal(new PlayerModel("yui", this.origins[0]));  
  FactionType = FactionType;
  StatType = StatType;
  StatusType = StatusType;



  constructor(){
    this.playerModel().weapons.push(this.weapons[0]);
  }
  
  playerSheet = form(this.playerModel, (schemaPath) => {
    //disabled(schemaPath.name)
    //this.playerModel().name = this.playerData().name;
  });

}
