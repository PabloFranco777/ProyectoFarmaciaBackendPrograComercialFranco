import express from 'express';
import { obtenerMedicamentos } from '../controllers/medicamentoController.js';

const router = express.Router();

// Cuando alguien visite /api/medicamentos, se ejecutará el controlador
router.get('/', obtenerMedicamentos);

export default router;