import express from "express";

import { fetchById, create } from "../controllers/tutorial-controller.js";

const router = express.Router();

router.get("/tutorials/:id", fetchById);
router.post("/tutorials/", create);

export default router;
