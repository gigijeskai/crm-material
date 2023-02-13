import { v4 as uuidv4 } from "uuid";

let users = [];

export const getAllUsers = (req, res) => {
  res.send(users);
};
export const getUserById = (req, res) => {
  const { id } = req.params;
  const userTrovato = users.find((user) => user.id == id);
  res.send(userTrovato);
};

export const insertUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`Utente con email ${user.email} è stato aggiunto con successo`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`Utente con id ${id} è stato eliminato`);
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, cognome, email } = req.body;

  const userTrovato = users.find((user) => user.id == id);

  if (nome) userTrovato.nome = nome;
  if (cognome) userTrovato.cognome = cognome;
  if (email) userTrovato.email = email;

  res.send(`utente con id ${id} è stato modificato con successo`);
};
