import express from "express";
import { GET_placesList, GET_place } from "../Controllers/ControllerPlace.ts";

const router = express.Router();

router.get("/", GET_placesList);
router.get("/place/:name", GET_place);

export default router;