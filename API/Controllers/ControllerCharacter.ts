import { type Request, type Response } from "express";
import { type Character, type Divinity, type Demigod, type Creature } from "../Models/Character.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_charactersList = (req: Request, res: Response): Response | void => {
    try {
        const { camp = "", pantheon = "", cabin = "" } = req.query;
        const { category = "" } = req.params;

        let listCharacters: (Character | Divinity | Demigod | Creature)[] = dates.characters;

        if (category) listCharacters = listCharacters.filter(c => c.category === category);

        if (camp) listCharacters = listCharacters.filter(c => c.category === "Demigod" && "camp" in c && c.camp === camp);

        if (pantheon) listCharacters = listCharacters.filter(c => c.category === "Divinity" && "pantheon" in c && c.pantheon === pantheon);

        if (cabin) listCharacters = listCharacters.filter(c => c.category === "Demigod" && "cabin" in c && c.cabin === Number(cabin));

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
        const responseAPI = new ResponseHTTP(false, "Error in the list of characters");
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
            const responseAPI = new ResponseHTTP(false, "Character name parameter not provided", { characters: null });
            responseAPI.showMessage();
            return res.status(400).json(responseAPI);
        };
            
        characterFound = listCharacters.find(c => c.name.startsWith(String(name)) || c.name === name);

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
        const responseAPI = new ResponseHTTP(false, "Error in the list of character");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_charactersList, GET_character };

