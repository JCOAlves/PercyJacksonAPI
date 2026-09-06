import { type Request, type Response } from "express";
import { type Cabin } from "../Models/Cabin.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_cabinsList = (req: Request, res: Response): Response | void => {
    try {

        const responseAPI = new ResponseHTTP(true, "Cabins successfully listed", { cabins: dates.cabins });
        responseAPI.showMessage();
        return res.status(200).json(responseAPI);
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of cabins");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_cabin = (req: Request, res: Response): Response | void => {
    try {
        const { cabinNumber } = req.params;
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of cabin");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_cabinsList, GET_cabin };