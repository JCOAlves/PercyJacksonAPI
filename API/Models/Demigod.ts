import { type Character } from "./Character.ts";
import { type Divinity } from "./Divinity.ts";
import { type Item } from "./Item.ts";

type Demigod = Character & {
    birthday: string | Date,
    camp: "Camp Half-Blood" | "Camp Jupiter",
    cabin: number,
    parents: (Divinity | Character | string)[],
    skills: string[],
    itens: Item[]

};

export { type Demigod };