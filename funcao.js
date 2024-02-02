//EXERCÍCIO 1: Faça uma função que receba um único valor. Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo

//console.log(identifyNum())

const verifica1 = (num) => num > 0 ? 1 : 0



//EXERCÍCIO 2: Faça uma função que receba um único valor representado em segundos. Essa função deverá convertê-lo para horas, minutos e segundos. 

function secondsConverter(num){
    const seconds = num;
    const minutes = num / 60;
    const hours = num /3600;

    return `
    Seconds: ${seconds.toFixed(1)} sec.; Minutes: ${minutes.toFixed(1)} min.; Hours: ${hours.toFixed(1)} h.`
}

//EXEMPLO

function multiplicacao(){
	let multi = 1
	for(let i in arguments){
		multi *= arguments[i]
	}
	return multi
}

/* console.log(multiplicacao())  //1
console.log(multiplicacao(5)) //5
console.log(multiplicacao(5,5)) //25
console.log(multiplicacao(5,5,5)) //125
console.log(multiplicacao(5,5,5,5)) //625*/

//ATIVIDADE 1: Dado um array de números, crie uma função que receba esse array e retorne um novo array onde cada número é multiplicado por 2.

const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
function duplicateArray(array){
    const map1 = array.map((i) => i * 2)
    return map1
}

//ATIVIDADE 2: Dado um array de palavras, crie uma função que receba esse array e retorne um novo array contendo apenas as palavras que têm mais de três letras.

const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

function wordsLength(array){
    const result = array.filter((array) => array.length > 3)
    return result
}

//EXEMPLO 
const soma = function (x, y){
	return x + y
}

const resultado = function(a, b, operacao = soma){
	console.log(operacao(a, b))
	//Os parâmetros de a e b operacao(a, b) substituem os de soma(x,y)
	// quando um parâmetro já tem igualdade, só é preciso passar os que não tem 
}
/*console.log(resultado(5, 5))
console.log(resultado(5, 5, soma))
console.log(resultado(5, 5, function (x,y){
	return x * y
}))
console.log(resultado(3,3, (x,y) => x / y))*/

//ATIVIDADE 3: Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.
const numeros = [1, 2, 3, 4, 5]
function arraySum(array){
    const initialValue = 0
    const result = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );
      return result
}

//ATIVIDADE 4: Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.

function doubleNumber(num){
    return num * 2
}

function tripleNumber(num){
    return num * 3
}

function doubleTripleSum(num){
    return doubleNumber(num) + tripleNumber(num)
}
