type Artifact = {
    name: string, 
    description: string,
    category?: ("weapon" | "food" | "drink" | "protection" | "curing" | "futility" | "attack" | "defense" | string)[],
    photoLink?: string[] | string
};

export { type Artifact };