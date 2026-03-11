import express from "express"; // module = Import, commonjs = Require
import cors from "cors";
import usuarioRoutes from "../src/routes/usuarioRoutes.js"
import jogoRoutes from "../src/routes/jogoRoutes.js"
import playerRoutes from "../src/routes/playerRoutes.js"

const app = express()
app.use(express.json()) // Formato JSON
app.use(cors()) //Deixa o backend conectar com o frontend

app.get("/", (req,res)=>{
    res.json({msg: "Hello world"})
})

app.use("/usuarios", usuarioRoutes)
app.use("/jogos", jogoRoutes)
app.use("/players", playerRoutes)

export default app