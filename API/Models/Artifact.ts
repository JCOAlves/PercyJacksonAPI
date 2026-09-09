type Artifact = {
    name: string,
    description: string,
    category?: (string | "weapon" | "food" | "drink" | "protection" | "curing" | "futility" | "attack" | "defense")[],
    photoLink?: string[] | string
};

export { type Artifact };