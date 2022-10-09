/*
  01
  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

const getUsers = (url) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  request.addEventListener(`readystatechange`, () => {

    const successRequest = request.readyState === 4 && request.status === 200
    const errorRequest = request.readyState === 4

    if (successRequest) {
      const dataRequestObject = JSON.parse(request.responseText)
      resolve(dataRequestObject)
    }

    if (errorRequest) {
      const requestErrorFeedback =
        `Não foi possível obter os dados dos usuários.`
      reject(requestErrorFeedback)
    }
  })
  request.open(`GET`, url)
  request.send()
})

// getUsers(`https://jsonplaceholder.typicode.com/users`)
//   .then(console.log)
//   .catch(console.log)

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const getOperationMessage = (number1, number2, operator, operation) =>
  `Resultado da operação: ${number1} ${operator} ${number2} = ${operation}`

const calculator = operator => (number1, number2) => ({

  '+': getOperationMessage(number1, number2, operator, number1 + number2),
  '-': getOperationMessage(number1, number2, operator, number1 - number2),
  '*': getOperationMessage(number1, number2, operator, number1 * number2),
  '/': getOperationMessage(number1, number2, operator, number1 / number2),
  '%': getOperationMessage(number1, number2, operator, number1 % number2)

})[operator] || `Operação inválida.`


// const sum = calculator(`+`)
// console.log(sum(1, 3))
// const subtraction = calculator(`-`)
// console.log(subtraction(1, 3))
// const multiplication = calculator(`*`)
// console.log(multiplication(1, 3))
// const division = calculator(`/`)
// console.log(division(1, 3))
// const remainder = calculator(`-`)
// console.log(remainder(1, 3))

/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const south = [`Paraná`, `Rio Grande do Sul`, `Santa Catarina`]
const southeast = [`Minas Gerais`, `São Paulo`, `Rio de Janeiro`, `Espirito Santo`]

let brazil = south.concat(southeast)
console.log(brazil)
brazil.unshift(`Amapá`, `Rondônia`, `Roraima`)
console.log(brazil)
const amapa = brazil.shift()
console.log(amapa)
const newSouth = brazil.slice(2, 5)
console.log(newSouth)

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/
const northeast = [
  `Bahia`,
  `Maranhão`,
  `Rio Grande do Norte`,
  `Ceará`,
  `Piauí`,
  `Pernambuco`,
  `Paraíba`,
  `Alagoas`,
  `Sergipe`
]

const newSoutheast = brazil.splice(5, 4)
brazil = brazil.concat(northeast)
console.log(brazil)

const newBrazil = brazil.map((item, index) => ({ id: index, state: item }))
console.log(newBrazil)

const hasMoreThan7Letters = stateName => stateName.length > 7

const messageQuantityOfLetters = brazil.every(hasMoreThan7Letters) ?
  `Sim, todos os estados tem mais de 7 letras.` :
  `Nem todos os estados tem mais de 7 letras.`

/*
  05
  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/
const isCearaIncluded = brazil.includes(`Ceará`)

const cearaIncludedMessage = isCearaIncluded ?
  `Ceará está incluído.` :
  `Ceará não foi incluído =/`

console.log(cearaIncludedMessage)

const newestBrazil = newBrazil.map(({ id, state }) =>
  ({ id: (id + 1), state: `${state} pertence ao Brasil.` }))

console.log(newestBrazil)

const newestBrazilWithOnlyEvenIds = newestBrazil.filter(({ id }) => id % 2 === 0)
console.log(newestBrazilWithOnlyEvenIds)
