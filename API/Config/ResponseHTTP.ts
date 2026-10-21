import { type Character, type Demigod, type Divinity, type Creature } from "../Types/Character.ts";
import { type Artifact } from "../Types/Artifact.ts";
import { type Cabin } from "../Types/Cabin.ts";
import { type Place } from "../Types/Place.ts";
import { type Book, type Saga } from "../Types/Book.ts";

type Data = {
    characters?: (Character | Demigod | Divinity | Creature)[] | string[],
    artifacts?: Artifact[] | string[],
    cabins?: Cabin[] | string[],
    places?: Place[] | string[],
    books?: Saga[] | string[]
};
type UniqueData = Character | Demigod | Divinity | Creature | Artifact | Cabin | Place | Saga | Book;
type ListData = (Character | Demigod | Divinity | Creature)[] | Artifact[] | Cabin[] | Place[] | Saga[] | Book[];

// Class Response HTTP
class ResponseHTTP {
    success: boolean;
    status: number;
    message: string;
    #data: Data | UniqueData | ListData | null | undefined;
    #error: Error | TypeError | any | unknown;

    constructor(success: boolean, status: number, message: string, data?: Data | UniqueData | ListData | null | undefined, error?: Error | TypeError | any | unknown) {
        this.success = success;
        this.status = status;
        this.message = message;
        this.#data = data;
        this.#error = error;
    };

    showMessage() {
        if (!this.success) {
            let message = "";
            if(this.status >= 400 && this.status < 500) message = `\x1b[33m[${new Date().toLocaleString('pt-br', { timeZone: "America/Sao_Paulo" }).replace(",", "")}]\x1b[0m - \x1b[31m${this.status} ${this.message} ${this.#error ? `: ${this.#error}` : ""}\x1b[0m`;
            else if(this.status >= 500 && this.status < 600) message = `\x1b[33m[${new Date().toLocaleString('pt-br', { timeZone: "America/Sao_Paulo" }).replace(",", "")}]\x1b[0m - \x1b[35m${this.status} ${this.message} ${this.#error ? `: ${this.#error}` : ""}\x1b[0m`;
            console.error(message);

        } else {
            console.log(`\x1b[33m[${new Date().toLocaleString('pt-br', { timeZone: "America/Sao_Paulo" }).replace(",", "")}]\x1b[0m - \x1b[32m${this.status} ${this.message}\x1b[0m`);
        };
        return;
    };

    returnJSON() {
        const JSON = this.success ? {
            success: this.success,
            status: this.status,
            message: this.message,
            data: this.#data

        } : {
            success: this.success,
            status: this.status,
            message: this.message,
            error: this.#error
        };
        return JSON;
    };
};

export { type Data };
export default ResponseHTTP;