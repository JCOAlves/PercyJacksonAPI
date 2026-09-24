type Artifact = {
    name: string,
    description: string,
    category?: ("weapon" | "food" | "drink" | "protection" | "curing" | "futility" | "attack" | "defense")[],
    photoLink?: string
};

export { type Artifact };