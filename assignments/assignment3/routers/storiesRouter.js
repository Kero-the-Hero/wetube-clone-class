import express from "express";
import { stories, edit, remove } from "../controllers/storiesController.js";

const storiesRouter = express.Router();

storiesRouter.get("/:id(\\d+)", stories);
storiesRouter.get("/:id(\\d+)/edit", edit);
storiesRouter.get("/:id(\\d+)/delete", remove);

export default storiesRouter;