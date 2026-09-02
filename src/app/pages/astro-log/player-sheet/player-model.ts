import { PlayerData, Hack, Drone, Weapon, Item, Faction, Stat, Status, CyberTech, Origin, MemorySlots, Factions } from "./player-data";


export default class PlayerModel implements PlayerData{
    memorySlots: MemorySlots = [];
    weapons: [Weapon?,Weapon?] = [];
    inventory: Item[] = [];
    notes: string = "";
    health: number = 0;
    armor: number = 0;
    exp: number = 0;
    hyperdrive: number = 0;
    favor: Factions = [];
    stats: Stat[] = [];
    status: Status[] = [];
    cyberTech: CyberTech = [];
    serum: number = 0; 
    
    constructor(public name:string, public origin:Origin){}
  
}