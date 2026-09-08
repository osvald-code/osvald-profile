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
    energy:number;
    favor:Factions;
    stats:Stat[];
    status:Status[];
    cyberTech:CyberTech;
    serum:number;
}

export enum StatType {
   VIG = "Vigor",
   GRA = "Grace",
   MIN = "Mind",
   TEC = "Tech"
}

export interface Roll{
    rolls:number,
    size:number
}

export enum FactionType{
    WARG = "W.A.R.G.",
    MEDUSA = "Medusa",
    ISF = "I.S.F",
    CORSAIR = "Corsair",
    SYNTH = "Synth"
}

export enum StatusType{
    STUN = "Stun",
    BREACH = "Breach",
    SHOCK = "Shock",
    SILENCE = "Silence",
    IMMUNITY = "Immunity",
    OVERHEAT = "Overheat"

}

export interface Stat{
    statType:StatType;
    value:number;
}


export interface Origin{
    name:string;
    statBoosts:Stat[];
}

export interface Status{
    name:string;
    isActive:boolean;
}

export interface Implant{
    name:string;
}

export type CyberTech = [
    Implant|null,
    Implant|null,
    Implant|null,
    Implant|null,
    Implant|null,
    Implant|null
]

export interface Faction{
    name:string
    favor:number
}

export type Factions = [
    Faction,
    Faction,
    Faction,
    Faction,
    Faction
]



export interface Item{
    name:string;
}

export interface Hack extends Item{}

export interface Drone extends Item{}

export type MemorySlotItem = Hack | Drone;

export type MemorySlots = [
    MemorySlotItem|null,
    MemorySlotItem|null,
    MemorySlotItem|null,
    MemorySlotItem|null,
    MemorySlotItem|null,
    MemorySlotItem|null
];

export interface Weapon extends Item {
    damage:Roll;
    modifierType:StatType;
    modifier:number;
}