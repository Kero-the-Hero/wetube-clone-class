import express from 'express';

const PORT = 5000;

const app = express();

const handleHome = (req, res) => {
    return res.send('<h1>I still love you.</h1>');
};

const handleLogin = (req, res) => {
    return res.send({ message: 'Login here.' });
};

app.get('/', handleHome); //라우터//
app.get('/login', handleLogin);

const handleListening = () =>
    console.log(`Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
