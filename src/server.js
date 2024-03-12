import express from "express";

const PORT = 5000;

const app = express();

app.get("/", ()=> console.log("Somebody is trying to go Home."));

const handleListening =() => 
    console.log("Server Listening on port http://localhost:${PORT} 🚀");

app.listen(PORT, handleListening);