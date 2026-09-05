import { type Request, type Response } from "express";
import { type Item } from "../Models/Item.ts";
import dates from '../dates.json' with { type: 'json' };

const GET_itensList = (req: Request, res: Response): Response | void => {
    try {
        const { name="", category="", description="" } = req.query;
        
    } catch (error) {
        
    };
};

const GET_item = (req: Request, res: Response): Response | void => {
    try {
        const { name } = req.params;
        
    } catch (error) {
        
    };
};

export { GET_itensList, GET_item };