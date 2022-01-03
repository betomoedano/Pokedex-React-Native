export default class Pokemon {
  id: number;
  name: string;
  image?: string;
  height?: number;
  weight?: number;
  type?: string;
  move?: string;
  stats?: Stats;
  color?: string;

  constructor(
    id: number,
    name: string,
    image?: string,
    height?: number,
    weight?: number,
    type?: string,
    move?: string,
    stats?: Stats,
    color?: string,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.height = height;
    this.weight = weight;
    this.type = type;
    this.move = move;
    this.stats = stats;
    this.color = color;
  }
}

export class Stats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;

  constructor(
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number,
  ) {
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
  }
}
