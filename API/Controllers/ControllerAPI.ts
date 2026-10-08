import { type Request, type Response } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

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

import { type Data } from '../ResponseHTTP.ts';
import ResponseHTTP from '../ResponseHTTP.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const GET_allData = (req: Request, res: Response): Response | void => {
    try {
        const Data: Data = {
            characters: [
                ...dataDemigod as Demigod[], ...dataCreature as Creature[], 
                ...dataDivinity as Divinity[], ...dataMortal as Character[]
            ],
            artifacts: dataArtifacts as Artifact[],
            cabins: dataCabins as Cabin[],
            places: dataPlaces as Place[],
            books: dataBooks as Saga[]
        };

        const responseAPI = new ResponseHTTP(true, "Data successfully listed", Data);
        responseAPI.showMessage();
        return res.status(200).json(responseAPI.returnJSON());

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of data", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

const notFound_API = (req: Request, res: Response): Response | void => {
    try {
        const { notfound } = req.params;
        const responseAPI = new ResponseHTTP(false, `The '/api/${notfound[0]}' route was not found or the route does not exist`);
        responseAPI.showMessage();
        return res.status(404).json(responseAPI.returnJSON());

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, `The '/api' route was not found or the route does not exist`);
        responseAPI.showMessage();
        return res.status(404).json(responseAPI.returnJSON());
    }
};

const notFound = (req: Request, res: Response): Response | void => {
    try {
        const { notfound } = req.params;
        const responseAPI = new ResponseHTTP(false, `The '/${notfound[0]}' route was not found or the route does not exist`);
        responseAPI.showMessage();
        return res.status(404).sendFile(path.join(__dirname, "../../Website/Pages", "not-found.html"));

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "The route was not found or the route does not exist");
        responseAPI.showMessage();
        return res.status(404).send("The route was not found or the route does not exist");
    };
};

export { GET_mainPage, GET_docsPage, GET_allData, notFound_API, notFound };
