import express from "express";
import { GET_charactersList, GET_character } from "../Controllers/ControllerCharacter.ts";

const router = express.Router();

router.get("/", GET_charactersList);
router.get("/:name", GET_character);

export default router;