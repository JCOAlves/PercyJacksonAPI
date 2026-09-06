import { type Request, type Response } from "express";
import { type Character, type Divinity, type Demigod, type Creature } from "../Models/Character.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_charactersList = (req: Request, res: Response): Response | void => {
    try {
        const { camp="", pantheon="", cabin="" } = req.query;
        const { category="" } = req.params;

        const responseAPI = new ResponseHTTP(true, "Characters successfully listed", { characters: dates.characters });
        responseAPI.showMessage();
        return res.status(200).json(responseAPI);
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of characters");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_character = (req: Request, res: Response): Response | void => {
    try {
        const { name } = req.params;

        const responseAPI = new ResponseHTTP(true, "Character listed", { characters: dates.characters });
        responseAPI.showMessage();
        return res.status(200).json(responseAPI);
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of character");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_charactersList, GET_character };

