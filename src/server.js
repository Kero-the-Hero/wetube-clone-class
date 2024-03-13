import express from 'express';

const PORT = 5000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("I love middlewares!");
};

app.get('/', logger, handleHome); //라우터//


const handleListening = () =>
    console.log(`Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
