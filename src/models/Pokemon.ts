/* eslint-disable prettier/prettier */
export default class Pokemon {
    id: number;
    name: string;
    image?: string;
    height?: number;
    weight?: number;
    type?: string;
    move?: string;
    stats?: [String];

    constructor (
        id: number,
        name: string,
        image?: string,
        height?: number,
        weight?: number,
        move?: string,
        stats?: [String],
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.height = height;
        this.weight = weight;
        this.move = move;
        this.stats = stats;
    }
}

