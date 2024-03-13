import express from 'express';
import morgan from 'morgan';

const PORT = 5000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
    console.log("I will respond.");  
    return res.send("hello");
};
const login = (req, res) => {
    return res.send("login");
}

app.use(logger);
app.get('/', home); //라우터//
app.get('/login', login);


const handleListening = () =>
    console.log(`Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
