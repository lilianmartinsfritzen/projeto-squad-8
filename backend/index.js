import express from "express";
import workspaceRoutes from "./routes/workspace.routes.js";
import usersRoutes from "./routes/user.routes.js";

const app = express();
const PORT = 3333; 

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/workspace", workspaceRoutes);
app.get("/", (req, res)=>res.send("Você está na raiz da api, seja bem-vindo"));

app.listen(PORT,()=>{
    console.log(`Sever running on port: http://localhost:${PORT}`)
})