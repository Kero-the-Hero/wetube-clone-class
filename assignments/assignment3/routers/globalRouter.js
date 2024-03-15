import express from "express";
import { home, join, login } from "../controllers/userController.js";
import { trending, fresh } from "../controllers/storiesController.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", fresh);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;