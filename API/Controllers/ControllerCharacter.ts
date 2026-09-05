import { response, type Request, type Response } from "express";
import { type Character, type Divinity, type Demigod, type Creature } from "../Models/Character.ts";
import dates from '../dates.json' with { type: 'json' };

const GET_charactersList = (req: Request, res: Response): Response | void => {
    try {
        const { camp="", pantheon="", cabin="" } = req.query;
        const { category="" } = req.params;
        
    } catch (error) {
        
    };
};

const GET_character = (req: Request, res: Response): Response | void => {
    try {
        const { name } = req.params;
        
    } catch (error) {
        
    };
};

export { GET_charactersList, GET_character };

