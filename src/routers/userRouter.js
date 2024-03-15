import express from 'express';
import { edit, remove, logout, see, users } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get("", users);
userRouter.get("/logout", logout);
userRouter.get('/edit', edit);
userRouter.get('/remove', remove);
userRouter.get(":id", see);

export default userRouter;
