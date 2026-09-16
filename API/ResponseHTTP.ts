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
}

// Class Response HTTP
class ResponseHTTP {
    sucess: boolean;
    message: string;
    data: Data | Character | Demigod | Divinity | Creature | Artifact | Cabin | Place | Saga | Book | (Character | Demigod | Divinity | Creature)[] | Artifact[] | Cabin[] | Place[] | Saga[] | null | undefined;
    error: Error | any | unknown;

    constructor(sucess: boolean, message: string, data?: Data | Character | Demigod | Divinity | Creature | Artifact | Cabin | Place | Saga | Book | (Character | Demigod | Divinity | Creature)[] | Artifact[] | Cabin[] | Place[] | Saga[] | null | undefined, error?: Error | any | unknown) {
        this.sucess = sucess;
        this.message = message;
        this.data = data;
        this.error = error;
    };

    showMessage(typeMSG = "") {
        if (typeMSG === "Error" && this.error) {
            console.error(`[${new Date().toLocaleString('pt-br', { timeZone: "America/Sao_Paulo" }).replace(",", "")}] - ${this.message}: ${this.error}`);

        } else {
            console.log(`[${new Date().toLocaleString('pt-br', { timeZone: "America/Sao_Paulo" }).replace(",", "")}] - ${this.message}`);
        };
    };

};

export { type Data };
export default ResponseHTTP;