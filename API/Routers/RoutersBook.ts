import express from "express";
import { GET_booksList, GET_sagasList, GET_saga, GET_book } from "../Controllers/ControllerBook.ts";

const router = express.Router();

router.get("/", GET_booksList);
router.get("/sagas", GET_sagasList);
router.get("/:title", GET_book);
router.get("/sagas/:name", GET_saga);

export default router;