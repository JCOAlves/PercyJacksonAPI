import express from "express";
import { GET_itensList, GET_item } from "../Controllers/ControllerItem.ts";

const router = express.Router();

router.get("/", GET_itensList);
router.get("/item/:name", GET_item);

export default router;