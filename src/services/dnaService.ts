type DnaResult = 'HUMANO' | 'SIGMANO'; // Define um tipo union com valores específicos

var dnaResult: DnaResult = 'HUMANO'; // Define a variável com um dos valores permitidos

export function checkDnaSequences(dna: string[][]) {
    console.log('Checando DNA...');
    // Verifica cada direção
    const horizontal = checkHorizontal(dna);
    const vertical = checkVertical(dna);
    const diagonalP = checkDiagonalPrincipal(dna);
    const diagonalS = checkDiagonalSecundaria(dna);

    console.log('horizontal', horizontal);
    console.log('vertical', vertical);
    console.log('diagonalP', diagonalP);
    console.log('diagonalS', diagonalS);

    // Define hasSequences se alguma das verificações for verdadeira
    const hasSequences = horizontal || vertical || diagonalP || diagonalS;

    // Imprime o resultado no console
    console.log('O DNA contém sequências iguais de quatro letras:', hasSequences);

    if (hasSequences) {
        dnaResult = 'SIGMANO';
    } else {
        dnaResult = 'HUMANO';
    }

    // Retorna o objeto com os resultados
    return {
        dnaResult,
        horizontal,
        vertical,
        diagonalP,
        diagonalS,
        hasSequences,
    };
}

// Função para verificar sequências horizontais de quatro letras iguais
function checkHorizontal(dna: string[][]): boolean {
    for (let i = 0; i < dna.length; i++) { // Para cada linha
        for (let j = 0; j <= dna[i].length - 4; j++) { // Verifica segmentos de 4 colunas
            const segment = dna[i].slice(j, j + 4); // Segmento de quatro letras
            if (segment.every((val) => val === segment[0] && segment[0] !== '')) { // Checa se todas as letras são iguais
                return true;
            }
        }
    }
    return false;
}

// Função para verificar sequências verticais de quatro letras iguais
function checkVertical(dna: string[][]): boolean {
    for (let j = 0; j < dna[0].length; j++) { // Para cada coluna
        for (let i = 0; i <= dna.length - 4; i++) { // Verifica segmentos de 4 linhas
            const segment = [dna[i][j], dna[i + 1][j], dna[i + 2][j], dna[i + 3][j]]; // Segmento vertical de quatro letras
            if (segment.every((val) => val === segment[0] && segment[0] !== '')) { // Checa se todas as letras são iguais
                return true;
            }
        }
    }
    return false;
}

// Função para verificar sequências diagonais de quatro letras iguais (principal)
function checkDiagonalPrincipal(dna: string[][]): boolean {
    for (let i = 0; i <= dna.length - 4; i++) { // Para cada linha com margem para diagonal
        for (let j = 0; j <= dna[i].length - 4; j++) { // Para cada coluna com margem para diagonal
            const segment = [dna[i][j], dna[i + 1][j + 1], dna[i + 2][j + 2], dna[i + 3][j + 3]]; // Segmento diagonal de quatro letras
            if (segment.every((val) => val === segment[0] && segment[0] !== '')) { // Checa se todas as letras são iguais
                return true;
            }
        }
    }
    return false;
}

// Função para verificar sequências diagonais de quatro letras iguais (secundária)
function checkDiagonalSecundaria(dna: string[][]): boolean {
    for (let i = 0; i <= dna.length - 4; i++) { // Para cada linha com margem para diagonal
        for (let j = 3; j < dna[i].length; j++) { // Para cada coluna da direita para a esquerda com margem para diagonal
            const segment = [dna[i][j], dna[i + 1][j - 1], dna[i + 2][j - 2], dna[i + 3][j - 3]]; // Segmento diagonal reverso de quatro letras
            if (segment.every((val) => val === segment[0] && segment[0] !== '')) { // Checa se todas as letras são iguais
                return true;
            }
        }
    }
    return false;
}
