import express from "express";
import users from "../data/users.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ id: uuidv4(), ...user });
  console.log(`User with the id ${user.id} created successfully`);
  res.send(users);
});

router.delete("/:id", (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  console.log(`User ${id} has been successfully deleted`);
});

export default router;
