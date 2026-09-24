import { type Character, type Demigod, type Divinity, type Creature } from "./Types/Character.ts";
import { type Artifact } from "./Types/Artifact.ts";
import { type Cabin } from "./Types/Cabin.ts";
import { type Place } from "./Types/Place.ts";
import { type Book, type Saga } from "./Types/Book.ts";

type Data = {
    characters?: (Character | Demigod | Divinity | Creature)[],
    artifacts?: Artifact[],
    cabins?: Cabin[],
    places?: Place[],
    books?: (Saga | Book)[]
};
type UniqueData = Character | Demigod | Divinity | Creature | Artifact | Cabin | Place | Saga | Book;
type ListData = (Character | Demigod | Divinity | Creature)[] | Artifact[] | Cabin[] | Place[] | Saga[];

// Class Response HTTP
class ResponseHTTP {
    success: boolean;
    message: string;
    #data: Data | UniqueData | ListData | null | undefined;
    #error: Error | TypeError | any | unknown;

    constructor(success: boolean, message: string, data?: Data | UniqueData | ListData | null | undefined, error?: Error | TypeError | any | unknown) {
        this.success = success;
        this.message = message;
        this.#data = data;
        this.#error = error;
    };

    showMessage(typeMSG = "") {
        if (typeMSG === "Error" && this.#error) {
            console.error(`[${new Date().toLocaleString('pt-br', { timeZone: "America/Sao_Paulo" }).replace(",", "")}] - ${this.message}: ${this.#error}`);

        } else {
            console.log(`[${new Date().toLocaleString('pt-br', { timeZone: "America/Sao_Paulo" }).replace(",", "")}] - ${this.message}`);
        };
        return;
    };

    returnJSON() {
        const JSON = this.success ? {
            success: this.success,
            message: this.message,
            data: this.#data

        } : {
            success: this.success,
            message: this.message
        };
        return JSON;
    };
};

export { type Data };
export default ResponseHTTP;