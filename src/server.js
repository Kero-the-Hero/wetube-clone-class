import express from 'express';

const PORT = 5000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed, You may continue.");
    next();
};

const handleHome = (req, res, next) => {
    return res.send("I love middlewares!");
};

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.");
};

app.use(logger);
app.use(privateMiddleware);
app.get('/', handleHome); //라우터//
app.get("/protected",handleProtected);

const handleListening = () =>
    console.log(`Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
