import express from 'express';

const PORT = 5000;

const app = express();

const handleHome = (req, res) => {
    //console.log(res);//
    //return res.end();//
    return res.send('I still love you.');
};

const handleLogin = (req, res) => {
    return res.send('Login Here.');
};

app.get('/', handleHome); //라우터//
app.get('/login', handleLogin);

const handleListening = () =>
    console.log('Server Listening on port http://localhost:${PORT} 🚀');

app.listen(PORT, handleListening);
