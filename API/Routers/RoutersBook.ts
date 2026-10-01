import express from "express";
import { GET_booksList, GET_sagasList, GET_saga, GET_book } from "../Controllers/ControllerBook.ts";

const router = express.Router();

router.get("/", GET_sagasList);
router.get("/books", GET_booksList);
router.get("/books/:title", GET_book);
router.get("/:name", GET_saga);

export default router;