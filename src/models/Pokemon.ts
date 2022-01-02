/* eslint-disable prettier/prettier */
export default class Pokemon {
    id: number;
    name: string;
    image?: string;
    height?: number;
    weight?: number;
    type?: string;

    constructor (
        id: number,
        name: string,
        image?: string,
        height?: number,
        weight?: number
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.height = height;
        this.weight = weight;
    }
}

