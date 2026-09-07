import { type Request, type Response } from "express";
import { type Cabin } from "../Models/Cabin.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_cabinsList = (req: Request, res: Response): Response | void => {
    try {
        const listCabins: Cabin[] = dates.cabins;

        const responseAPI = new ResponseHTTP(true, "Cabins successfully listed", { cabins: listCabins });
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

        const listCabins: Cabin[] = dates.cabins;
        let cabinFound: Cabin | undefined | null = null;

        if (!cabinNumber) {
            const responseAPI = new ResponseHTTP(false, "Cabin number parameter not provided", { cabins: null });
            responseAPI.showMessage();
            return res.status(400).json(responseAPI);
        };

        cabinFound = listCabins.find(c => c.cabinNumber === Number(cabinNumber));
        if (cabinFound) {
            const responseAPI = new ResponseHTTP(true, "Cabin successfully listed", { cabins: cabinFound });
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No cabin matching the specified number was found", { characters: null });
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of cabin");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_cabinsList, GET_cabin };