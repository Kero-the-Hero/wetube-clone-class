import express from 'express';
import morgan from 'morgan';

import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import storiesRouter from "./routers/storiesRouter.js";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storiesRouter);

const handleListening = () =>
    console.log(`Server Listening on port https://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);


