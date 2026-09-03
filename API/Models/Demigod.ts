import { type Item } from "./Item.ts";

type Demigod = {
    name: string,
    birthday: string | Date,
    camp: "Camp Half-Blood" | "Camp Jupiter",
    cabin: number,
    mortalLineage: string,
    skills: string[],
    itens: Item[],
    description: string,
    photoLink: string[]


};

export { type Demigod };