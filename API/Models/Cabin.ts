import { type God } from "./God.ts";
import { type Demigod } from "./Demigod.ts";

type Cabin = {
    cabinNumber: number,
    god: God,
    members: Demigod[],
    description: string
};

export { type Cabin };