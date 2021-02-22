import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ texto: "Olá bobão" });
});

app.listen(3333, () => console.log("Rodando na porta 3333"));
