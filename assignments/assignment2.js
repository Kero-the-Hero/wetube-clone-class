import express from 'express';

const PORT = 4000;

const app = express();

const urlLogger = (req, res, next) => {
    console.log(`Path:${req.url}`);
    next();
};

const timeLogger = (req, res, next) => {
    const time = new Date();
    console.log(`Time : ${time.getFullYear()}.${time.getMonth()+1}.${time.getDate()}`);
    next();
};

const secuLogger = (req, res, next) => {
    const protocol = req.protocol;
    if(protocol === "https"){
        console.log("Secure");
    }
    console.log("Insecure");
    next();
};

const protectorMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed.</h1>");
    }
    console.log("Safe space");
    next();
};


const handleHome = (req, res, next) => {
    return res.send("Clone coding assignment2");
};

// app.use(urlLogger);
// app.use(timeLogger);
// app.use(secuLogger);
// app.use(protectorMiddleware);
app.use(urlLogger, timeLogger, secuLogger, protectorMiddleware);
app.get('/', handleHome);
app.listen(PORT);

