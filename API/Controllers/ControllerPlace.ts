import { type Request, type Response } from "express";
import { type Place } from "../Models/Place.ts";
import dates from '../dates.json' with { type: 'json' };

const GET_placesList = (req: Request, res: Response): Response | void => {
    try {
        const { location="", member="", description="" } = req.query;

        
    } catch (error) {
        
    };
};

const GET_place = (req: Request, res: Response): Response | void => {
    try {
        const { name } = req.params;
        
    } catch (error) {
        
    };
};

export { GET_placesList, GET_place };