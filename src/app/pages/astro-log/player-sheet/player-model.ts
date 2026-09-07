import { PlayerData, Hack, Drone, Weapon, Item, Faction, Stat, Status, CyberTech, Origin, MemorySlots, Factions, Implant, FactionType, StatType } from "./player-data";


export default class PlayerModel implements PlayerData{
    memorySlots: MemorySlots = [];
    weapons: [Weapon?,Weapon?] = [];
    inventory: Item[] = [];
    notes: string = "";
    health: number = 20;
    armor: number = 0;
    exp: number = 0;
    hyperdrive: number = 0;
    energy: number = 0;
    favor: Factions = Object.values(FactionType).map(value => ({name:value, favor:0} as Faction)) as Factions;
    stats: Stat[] = Object.values(StatType).map(value => ({statType:value, value:0} as Stat));
    status: Status[] = [];
    cyberTech: CyberTech = [null,null,null,null,null,null]
    serum: number = 0; 
    
    constructor(public name:string, public origin:Origin){

    }
  
}