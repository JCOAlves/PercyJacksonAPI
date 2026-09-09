import { type Creature, type Demigod, type Divinity } from "./Character.ts";

type Cabin = {
    cabinNumber: number,
    divinity: Divinity | string,
    members: (Demigod | Creature | string)[],
    description: string,
    place?: "Camp Half-Blood",
    photoLink?: string[] | string
};

export { type Cabin };