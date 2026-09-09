import express, { type Express, type Request, type Response } from 'express';
import dates from './dates.json' with { type: 'json' };
import RoutersCharacter from "./Routers/RoutersCharacter.ts";
import RoutersCabin from "./Routers/RoutersCabin.ts";
import RoutersItem from "./Routers/RoutersArtifact.ts";
import RoutersPlace from "./Routers/RoutersPlace.ts";
import RoutersBook from "./Routers/RoutersBook.ts";
import ResponseHTTP from './ResponseHTTP.ts';

const app: Express = express();

app.get('/', (req: Request, res: Response): void => {
    res.send(`<main style='margin: 40px auto; padding: 20px; border: solid; border-radius: 20px; max-width: 700px;'>
        <h1 style='text-align: center;'>Percy Jackson API</h1>
        <p> </p>
        <ul>
            <li>s</li>
            <li>s</li>
            <li>s</li>
            <li>s</li>
            <li>s</li>
            <li>s</li>
            <li>s</li>
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

app.listen(3000, () => {
  console.log("--- Percy Jackson API ---");
});