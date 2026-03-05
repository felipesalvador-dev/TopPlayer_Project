import express from "express"; // module = Import, commonjs = Require
import cors from "cors";
import usuarioRoutes from "../src/routes/usuarioRoutes.js"

const app = express()
app.use(express.json()) // Formato JSON
app.use(cors()) //Deixa o backend conectar com o frontend

app.get("/", (req,res)=>{
    res.json({msg: "Hello world"})
})

app.use("/usuarios", usuarioRoutes)

export default app