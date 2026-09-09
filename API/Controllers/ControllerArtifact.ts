import { type Request, type Response } from "express";
import { type Artifact } from "../Models/Artifact.ts";
import dates from '../dates.json' with { type: 'json' };
import ResponseHTTP from "../ResponseHTTP.ts";

const GET_artifactsList = (req: Request, res: Response): Response | void => {
    try {
        const { name = "", category = "", description = "" } = req.query;

        let listArtifacts: Artifact[] = dates.artifacts;

        if (name) {
            const listFilted = listArtifacts.filter(a => a.name.toLowerCase().startsWith(String(name).toLowerCase()));
            listArtifacts = listFilted;
        };

        if (category) {
            const listFilted = listArtifacts.filter(a => a.category?.includes(String(category) as "weapon" | "food" | "drink" | "protection" | "curing" | "futility" | "attack" | "defense"));
            listArtifacts = listFilted;
        }

        if (description) {
            const listFilted = listArtifacts.filter(a => a.description.toLowerCase().includes(String(description).toLowerCase()));
            listArtifacts = listFilted;
        }

        if (listArtifacts.length > 0) {
            const responseAPI = new ResponseHTTP(true, "Artifacts successfully listed", listArtifacts);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No artifact matching the specified criteria was found", []);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of artifacts", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

const GET_artifact = (req: Request, res: Response): Response | void => {
    try {
        const { name = "" } = req.params;

        const listArtifacts: Artifact[] = dates.artifacts;
        let artifactFound: Artifact | undefined | null = null;

        if (!name) {
            const responseAPI = new ResponseHTTP(false, "Artifact name parameter not provided");
            responseAPI.showMessage();
            return res.status(400).json(responseAPI);
        };

        artifactFound = listArtifacts.find(a => a.name.toLowerCase().startsWith(String(name).toLowerCase()));

        if (artifactFound) {
            const responseAPI = new ResponseHTTP(true, "Artifact successfully listed", artifactFound);
            responseAPI.showMessage();
            return res.status(200).json(responseAPI);

        } else {
            const responseAPI = new ResponseHTTP(true, "No artifact matching the specified name was found", null);
            responseAPI.showMessage();
            return res.status(404).json(responseAPI);
        };

    } catch (error) {
        const responseAPI = new ResponseHTTP(false, "Error in the list of artifact", null, error);
        responseAPI.showMessage();
        return res.status(500).json(responseAPI);
    };
};

export { GET_artifactsList, GET_artifact };