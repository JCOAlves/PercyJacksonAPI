import { type Character, type Demigod, type Divinity, type Creature } from "./Models/Character.ts";
import { type Item } from "./Models/Item.ts";
import { type Cabin } from "./Models/Cabin.ts";
import { type Place } from "./Models/Place.ts";
import { type Book } from "./Models/Book.ts";

type Data = {
    characters?: (Character | Demigod | Divinity | Creature)[],
    itens?: Item[],
    cabins?: Cabin[],
    places?: Place[],
    books?: Book[]
}

// Class Response HTTP
class ResponseHTTP {
    sucess: boolean;
    message: string;
    data: Data | null | undefined
    error: TypeError | string | undefined;

    constructor(sucess: boolean, message: string, data?: Data | null | undefined, error?: TypeError | string | undefined){
        this.sucess = sucess;
        this.message = message;
        this.data = data;
        this.error = error;
    };

    showMessage(typeMSG=""){
        const currentDate = new Date();
        const Day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();
        const Mouth = currentDate.getMonth()+1 < 10 ? `0${currentDate.getMonth()+1}` : currentDate.getMonth()+1;
        const Year = currentDate.getFullYear();
        const Hour = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours();
        const Minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
        const Seconds = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
        const formattedDate = `${Day}/${Mouth}/${Year}`;
        const formattedTime = `${Hour}:${Minutes}:${Seconds}`;
        if(typeMSG === "Error" && this.error){
            console.error(`${formattedDate} ${formattedTime} - ${this.message}: ${this.error}`);

        } else{
            console.log(`${formattedDate} ${formattedTime} - ${this.message}`);
        };
    };

};

export default ResponseHTTP;