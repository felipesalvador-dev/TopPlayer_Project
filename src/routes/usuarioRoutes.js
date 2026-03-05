import { Router } from "express"
import * as usuariosControllers from "../controllers/usuarioControllers.js"

const router = Router()

router.post("/login", usuariosControllers.login)
router.get("/", usuariosControllers.listar);
router.get("/:id", usuariosControllers.buscarPorId);
router.post("/", usuariosControllers.criar);
router.delete("/:id", usuariosControllers.deletar);

export default router