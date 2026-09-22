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
    return res.sendFile(path.join(__dirname, "../Website", "main.html"));
});

app.get("/docs", (req: Request, res: Response): Response | void => {
    return res.sendFile(path.join(__dirname, "../Website", "document.html"));
});

app.get("/api", (req: Request, res: Response): Response | void => {
    try {
        const Data: Data = {
            characters: characters,
            artifacts: artifacts,
            cabins: cabins,
            places: places,
            books: books
        };

        const responseAPI = new ResponseHTTP(true, "Data successfully listed", Data);
        responseAPI.showMessage();
        return res.status(200).json(responseAPI);

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of data", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
});

app.use("/api/artifacts", RoutersArtifact);
app.use("/api/books", RoutersBook);
app.use("/api/cabins", RoutersCabin);
app.use("/api/characters", RoutersCharacter);
app.use("/api/places", RoutersPlace);
app.all("/api/*notfound", (req: Request, res: Response): Response | void => {
    const { notfound } = req.params;
    const responseAPI = new ResponseHTTP(false, `The '/api/${notfound[0]}' route was not found or the route does not exist`);
    responseAPI.showMessage();
    return res.status(404).json(responseAPI);
});

app.all("/*notfound", (req: Request, res: Response): Response | void => {
    const { notfound } = req.params;
    new ResponseHTTP(false, `The '/${notfound[0]}' route was not found or the route does not exist`).showMessage();
    return res.status(404).sendFile(path.join(__dirname, "../Website", "not-found.html"));
});

app.listen(PORT, () => {
    console.log(`----------- Percy Jackson API -----------`);
    console.log(` Runnig on http://${HOST}:${PORT}  `);
    console.log(`-----------------------------------------`);
});