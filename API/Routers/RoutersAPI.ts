import express, { type Request, type Response } from "express";
import { notFound_picture } from "../Controllers/ControllerAPI.ts";

const router = express.Router();

router.get("/artifact", async (req: Request, res: Response) => await notFound_picture(req, res, "artifactNotFound.png"));
router.get("/book", async (req: Request, res: Response) => await notFound_picture(req, res, "bookNotFound.png"));
router.get("/cabin", async (req: Request, res: Response) => await notFound_picture(req, res, "cabinNotFound.png"));
router.get("/character", async (req: Request, res: Response) => await notFound_picture(req, res, "characterNotFound.png"));
router.get("/place", async (req: Request, res: Response) => await notFound_picture(req, res, "placeNotFound.png"));

export default router;