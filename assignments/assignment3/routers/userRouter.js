import express from "express";
import { users, users_id, edit_profile} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("", users);
userRouter.get("/:id(\\d+)", users_id);
userRouter.get("/edit-profile", edit_profile);

export default userRouter;