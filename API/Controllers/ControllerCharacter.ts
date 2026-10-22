import dotenv from "dotenv";
import { type Request, type Response } from "express";
import { type Character, type Divinity, type Demigod, type Creature } from "../Types/Character.ts";
import dataDemigod from '../Data/Characters/dataDemigod.json' with { type: 'json' };
import dataCreature from '../Data/Characters/dataCreature.json' with { type: 'json' };
import dataDivinity from '../Data/Characters/dataDivinity.json' with { type: 'json' };
import dataMortal from '../Data/Characters/dataMortal.json' with { type: 'json' };
import ResponseHTTP from "../Config/ResponseHTTP.ts";

dotenv.config();
const PORT: number = Number(process.env.PORTAPI) || 3000;
const HOST: string = process.env.HOSTAPI || "localhost";

let AllCharacters: (Character | Demigod | Divinity | Creature)[] = [
    ...dataDemigod as Demigod[], ...dataCreature as Creature[], 
    ...dataDivinity as Divinity[], ...dataMortal as Character[]
];
AllCharacters.forEach(c => c.photoLink && c.photoLink === "/api/picturesNotFound/character" ? 
    c.photoLink = `http://${HOST === "localhost" ? `${HOST}:${PORT}` : HOST}${c.photoLink}` : null
);
AllCharacters.sort((a, b) => a.name.localeCompare(b.name));

const GET_charactersList = (req: Request, res: Response): Response | void => {
    try {
        const { camp = "", pantheon = "", cabin = "", category = "" } = req.query;

        let listCharacters: (Character | Demigod | Divinity | Creature)[] = AllCharacters;

        if (category) listCharacters = listCharacters.filter(c => c.category.toLowerCase() === String(category).toLowerCase());

        if (camp) listCharacters = listCharacters.filter(c => "camp" in c && c.camp?.toLowerCase() === String(camp).toLowerCase());

        if (pantheon) listCharacters = listCharacters.filter(c => "pantheon" in c && c.pantheon.toLowerCase() === String(pantheon).toLowerCase());

        if (cabin) listCharacters = listCharacters.filter(c => "cabin" in c && c.cabin === Number(cabin));

        if (listCharacters.length > 0) {
            const responseAPI = new ResponseHTTP(true, 200, "Characters successfully listed", listCharacters);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(false, 404, "No character matching the specified criteria was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };


    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of characters", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

const GET_character = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.params;

        let characterFound: Character | Demigod | Divinity | Creature | undefined | null = null;

        if (!name) {
            const responseAPI = new ResponseHTTP(false, 400, "Character name parameter not provided or character name invalid");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI.returnJSON());
        };

        characterFound = AllCharacters.find(c => c.name.toLowerCase() === (String(name).toLowerCase()));

        if (characterFound) {
            const responseAPI = new ResponseHTTP(true, 200, "Character successfully listed", characterFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(false, 404, "No character matching the specified name was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of character", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

export { GET_charactersList, GET_character };

