import { type Request, type Response } from "express";
import { type Cabin } from "../Models/Cabin.ts";
import dates from '../dates.json' with { type: 'json' };

const GET_cabinsList = (req: Request, res: Response): Response | void => {
    try {
        
    } catch (error) {
        
    };
};

const GET_cabin = (req: Request, res: Response): Response | void => {
    try {
        const { divinity } = req.params;
        const { cabinNumber } = req.params;
        
    } catch (error) {
        
    };
};

export { GET_cabinsList, GET_cabin };