import { Component, signal } from '@angular/core';
import PlayerModel from './player-model';
import { Origin, Stat, StatType } from './player-data';
import { JsonPipe } from '@angular/common';
import { disabled, form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-player-sheet',
  imports: [JsonPipe, FormField],
  templateUrl: './player-sheet.html',
  styleUrl: './player-sheet.scss',
})
export class PlayerSheet {
  playerModel = signal<PlayerModel>(
    new PlayerModel(
      "yui", {statBoosts:[{statType:StatType.GRACE,value:0}]}
    ));
  
  playerSheet = form(this.playerModel, (schemaPath) => {
    disabled(schemaPath.name)
  });

}
