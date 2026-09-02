export interface PlayerData{
    name:string;
    origin:Origin;
    memorySlots:MemorySlots;
    weapons: [Weapon?, Weapon?];
    inventory:Item[];
    notes:string;
    health:number;
    armor:number;
    exp:number;
    hyperdrive:number;
    favor:Factions;
    stats:Stat[];
    status:Status[];
    cyberTech:CyberTech;
    serum:number;
}

export enum StatType {
   VIGOR,
   GRACE,
   MIND,
   TECH
}

export interface Stat{
    statType:StatType;
    value:number;
}


export interface Origin{
    statBoosts:Stat[];
}

export interface Status{
    name:string;
}

export interface Implant{
    name:string;
}

export type CyberTech = [
    Implant?,
    Implant?,
    Implant?,
    Implant?,
    Implant?,
    Implant?
]

export interface Faction{
    name:string
    favor:number
}

export type Factions = [
    Faction?,
    Faction?,
    Faction?,
    Faction?,
    Faction?
]



export interface Item{
    name:string;
}

export interface Hack extends Item{}

export interface Drone extends Item{}

export type MemorySlotItem = Hack | Drone;

export type MemorySlots = [
    MemorySlotItem?,
    MemorySlotItem?,
    MemorySlotItem?,
    MemorySlotItem?,
    MemorySlotItem?,
    MemorySlotItem?
];

export interface Weapon extends Item {
    damage:number;
    modifierType:StatType;
    modifier:number;
}