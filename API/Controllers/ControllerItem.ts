import { type Request, type Response } from "express";
import { type Item } from "../Models/Item.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_itensList = (req: Request, res: Response): Response | void => {
    try {
        const { name="", category="", description="" } = req.query;

        const responseAPI = new ResponseHTTP(true, "Itens successfully listed", { itens: dates.itens });
        responseAPI.showMessage();
        return res.status(200).json(responseAPI);
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of itens");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_item = (req: Request, res: Response): Response | void => {
    try {
        const { name } = req.params;
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of item");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_itensList, GET_item };