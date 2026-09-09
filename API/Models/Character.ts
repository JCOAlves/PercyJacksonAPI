import { type Artifact } from "./Artifact.ts";

type Character = {
    name: string,
    description: string,
    category: string | "Mortal" | "Demigod" | "Divinity" | "Titan" | "Giant" | "Creature" | "Monster",
    photoLink?: string[] | string
};

type Divinity = Character & {
    pantheon: string | "Greek" | "Roman",
    ally?: boolean,
    parents?: (Divinity | Character | string)[],
};

type Demigod = Character & {
    birthday: string | Date,
    camp: string | "Camp Half-Blood" | "Camp Jupiter",
    cabin: number,
    parents: (Divinity | Character | string)[],
    skills: string[],
    artifacts: Artifact[]

};

type Creature = Character & {
    pantheon: string | "Greek" | "Roman",
    camp?: string | "Camp Half-Blood" | "Camp Jupiter",
    ally?: boolean,
    parents?: (Divinity | Character | string)[],
};

export { type Character, type Divinity, type Demigod, type Creature };