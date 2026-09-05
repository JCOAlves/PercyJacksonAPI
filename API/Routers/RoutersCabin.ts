import express from "express";
import { GET_cabinsList, GET_cabin } from "../Controllers/ControllerCabin.ts";

const router = express.Router();

router.get("/", GET_cabinsList);
router.get("/cabin/cabinNumber/:cabinNumber", GET_cabin);
router.get("/cabin/divinity/:divinity", GET_cabin);

export default router;