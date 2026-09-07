type Artifact = {
    name: string, 
    description: string,
    category?: ("Weapon" | "Food" | "Drink" | "Protection" | "Curing" | "Futility" | "Attack" | "Defense")[],
    photoLink?: string[] | string
};

export { type Artifact };