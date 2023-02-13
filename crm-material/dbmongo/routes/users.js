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
router.post("/", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`Utente con email ${user.email} è stato aggiunto con successo`);
});

export default router;
