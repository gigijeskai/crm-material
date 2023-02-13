import express from "express";

const router = express.Router();

let users = [
  {
    nome: "Luca",
    cognome: "Rossi",
    email: "luca.rossi@gmail.it",
  },
  {
    nome: "Marco",
    cognome: "Verdi",
    email: "marco.verdi@gmail.it",
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

export default router;
