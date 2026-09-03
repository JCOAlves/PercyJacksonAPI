import { type Demigod } from "./Demigod.ts";
import { type Creature } from "./Creature.ts";

type Place = {
    name: string,
    description: string,
    location: string,
    members?: (Demigod | Creature)[]
};

export { type Place };
