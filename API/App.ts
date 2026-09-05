import express, { type Express, type Request, type Response } from 'express';
import RoutersCharacter from "./Routers/RoutersCharacter.ts";
import RoutersCabin from "./Routers/RoutersCabin.ts";
import RoutersItem from "./Routers/RoutersItem.ts";
import RoutersPlace from "./Routers/RoutersPlace.ts";
import RoutersBook from "./Routers/RoutersBook.ts";

const app: Express = express();

app.use("/characters", RoutersCharacter);
app.use("/itens", RoutersItem);
app.use("/cabins", RoutersCabin);
app.use("/places", RoutersPlace);
app.use("/books", RoutersBook);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Percy Jackson API</h1>');
});

app.listen(3000);