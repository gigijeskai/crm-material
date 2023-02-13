import express from "express";

import nodemon from "nodemon";

import {
  insertUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", insertUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
