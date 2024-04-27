import express from 'express';
import { checkDnaController } from '../controllers/dnaController'; // Importa o controlador para a rota

export const router = express.Router();

// Define a rota POST para /api/checkdna e usa o controlador
router.post('/checkdna', checkDnaController);

// export default { router };
