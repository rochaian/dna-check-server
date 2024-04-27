import { Request, Response } from 'express';
import { getDnaResult, saveDnaResult } from '../services/dnaService';
import { checkDnaSequences } from '../services/dnaService'; // Função que verifica sequências de DNA

export const checkDnaController = async (req: Request, res: Response) => {
  const dnaArray = req.body.dna;

  console.log('verificando no banco...');
  const existingResult = await getDnaResult(dnaArray); // Verifica se já existe

  if (existingResult) {
    console.log('existe no banco');
    console.log(existingResult.result);
    return res.json({dnaResult: existingResult.result}); // Se existir, retorna o resultado
  }

  // Se não existir, calcula o resultado e salva no MongoDB
  console.log('não existe no banco.');
  const result = checkDnaSequences(dnaArray); // Verifica sequências de DNA

  console.log('salvando no banco resultado.')
  await saveDnaResult(dnaArray, result.dnaResult); // Salva no MongoDB

  return res.json(result);
};
