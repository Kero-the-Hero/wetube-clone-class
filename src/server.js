import express from 'express';
import morgan from 'morgan';

import globalRouter from './routers/globalRouter.js';
import userRouter from './routers/userRouter.js';
import videoRouter from './routers/videoRouter.js';

const PORT = 4000;

console.log(process.cwd());

const app = express();
const logger = morgan('dev');

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () =>
    console.log(`Server is Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
