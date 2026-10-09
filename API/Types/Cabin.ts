import { type Creature, type Demigod, type Divinity } from "./Character.ts";

type Cabin = {
    cabinNumber: number,
    divinity: Divinity | string,
    members: (Demigod | Creature | string)[] | string,
    description: string,
    photoLink?: string
};

export { type Cabin };