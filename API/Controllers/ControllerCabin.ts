import dotenv from "dotenv";
import { type Request, type Response } from "express";
import { type Cabin } from "../Types/Cabin.ts";
import dataCabins from '../Data/Cabins/dataCabins.json' with { type: 'json' };
import ResponseHTTP from "../Config/ResponseHTTP.ts";

dotenv.config();
const PORT: number = Number(process.env.PORTAPI) || 3000;
const HOST: string = process.env.HOSTAPI || "localhost";

let AllCabins: Cabin[] = dataCabins as Cabin[];
AllCabins.forEach(c => c.photoLink && c.photoLink === "/api/picturesNotFound/cabin" ? 
    c.photoLink = `http://${HOST}:${PORT}${c.photoLink}` : null
);

const GET_cabinsList = (req: Request, res: Response): Response | void => {
    try {
        const { cabinNumber } = req.query;

        let listCabins: Cabin[] = AllCabins;

        if(cabinNumber) listCabins = listCabins.filter(c => Number(cabinNumber) && c.cabinNumber === Number(cabinNumber));

        if(listCabins.length > 0){
            const responseAPI = new ResponseHTTP(true, 200, "Cabins successfully listed", listCabins);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else{
            const responseAPI = new ResponseHTTP(false, 404, "No cabin matching the specified number was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of cabins", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

const GET_cabin = (req: Request, res: Response): Response | void => {
    try {
        const { cabinNumber } = req.params;

        const listCabins: Cabin[] = AllCabins;
        let cabinFound: Cabin | undefined | null = null;

        if (!cabinNumber) {
            const responseAPI = new ResponseHTTP(false, 400, "Cabin number parameter not provided");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI.returnJSON());
        };

        cabinFound = listCabins.find(c => Number(cabinNumber) && c.cabinNumber === Number(cabinNumber));

        if (cabinFound) {
            const responseAPI = new ResponseHTTP(true, 200, "Cabin successfully listed", cabinFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(false, 404, "No cabin matching the specified number was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of cabin", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

export { GET_cabinsList, GET_cabin };