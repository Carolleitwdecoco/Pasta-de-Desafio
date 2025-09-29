//Soma
let numero1 = 4;
let numero2 = 6;
let resultado = numero1 + numero2;

console.log(`A soma de ${numero1} + ${numero2} é ${resultado}`);

//desmembrando
let exempliSplit = 'Eu amo a any, mas tambem odeio.'
let desmembrando = exempliSplit.split(',');
console.log(desmembrando[0]);
let odeio = exempliSplit.split(',');
console.log(odeio[1]);

//desmebramento de numero
let numero = '3, 9, 8, 1, 6';
let desmebramentoDeNumero = numero.split(',');
console.log(desmebramentoDeNumero);

//Parsetint
function sorriso(dentes) {
    let quantidade = parseInt(dentes);
    return quantidade;

}

alert(sorriso(234.545453));

//Par ou impar
function numeroPI(number) {
    if (number % 2 === 0) {
        console.log('é par');
    } else {
        console.log('é impar');
    }

    return;
}

console.log(numeroPI(4));

//tempetatura
function tempetatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9 / 5) + 32;
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5 / 9;
    } else {
        return 'Escala inválida';
    }
}
let tempetaturaCelsius = 25;
let tempetaturaFahrenheit = tempetatura(tempetaturaCelsius, 'celsius');
console.log(tempetaturaFahrenheit);

//Calculadora
function Calculadora(esquerda, direita, função) {
    if (função.toLowerCase() === 'adição') {
        return esquerda + direita;
    }
    if (função.toLowerCase() === 'subtração') {
        return esquerda - direita;
    }
    if (função.toLowerCase() === 'multiplicação') {
        return esquerda * direita;
    }
    if (função.toLowerCase() === 'divisão') {
        return esquerda / direita;
    }

}
let calculadoraFeita = Calculadora(20, 20, 'adição');
console.log(calculadoraFeita);

//Juntando numeros
let umDoisTres = [1, 2, 2, 2, 2, 2, 2, 2, 3];
let quatroCincoSeis = [4, 5, 6];
let juntandoTudo = umDoisTres.concat(quatroCincoSeis);

//Embaralhando os numeros

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//removendo duplicates
function removerDuplicates(arrayGostosinhaDaAny) {
    return Array.from(new Set(arrayGostosinhaDaAny));
}

let juntandoOsNumeros = shuffle(juntandoTudo);
let resultadoDetudo = removerDuplicates(juntandoOsNumeros);
console.log(resultadoDetudo);

//positivo, negativo ou zero
function positivoNegativoZero(numero) {
    if (numero > 0) {
        console.log(`esse numero é positivo; ${numero}`);
    } else if (numero == 0) {
        console.log(`esse numero é zero; ${numero}`);
    } else {
        console.log(`esse numero é negativo; ${numero}`);
    }
    return;
}
positivoNegativoZero(6)

//idade maior ou menor
function IdadePessoa(idade) {
    if (idade >= 18) {
        console.log('Voce é maior de idade');
    } else {
        console.log('Voce é menor de idade');
    }
    return;
}
IdadePessoa(8)

//string vazia ou não???
function stringVazia(vazia) {
    let vazio;
    if (vazia == vazio) {
        console.log('essa string esta vazia');
    } else {
        console.log(`${vazia}`);
    }
    return;
}
stringVazia('amigo');

//Média de dois numeros
function MediaDois(media1, media2) {
    let MediaResultado = media1 + media2 / 2;
    if (media1 == 0 || media2 == 0) {
        console.log('erro')
    } else {
        return MediaResultado;
    }
}
console.log(MediaDois(60, 9));

//Meu tamanho
function MeuTamanho(tamanho) {
    return tamanho.length;
}
console.log(MeuTamanho([1, 2, 4, 5, 6]));

//Procurando com includes
let Procurandoincludes = ['roblox', 'Bourik', 'eu Hipe', 'tower defense'];
console.log(Procurandoincludes.includes('Bourik'));

//Implementando uma função
function implementandoFunção(arrayFunção, elemento) {
    return arrayFunção.includes(elemento);
}
let youtuberskkk = ['paulinhoOloko', 'redBeiramar', 'GamesEduu', 'BrkSEdu']
console.log(implementandoFunção(youtuberskkk, 'paulinhoOloko'))

//Usando string na array
let pao;
let manteiga;
let achocolatado;
let queijo;
let arrayDeComida = [queijo, achocolatado, manteiga, pao];
console.log(arrayDeComida.includes(pao));

//array de objetos
function estudantes(Alunos, objetos) {
    return Alunos.some(Alunos => Alunos.nome === objetos.nome && Alunos.idade === objetos.idade);

}
let NomeDosAlunos = [{ nome: 'Luciano', idade: 20 }, { nome: 'Pedro', idade: 18 }, { nome: 'Clara', idade: 19 }, { nome: 'Lucas', idade: 26 }];

let ProcurandoAluno = { nome: 'Clara', idade: 19 };
console.log(estudantes(NomeDosAlunos, ProcurandoAluno));

//Array devolvendo Par ou Impar
function NumerosParesNumerosImpares(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return{
        somaPares,
        produtoImpares
    };
}

let numerosDe1a5 = [1, 2, 3, 4, 5];
let resultadoDosParesImpares = NumerosParesNumerosImpares(numerosDe1a5);
console.log('Soma dos pares:', resultadoDosParesImpares.somaPares);
console.log('Poduto dos impares:', resultadoDosParesImpares.produtoImpares);