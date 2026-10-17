import express from 'express'
import { listarAutores } from '../controller/autoresController.js';
const router = express.Router();

router.get('/',listarAutores)

export default router;