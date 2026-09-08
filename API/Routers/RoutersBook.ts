import express from "express";
import { GET_booksList, GET_book } from "../Controllers/ControllerBook.ts";

const router = express.Router();

router.get("/", GET_booksList);
router.get("/saga/:name")
router.get("/book/:title", GET_book);

export default router;