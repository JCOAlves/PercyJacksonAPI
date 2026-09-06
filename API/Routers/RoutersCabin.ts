import express from "express";
import { GET_cabinsList, GET_cabin } from "../Controllers/ControllerCabin.ts";

const router = express.Router();

router.get("/", GET_cabinsList);
router.get("/cabin/:cabinNumber", GET_cabin);

export default router;