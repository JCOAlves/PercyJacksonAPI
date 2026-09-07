import express from "express";
import { GET_artifactsList, GET_artifact } from "../Controllers/ControllerArtifact.ts";

const router = express.Router();

router.get("/", GET_artifactsList);
router.get("/artifact/:name", GET_artifact);

export default router;