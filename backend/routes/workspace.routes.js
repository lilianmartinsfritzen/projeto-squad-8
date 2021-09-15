import express from "express";
import workspace from "../data/workspace.js"

const router = express.Router();

router.get("/", (req, res) => {
  res.send(workspace);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundWorkspace = workspace.find((workspace) => workspace.id == id);
  res.send(foundWorkspace);
});

export default router;
