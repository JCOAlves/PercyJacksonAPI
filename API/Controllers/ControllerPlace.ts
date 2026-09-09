import { type Request, type Response } from "express";
import { type Place } from "../Models/Place.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_placesList = (req: Request, res: Response): Response | void => {
    try {
        const { location = "", description = "" } = req.query;

        let listPlaces: Place[] = dates.places;

        if (location) {
            const listFilted = listPlaces.filter(p => p.location.toLowerCase().startsWith(String(location).toLowerCase()));
            listPlaces = listFilted;
        };

        if (description) {
            const listFilted = listPlaces.filter(p => p.description.toLowerCase().includes(String(description).toLowerCase()));
            listPlaces = listFilted;
        };

        if (listPlaces.length > 0) {
            const responseAPI = new ResponseHTTP(true, "Places successfully listed", listPlaces);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No place matching the specified criteria was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of places");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_place = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.params;

        const listPlaces: Place[] = dates.places;
        let placeFound: Place | undefined | null = null;

        if (!name) {
            const responseAPI = new ResponseHTTP(false, "Place name parameter not provided");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI);
        };

        placeFound = listPlaces.find(p => p.name.toLowerCase().startsWith(String(name).toLowerCase()));

        if (placeFound) {
            const responseAPI = new ResponseHTTP(true, "Place successfully listed", placeFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No place matching the specified name was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of place");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_placesList, GET_place };