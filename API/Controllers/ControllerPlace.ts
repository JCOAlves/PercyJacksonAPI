import { type Request, type Response } from "express";
import { type Place } from "../Models/Place.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_placesList = (req: Request, res: Response): Response | void => {
    try {
        const { location="", member="", description="" } = req.query;

        let listPlaces: Place[] = dates.places;

        if(location) listPlaces = listPlaces.filter(p => p.location.toLowerCase().startsWith(String(location).toLowerCase()));

        //if(member) listPlaces = listPlaces.filter(p => p.members?.includes(member))

        const responseAPI = new ResponseHTTP(true, "Places successfully listed", { places: dates.places });
        responseAPI.showMessage();
        return res.status(200).json(responseAPI);

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of places");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_place = (req: Request, res: Response): Response | void => {
    try {
        const { name } = req.params;
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of place");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_placesList, GET_place };