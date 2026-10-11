type categoryArtifact = "weapon" | "food" | "drink" | "protection" | 
    "curing" | "futility" | "attack" | "defense" | 
    "magic" | "trophy" | "strategy" | "repair" | 
    "tool" | "clairvoyance" | "psychic" | "skill" | 
    "statue" | "item"

type Artifact = {
    name: string,
    description: string,
    category?: categoryArtifact[],
    photoLink?: string
};

export { type categoryArtifact, type Artifact };