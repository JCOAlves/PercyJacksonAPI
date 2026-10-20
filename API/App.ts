import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import ReqLimit from './Config/RequestLimit.ts';
import { fileURLToPath } from 'url';
import path from 'path';

import { GET_mainPage, GET_docsPage, GET_allData, GET_nameRoutes, notFound_API, notFound } from "./Controllers/ControllerAPI.ts";

import RoutersAPI from "./Routers/RoutersAPI.ts";
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

app.get("/", GET_mainPage);
app.get("/documentation", GET_docsPage);

app.get("/api", GET_allData);
app.get("/api/nameRoutes", GET_nameRoutes);
app.use("/api/artifacts", RoutersArtifact);
app.use("/api/sagas", RoutersBook);
app.use("/api/cabins", RoutersCabin);
app.use("/api/characters", RoutersCharacter);
app.use("/api/places", RoutersPlace);
app.use("/api/picturesNotFound", RoutersAPI);
app.all("/api/*notfound", notFound_API);

app.all("/*notfound", notFound);

app.listen(PORT, () => {
    console.log(`-----------\x1b[34m Percy Jackson API \x1b[0m-----------`);
    console.log(`|    Started on ${new Date().toLocaleString('pt-br', { timeZone: "America/Sao_Paulo" }).replace(",", "")}     |`);
    console.log(`-----------------------------------------`);
});