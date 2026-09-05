import express from "express";
import { GET_charactersList, GET_character } from "../Controllers/ControllerCharacter.ts";

const router = express.Router();

router.get("/", GET_charactersList);
router.get("/:category", GET_charactersList);
router.get("/character/:name", GET_character);

export default router;