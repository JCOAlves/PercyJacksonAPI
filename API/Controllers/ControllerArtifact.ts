import { type Request, type Response } from "express";
import { type Artifact } from "../Types/Artifact.ts";
import dataArtifacts from '../DataPJ/dataArtifacts.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_artifactsList = (req: Request, res: Response): Response | void => {
    try {
        const { name = "", category = "", description = "" } = req.query;

        let listArtifacts: Artifact[] = dataArtifacts as Artifact[];

        if (name) listArtifacts = listArtifacts.filter(a => a.name.toLowerCase().startsWith(String(name).toLowerCase()));

        if (category) listArtifacts = listArtifacts.filter(a => a.category?.includes(String(category) as "weapon" | "food" | "drink" | "protection" | "curing" | "futility" | "attack" | "defense"));

        if (description) listArtifacts = listArtifacts.filter(a => a.description.toLowerCase().includes(String(description).toLowerCase()));

        if (listArtifacts.length > 0) {
            const responseAPI = new ResponseHTTP(true, "Artifacts successfully listed", listArtifacts);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(true, "No artifact matching the specified criteria was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of artifacts", null, error);
        responseAPI.showMessage("Error");
        return res.status(500).json(responseAPI.returnJSON());
    };
};

const GET_artifact = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.params;

        const listArtifacts: Artifact[] = dataArtifacts as Artifact[];
        let artifactFound: Artifact | undefined | null = null;

        if (!name) {
            const responseAPI = new ResponseHTTP(false, "Artifact name parameter not provided");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI.returnJSON());
        };

        artifactFound = listArtifacts.find(a => a.name.toLowerCase().startsWith(String(name).toLowerCase()));

        if (artifactFound) {
            const responseAPI = new ResponseHTTP(true, "Artifact successfully listed", artifactFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI.returnJSON());

        } else {
            const responseAPI = new ResponseHTTP(true, "No artifact matching the specified name was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI.returnJSON());
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of artifact", null, error);
        responseAPI.showMessage("Error");
        return res.status(500).json(responseAPI.returnJSON());
    };
};

export { GET_artifactsList, GET_artifact };