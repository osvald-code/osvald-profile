import { PlayerData, Hack, Drone, Weapon, Item, Faction, Stat, Status, CyberTech, Origin, MemorySlots, Factions, Implant, FactionType, StatType, StatusType } from "./player-data";


export default class PlayerModel implements PlayerData{
    memorySlots: MemorySlots = [null,null,null,null,null,null];
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
    status: Status[] = Object.values(StatusType).map(value => ({name:value, isActive:false} as Status));
    cyberTech: CyberTech = [null,null,null,null,null,null]
    serum: number = 0; 
    
    constructor(public name:string, public origin:Origin){
        for(let stat of this.origin.statBoosts){
            const foundStat=this.stats.find(value => value.statType === stat.statType);
            foundStat!.value = stat.value;
        }
    }
  
}