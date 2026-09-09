import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import dates from './dates.json' with { type: 'json' };
import RoutersCharacter from "./Routers/RoutersCharacter.ts";
import RoutersCabin from "./Routers/RoutersCabin.ts";
import RoutersItem from "./Routers/RoutersArtifact.ts";
import RoutersPlace from "./Routers/RoutersPlace.ts";
import RoutersBook from "./Routers/RoutersBook.ts";
import ResponseHTTP from './ResponseHTTP.ts';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORTAPI || 3000;
const HOST = process.env.HOSTAPI || "localhost";

app.use(cors());

app.get('/', (req: Request, res: Response): void => {
    res.send(`<main style='margin: 40px auto; padding: 20px; border: solid; border-radius: 20px; max-width: 750px; min-height: 500px;'>
        <h1 style='text-align: center;'>Percy Jackson API</h1>
        <p style='text-align: center;'>An API REST system providing data on characters, creatures, artifacts, and themes from 
            the Percy Jackson &amp; the Olympians universe (Riordanverse).
        </p>
        <ul>
            <li>/characters</li>
            <li>/characters/:name</li>
            <li>/artifacts</li>
            <li>/artifacts/:name</li>
            <li>/cabins</li>
            <li>/cabins/:cabinNumber</li>
            <li>/places/:</li>
            <li>/books</li>
            <li>/books/sagas</li>
            <li>/books/:title</li>
            <li>/books/sagas/:name</li>
        </ul>
    </main>`);
});

app.get("/api", (req: Request, res: Response): Response | void => {
    try {
        const responseAPI = new ResponseHTTP(true, "Data successfully listed", dates);
        responseAPI.showMessage();
        return res.status(200).json(responseAPI);
        
    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of data", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
});

app.use("/api/characters", RoutersCharacter);
app.use("/api/artifacts", RoutersItem);
app.use("/api/cabins", RoutersCabin);
app.use("/api/places", RoutersPlace);
app.use("/api/books", RoutersBook);

app.listen(PORT, () => {
  console.log(`---- Percy Jackson API ----\n Runnig on ${HOST}:${PORT}\n---------------------------`);
});