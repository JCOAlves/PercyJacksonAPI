import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import ReqLimit from './Config/RequestLimit.ts';
import path from 'path';
import { fileURLToPath } from 'url';

import { type Data } from './ResponseHTTP.ts';
import ResponseHTTP from './ResponseHTTP.ts';

import artifacts from './DataPJ/dataArtifacts.json' with { type: 'json' };
import books from './DataPJ/dataBooks.json' with { type: 'json' };
import cabins from './DataPJ/dataCabins.json' with { type: 'json' };
import characters from './DataPJ/dataCharacters.json' with { type: 'json' };
import places from './DataPJ/dataPlaces.json' with { type: 'json' };

import { type Character } from './Types/Character.ts';
import { type Artifact } from './Types/Artifact.ts';
import { type Cabin } from './Types/Cabin.ts';
import { type Place } from './Types/Place.ts';
import { type Saga } from './Types/Book.ts';

import RoutersArtifact from "./Routers/RoutersArtifact.ts";
import RoutersBook from "./Routers/RoutersBook.ts";
import RoutersCabin from "./Routers/RoutersCabin.ts";
import RoutersCharacter from "./Routers/RoutersCharacter.ts";
import RoutersPlace from "./Routers/RoutersPlace.ts";

dotenv.config();

const app: Express = express();
const PORT: number = Number(process.env.PORTAPI) || 3000;
const HOST: string = process.env.HOSTAPI || "localhost";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.set('trust proxy', 1);
app.use(ReqLimit);
app.use(express.static(path.join(__dirname, '../Website')));

app.get("/", (req: Request, res: Response): Response | void => {
    try {
        return res.status(200).sendFile(path.join(__dirname, "../Website/Pages", "main.html"));

    } catch (error) {
        return res.status(500).send(`Error in get the main page. Try again later.`);
    }
});

app.get("/docs", (req: Request, res: Response): Response | void => {
    try {
        return res.status(200).sendFile(path.join(__dirname, "../Website/Pages", "document.html"));

    } catch (error) {
        return res.status(500).send(`Error in get the documentation page. Try again later.`);
    }
});

app.get("/api", (req: Request, res: Response): Response | void => {
    try {
        const Data: Data = {
            characters: characters as Character[],
            artifacts: artifacts as Artifact[],
            cabins: cabins as Cabin[],
            places: places as Place[],
            books: books as Saga[]
        };

        const responseAPI = new ResponseHTTP(true, "Data successfully listed", Data);
        responseAPI.showMessage();
        return res.status(200).json(responseAPI.returnJSON());

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of data", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
});

app.use("/api/artifacts", RoutersArtifact);
app.use("/api/books", RoutersBook);
app.use("/api/cabins", RoutersCabin);
app.use("/api/characters", RoutersCharacter);
app.use("/api/places", RoutersPlace);
app.all("/api/*notfound", (req: Request, res: Response): Response | void => {
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
});

app.all("/*notfound", (req: Request, res: Response): Response | void => {
    try {
        const { notfound } = req.params;
        const responseAPI = new ResponseHTTP(false, `The '/${notfound[0]}' route was not found or the route does not exist`);
        responseAPI.showMessage();
        return res.status(404).sendFile(path.join(__dirname, "../Website/Pages", "not-found.html"));

    } catch (error) {
        return res.status(404).send("The route was not found or the route does not exist");
    };
});

app.listen(PORT, () => {
    console.log(`----------- Percy Jackson API -----------`);
    console.log(` Runnig on http://${HOST}:${PORT}  `);
    console.log(`-----------------------------------------`);
});