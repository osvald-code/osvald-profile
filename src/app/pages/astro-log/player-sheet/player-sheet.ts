import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import PlayerModel from './player-model';
import { Origin, PlayerData, Stat, StatType, FactionType, CyberTech, StatusType} from './player-data';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { disabled, form, FormField } from '@angular/forms/signals';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-player-sheet',
  imports: [JsonPipe, KeyValuePipe, FormField, MatButtonToggleModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatListModule],
  templateUrl: './player-sheet.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './player-sheet.scss',
})
export class PlayerSheet {
  playerModel = signal(new PlayerModel("yui", {statBoosts:[{statType:StatType.GRA,value:0}]}));  
  FactionType = FactionType;
  StatType = StatType;
  StatusType = StatusType;
  playerSheet = form(this.playerModel, (schemaPath) => {
    //disabled(schemaPath.name)
    //this.playerModel().name = this.playerData().name;
  });

}
