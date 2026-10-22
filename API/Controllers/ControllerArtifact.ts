import dotenv from "dotenv";
import { type Request, type Response } from "express";
import { type categoryArtifact, type Artifact } from "../Types/Artifact.ts";
import dataArtifacts from '../Data/Artifacts/dataArtifacts.json' with { type: 'json' };
import ResponseHTTP from "../Config/ResponseHTTP.ts";

dotenv.config();
const PORT: number = Number(process.env.PORTAPI) || 3000;
const HOST: string = process.env.HOSTAPI || "localhost";

let AllArtifact: Artifact[] = dataArtifacts as Artifact[];
AllArtifact.forEach(a => a.photoLink && a.photoLink === "/api/picturesNotFound/artifact" ? 
    a.photoLink = `http://${HOST === "localhost" ? `${HOST}:${PORT}` : HOST}${a.photoLink}` : null
);

const GET_artifactsList = (req: Request, res: Response): Response | void => {
    try {
        const { name = "", category = "", description = "" } = req.query;

        let listArtifacts: Artifact[] = AllArtifact;

        if (name) listArtifacts = listArtifacts.filter(a => a.name.toLowerCase().startsWith(String(name).toLowerCase()));

        if (category) listArtifacts = listArtifacts.filter(a => a.category?.includes(String(category).toLowerCase() as categoryArtifact));

        if (description) listArtifacts = listArtifacts.filter(a => a.description.toLowerCase().includes(String(description).toLowerCase()));

        if (listArtifacts.length > 0) {
            const responseAPI = new ResponseHTTP(true, 200, "Artifacts successfully listed", listArtifacts);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(false, 404, "No artifact matching the specified criteria was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of artifacts", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

const GET_artifact = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.params;

        const listArtifacts: Artifact[] = AllArtifact;
        let artifactFound: Artifact | undefined | null = null;

        if (!name) {
            const responseAPI = new ResponseHTTP(false, 400, "Artifact name parameter not provided or artifact name invalid");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI.returnJSON());
        };

        artifactFound = listArtifacts.find(a => a.name.toLowerCase() === (String(name).toLowerCase()));

        if (artifactFound) {
            const responseAPI = new ResponseHTTP(true, 200, "Artifact successfully listed", artifactFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(false, 404, "No artifact matching the specified name was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, 500, "Error in the list of artifact", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI.returnJSON());
    };
};

export { GET_artifactsList, GET_artifact };