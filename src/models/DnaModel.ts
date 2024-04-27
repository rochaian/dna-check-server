import mongoose from 'mongoose';

const dnaResultSchema = new mongoose.Schema({
  dna: { type: String, required: true },
  result: { type: String, required: true },
});

// Cria um modelo para a coleção de DNA
export const DnaModel = mongoose.model('DnaResult', dnaResultSchema);
