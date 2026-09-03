type Character = {
    name: string,
    description: string,
    type: "Mortal" | "Demigod" | "God" | "Titan" | "Giant" | "Creature" | "Monster",
    photoLink?: string[] | string
};

export { type Character };