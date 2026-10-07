import { type Artifact } from "./Artifact.ts";

type Character = {
    name: string,
    description: string,
    category: "Mortal" | "Demigod" | "Legacy" | "Divinity" | "Titan" | "Giant" | "Creature" | "Monster",
    birthday?: string | Date | null,
    photoLink?: string
};

type Divinity = Character & {
    pantheon: "Greek" | "Roman" | "Greco-Roman",
    parents?: (Divinity | Character | string)[],
};

type Demigod = Character & {
    camp: "Camp Half-Blood" | "Camp Jupiter",
    cabin: number | "There is not cabin to this demigod in Camp Half-Blood",
    parents: (Divinity | Character | string)[],
    skills: string[],
    artifacts: Artifact[]
};

type Creature = Character & {
    pantheon: "Greek" | "Roman" | "Greco-Roman",
    cabin?: number,
    camp?: "Camp Half-Blood" | "Camp Jupiter",
    parents?: (Divinity | Character | string)[],
};

export { type Character, type Divinity, type Demigod, type Creature };