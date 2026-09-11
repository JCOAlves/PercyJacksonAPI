import { type Request, type Response } from "express";
import { type Place } from "../Models/Place.ts";
import dataPlaces from '../DataPJ/dataPlaces.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_placesList = (req: Request, res: Response): Response | void => {
    try {
        const { location = "", description = "" } = req.query;

        let listPlaces: Place[] = dataPlaces;

        if (location) listPlaces = listPlaces.filter(p => p.location.toLowerCase().startsWith(String(location).toLowerCase()));

        if (description) listPlaces = listPlaces.filter(p => p.description.toLowerCase().includes(String(description).toLowerCase()));

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
        responseAPI.showMessage("Error");
        return res.status(500).json(responseAPI);
    };
};

const GET_place = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.params;

        const listPlaces: Place[] = dataPlaces;
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
        responseAPI.showMessage("Error");
        return res.status(500).json(responseAPI);
    };
};

export { GET_placesList, GET_place };