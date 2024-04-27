import mongoose from 'mongoose';

// String de conexão do MongoDB Atlas
const mongoUri = 'mongodb+srv://ayn44:userdb44@golivery.88wgu.mongodb.net/?retryWrites=true&w=majority'; // Substitua pela sua string de conexão

// Função para conectar ao MongoDB
export const mongodbConfig = async () => {
  await mongoose.connect(mongoUri);

  console.log('Conectado ao MongoDB');
};