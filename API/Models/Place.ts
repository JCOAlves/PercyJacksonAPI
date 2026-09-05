import { type Demigod, type Creature, type Divinity } from "./Character.ts";

type Place = {
    name: string,
    description: string,
    location: string,
    members?: (Demigod | Creature | Divinity)[],
    photoLink?: string[] | string
};

export { type Place };
