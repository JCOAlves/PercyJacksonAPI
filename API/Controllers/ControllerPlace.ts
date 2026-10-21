import dotenv from "dotenv";
import { type Request, type Response } from "express";
import { type Place } from "../Types/Place.ts";
import dataPlaces from '../Data/Places/dataPlaces.json' with { type: 'json' };
import ResponseHTTP from "../Config/ResponseHTTP.ts";

dotenv.config();
const PORT: number = Number(process.env.PORTAPI) || 3000;
const HOST: string = process.env.HOSTAPI || "localhost";

let AllPlaces: Place[] =  dataPlaces as Place[];
AllPlaces.forEach(p => p.photoLink && p.photoLink === "/api/picturesNotFound/place" ? 
    p.photoLink = `http://${HOST}:${PORT}${p.photoLink}` : null
);

const GET_placesList = (req: Request, res: Response): Response | void => {
    try {
        const { location = "", description = "" } = req.query;

        let listPlaces: Place[] = AllPlaces;

        if (location) listPlaces = listPlaces.filter(p => p.location.toLowerCase().includes(String(location).toLowerCase()));

        if (description) listPlaces = listPlaces.filter(p => p.description.toLowerCase().includes(String(description).toLowerCase()));

        if (listPlaces.length > 0) {
            const responseAPI = new ResponseHTTP(true, 200, "Places successfully listed", listPlaces);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(false, 404, "No place matching the specified criteria was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of places");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

const GET_place = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.params;

        const listPlaces: Place[] = AllPlaces;
        let placeFound: Place | undefined | null = null;

        if (!name) {
            const responseAPI = new ResponseHTTP(false, 400, "Place name parameter not provided");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI.returnJSON());
        };

        placeFound = listPlaces.find(p => p.name.toLowerCase() === (String(name).toLowerCase()));

        if (placeFound) {
            const responseAPI = new ResponseHTTP(true, 200, "Place successfully listed", placeFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(false, 404, "No place matching the specified name was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of place");
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

export { GET_placesList, GET_place };