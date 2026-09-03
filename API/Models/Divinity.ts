import { type Character } from "./Character.ts";

type Divinity = Character & {
    pantheon: "Greek" | "Roman",
    ally?: boolean,
    parents?: (Divinity | Character | string)[],
}

export { type Divinity };
