import { Request, Response } from 'express';
import { checkDnaSequences } from '../services/dnaService';

export const checkDnaController = (req: Request, res: Response) => {
  const dna: string[][] = req.body.dna;

  // Verifica se o DNA é válido
  if (!Array.isArray(dna) || !dna.every(row => Array.isArray(row))) {
    return res.status(400).json({ error: 'Invalid DNA data' });
  }

  // Chama a função para verificar sequências no DNA
  const result = checkDnaSequences(dna);

  // Retorna o objeto com os detalhes
  res.json(result);
};