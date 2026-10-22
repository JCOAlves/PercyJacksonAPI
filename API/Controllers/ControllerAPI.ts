import dotenv from "dotenv";
import { type Request, type Response } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { readdir } from 'fs/promises';

import dataArtifacts from '../Data/Artifacts/dataArtifacts.json' with { type: 'json' };
import dataBooks from '../Data/Books/dataBooks.json' with { type: 'json' };
import dataCabins from '../Data/Cabins/dataCabins.json' with { type: 'json' };
import dataDemigod from '../Data/Characters/dataDemigod.json' with { type: 'json' };
import dataCreature from '../Data/Characters/dataCreature.json' with { type: 'json' };
import dataDivinity from '../Data/Characters/dataDivinity.json' with { type: 'json' };
import dataMortal from '../Data/Characters/dataMortal.json' with { type: 'json' };
import dataPlaces from '../Data/Places/dataPlaces.json' with { type: 'json' };

import { type Character, type Divinity, type Demigod, type Creature } from "../Types/Character.ts";
import { type Artifact } from '../Types/Artifact.ts';
import { type Cabin } from '../Types/Cabin.ts';
import { type Place } from '../Types/Place.ts';
import { type Saga } from '../Types/Book.ts';

import ResponseHTTP, { type Data } from '../Config/ResponseHTTP.ts';

dotenv.config();
const PORT: number = Number(process.env.PORTAPI) || 3000;
const HOST: string = process.env.HOSTAPI || "localhost";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get pages website
const GET_mainPage = (req: Request, res: Response): Response | void => {
    try {
        return res.status(200).sendFile(path.join(__dirname, "../../Website/Pages", "main.html"));

    } catch (error) {
        return res.status(500).send(`Error in get the main page. Try again later.`);
    }
};

const GET_docsPage = (req: Request, res: Response): Response | void => {
    try {
        return res.status(200).sendFile(path.join(__dirname, "../../Website/Pages", "document.html"));

    } catch (error) {
        return res.status(500).send(`Error in get the documentation page. Try again later.`);
    }
};

// Get data API
const GET_allData = (req: Request, res: Response): Response | void => {
    try {
        let AllCharacters: (Character | Demigod | Divinity | Creature)[] = [
                ...dataDemigod as Demigod[], ...dataCreature as Creature[], 
                ...dataDivinity as Divinity[], ...dataMortal as Character[]
            ];
        AllCharacters.forEach(c => c.photoLink && c.photoLink === "/api/picturesNotFound/character" ? 
            c.photoLink = `http://${HOST}:${PORT}${c.photoLink}` : null
        );
        AllCharacters.sort((a, b) => a.name.localeCompare(b.name));

        let AllArtifact: Artifact[] = dataArtifacts as Artifact[];
        AllArtifact.forEach(a => a.photoLink && a.photoLink === "/api/picturesNotFound/artifact" ? 
            a.photoLink = `http://${HOST}:${PORT}${a.photoLink}` : null
        );

        let AllCabins: Cabin[] = dataCabins as Cabin[];
        AllCabins.forEach(c => c.photoLink && c.photoLink === "/api/picturesNotFound/cabin" ? 
            c.photoLink = `http://${HOST}:${PORT}${c.photoLink}` : null
        );

        let AllPlaces: Place[] =  dataPlaces as Place[];
        AllPlaces.forEach(p => p.photoLink && p.photoLink === "/api/picturesNotFound/place" ? 
            p.photoLink = `http://${HOST}:${PORT}${p.photoLink}` : null
        );

        let AllSagas: Saga[] = dataBooks as Saga[];
        AllSagas.forEach(s => s.books.forEach(b => b.photoLink && b.photoLink === "/api/picturesNotFound/book" ? 
            b.photoLink = `http://${HOST}:${PORT}${b.photoLink}` : null)
        );
        
        const Data: Data = {
            characters: AllCharacters,
            artifacts: AllArtifact,
            cabins: AllCabins,
            places: AllPlaces,
            books: AllSagas
        };

        const responseAPI = new ResponseHTTP(true, 200, "Data successfully listed", Data);
        responseAPI.showMessage();
        return res.status(200).json(responseAPI.returnJSON());

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of data", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

const GET_nameRoutes = (req: Request, res: Response): Response | void => {
    try {
        const Routes: Data ={
            characters: ["/api/characters", "/api/characters/:name"],
            artifacts: ["/api/artifacts", "/api/artifacts/:name"],
            cabins: ["/api/cabins", "/api/cabins/:cabinNumber"],
            places: ["/api/places", "/api/places/:name"],
            books: ["/api/sagas", "/api/sagas/books", "/api/sagas/books/:title", "/api/sagas/:name"]
        };

        const responseAPI = new ResponseHTTP(true, 200, "Name Routes successfully listed", Routes);
        responseAPI.showMessage();
        return res.status(200).json(responseAPI.returnJSON());
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of name routes", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

// Return "Not Found"
const notFound_API = (req: Request, res: Response): Response | void => {
    try {
        const { notfound } = req.params;
        const responseAPI = new ResponseHTTP(false, 404, `The \"/api/${notfound[0]}\" route was not found or the route does not exist`);
        responseAPI.showMessage();
        return res.status(404).json(responseAPI.returnJSON());

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 404, "The \"/api\" route was not found or the route does not exist");
        responseAPI.showMessage();
        return res.status(404).json(responseAPI.returnJSON());
    }
};

const notFound_picture = async (req: Request, res: Response, picture: string): Promise<Response | void> => {
    try {
        const foldPictures = path.resolve(__dirname, "../../Website/Imgs/notFounds");
        const namePictures: string[] = await readdir(foldPictures);

        if (picture && namePictures.includes(String(picture))){
            return res.status(200).sendFile(path.join(__dirname, "../../Website/Imgs/notFounds", picture));

        } else{
            const responseAPI = new ResponseHTTP(false, 400, "The \"Not Found\" picture was not found or it does not exist");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI.returnJSON());
        };
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 404, "The \"picture not found\" not found or it does not exist");
        responseAPI.showMessage();
        return res.status(404).json(responseAPI.returnJSON());
    };
};

const notFound = (req: Request, res: Response): Response | void => {
    try {
        const { notfound } = req.params;
        const responseAPI = new ResponseHTTP(false, 404, `The \"/${notfound[0]}\" route was not found or the route does not exist`);
        responseAPI.showMessage();
        return res.status(404).sendFile(path.join(__dirname, "../../Website/Pages", "not-found.html"));

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 404, "The route was not found or the route does not exist");
        responseAPI.showMessage();
        return res.status(404).send("The route was not found or the route does not exist");
    };
};

export { GET_mainPage, GET_docsPage, GET_allData, GET_nameRoutes, notFound_API, notFound_picture, notFound };
