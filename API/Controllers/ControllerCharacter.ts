import { type Request, type Response } from "express";
import { type Character, type Divinity, type Demigod, type Creature } from "../Models/Character.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_charactersList = (req: Request, res: Response): Response | void => {
    try {
        const { camp = "", pantheon = "", cabin = "", category = "" } = req.query;

        let listCharacters: (Character | Divinity | Demigod | Creature)[] = dates.characters;

        if (category){
            const listFilted = listCharacters.filter(c => c.category.toLowerCase() === String(category).toLowerCase());
            listCharacters = listFilted;
        };

        if (camp){ 
            const listFilted = listCharacters.filter(c => c.category === "Demigod" && "camp" in c && c.camp === camp);
            listCharacters = listFilted;
        };

        if (pantheon){
            const listFilted = listCharacters.filter(c => c.category === "Divinity" && "pantheon" in c && c.pantheon.toLowerCase() === String(pantheon).toLowerCase());
            listCharacters = listFilted;
        };

        if (cabin){ 
            const listFilted = listCharacters.filter(c => c.category === "Demigod" && "cabin" in c && c.cabin === Number(cabin));
            listCharacters = listFilted;
        };

        if (listCharacters.length > 0) {
            const responseAPI = new ResponseHTTP(true, "Characters successfully listed", { characters: listCharacters });
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No character matching the specified criteria was found", { characters: [] });
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };


    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of characters", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_character = (req: Request, res: Response): Response | void => {
    try {
        const { name="" } = req.params;

        const listCharacters: (Character | Divinity | Demigod | Creature)[] = dates.characters;
        let characterFound: Character | Divinity | Demigod | Creature | undefined | null = null;

        if (!name){
            const responseAPI = new ResponseHTTP(false, "Character name parameter not provided");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI);
        };
            
        characterFound = listCharacters.find(c => c.name.toLowerCase().startsWith(String(name).toLowerCase()));

        if (characterFound) {
            const responseAPI = new ResponseHTTP(true, "Character successfully listed", { characters: characterFound });
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No character matching the specified name was found", { characters: null });
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of character", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_charactersList, GET_character };

