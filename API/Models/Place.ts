import { type Demigod } from "./Demigod.ts";
import { type Creature } from "./Creature.ts";
import { type Divinity } from "./Divinity.ts";

type Place = {
    name: string,
    description: string,
    location: string,
    members?: (Demigod | Creature | Divinity)[],
    photoLink?: string[] | string
};

export { type Place };
