import { type Divinity } from "./Divinity.ts";
import { type Demigod } from "./Demigod.ts";

type Cabin = {
    cabinNumber: number,
    divinity: Divinity | string,
    members: Demigod[],
    description: string,
    place?: "Camp Half-Blood",
    photoLink?: string[]
};

export { type Cabin };