import { type Demigod, type Divinity } from "./Character.ts";

type Cabin = {
    cabinNumber: number,
    divinity: Divinity | string,
    members: Demigod[],
    description: string,
    place?: "Camp Half-Blood",
    photoLink?: string[]
};

export { type Cabin };