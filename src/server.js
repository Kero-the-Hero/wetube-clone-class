import express from 'express';

const PORT = 5000;

const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log(`Someone is going to: ${req.url}`);
    next();
};

const handleHome = (req, res, next) => {
    return res.send("I love middlewares!");
};

app.get('/', gossipMiddleware, handleHome); //라우터//

const handleListening = () =>
    console.log(`Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
