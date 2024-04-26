# Backend de Verificação de DNA

Este é um projeto de backend em Node.js com TypeScript para verificar sequências de DNA. Ele possui um endpoint de API `/api/checkdna` que recebe uma matriz de DNA (representada por um array bidimensional) e verifica se há sequências de quatro letras iguais nas direções horizontais, verticais ou diagonais.

## Estrutura do Projeto

- **Servidor**: Configuração do servidor Node.js com Express.
- **Roteamento**: Rotas de API para gerenciar endpoints.
- **Controladores**: Controla a lógica associada a cada rota.
- **Serviços**: Lógica de negócios para verificar sequências de DNA.

## Configuração

1. **Instalar Dependências**:
   - Certifique-se de que o Node.js está instalado.
   - Instale as dependências do projeto:

     ```bash
     npm install
     ```

2. **Configurar o Ambiente de Desenvolvimento**:
   - Para rodar o servidor em modo de desenvolvimento, instale o Nodemon e o `ts-node`:

     ```bash
     npm install --save-dev nodemon ts-node
     ```

3. **Configurar o Projeto**:
   - Se necessário, ajuste o arquivo `tsconfig.json` para definir as configurações do TypeScript.

## Execução do Projeto

Para rodar o servidor, você pode usar os seguintes comandos:

- **Desenvolvimento**: Use o Nodemon para rodar e monitorar o código durante o desenvolvimento:

  ```bash
  npm run dev
  ```

- **Produção**: Compile o TypeScript e execute o servidor com o Node.js:

  ```bash
  tsc
  npm start
  ```

## Testando a API

Para testar a API `/api/checkdna`, você pode usar ferramentas como Postman ou cURL para enviar uma solicitação POST com um JSON representando uma matriz de DNA.

- **Exemplo de Requisição POST**:

  ```json
  {
    "dna": [
      ["A", "T", "C", "G"],
      ["G", "C", "T", "A"],
      ["C", "G", "A", "T"],
      ["T", "C", "G", "A"]
    ]
  }
  ```

- **Resposta Esperada**:

  ```json
  {
    "dnaCheck" : 'HUMANO',
    "horizontal": false,
    "vertical": false,
    "diagonalP": false,
    "diagonalS": false,
    "hasSequences": false
  }
  ```

Se uma sequência válida for encontrada em qualquer direção, o valor `hasSequences` será `true`.
