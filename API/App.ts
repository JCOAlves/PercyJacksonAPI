import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import dotenv from "dotenv";

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
const PORT = process.env.PORTAPI || 3000;
const HOST = process.env.HOSTAPI || "localhost";

app.use(cors());

app.use("/", express.static("../Website"));

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

app.listen(PORT, () => {
    console.log(`-------- Percy Jackson API --------`);
    console.log(`| Runnig on http://${HOST}:${PORT} |`);
    console.log(`-----------------------------------`)
});