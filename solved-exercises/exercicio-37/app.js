/*
  01
  - Descomente a let abaixo, descubra o que o código está tentando fazer e 
    faça-o funcionar.
*/

class Animal {
  constructor(name) {
    this.name = name
  }
}

class Rabbit extends Animal {
  created = new Date()
}

let rabbit = new Rabbit('White Rabbit')
// console.log(rabbit)

/*
  02
  - Descomente o código abaixo e implemente o que está faltando para que ele 
    funcione.
*/

class Counter {

  #value = 0

  get value() {
    return this.#value
  }

  set newValue(newValue) {
    this.#value = newValue
  }

  increment() {
    return ++this.#value
  }
}

const counter = new Counter()

// console.log(counter.value)
// counter.increment()
// console.log(counter.value)
// counter.newValue = 91
// console.log(counter.value)


/*
  03
  - A partir do array abaixo, gere um novo array com apenas os valores truthy;
  - Utilize um construtor para resolver este exercício;
  - Não invoque o construtor.
*/

const values = [
  0,
  {},
  '',
  [],
  NaN,
  () => { }
]

const truthyValues = values.filter(Boolean)
// console.log(truthyValues)

/*
    04
  - O código abaixo deveria exibir no console, à cada segundo, uma string com 
    as horas minutos e segundos, no seguinte formato: "h:m:s" onde "h" 
    representa as horas, "m" os minutos e "s" os segundos. Exemplo: "22:01:25";
  - Descomente o código e conserte os erros que estão impedindo que ele 
    funcione.
*/

const getTimeUnits = () => {

  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return [hours, minutes, seconds]
}

const formatTimeUnits = units => units
  .map(unit => unit < 10 ? unit = `0${unit}` : unit)

const getFormattedTime = template => {

  const timeUnits = getTimeUnits()

  const FormattedTime = formatTimeUnits(timeUnits)

  return template
    .split(':')
    .map((_, index) => FormattedTime[index])
    .join(':')
}

class Clock {
  constructor({ template }) {
    this.template = template
  }

  render() {
    const formattedTime = getFormattedTime(this.template)
    console.log(formattedTime)
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options)

    const { precision = 1000 } = options
    this.oneSecond = precision
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.oneSecond)
  }
}

const clock = new ExtendedClock({ template: 'h:m:s', precision: 1000 })

// clock.start()


/*
  05
  - No index.html há um elemento "textarea" e um parágrafo. A cada vez que um 
    caractere for inserido no textarea, exiba no parágrafo a quantidade de 
    caracteres que o textarea contém.
*/

const textArea = document.querySelector(`[data-js="textarea"]`)
const paragraph = document.querySelector(`[data-js="paragraph"]`)

const displayCharactersCounter = event => {

  const amountOfCharacters = event.target.value.length
  const lengthOfTextArea = textArea.getAttribute('maxlength')

  paragraph.textContent = `${amountOfCharacters}/${lengthOfTextArea}`
}

textArea.addEventListener('input', displayCharactersCounter)

/*
  06
  - Já implementamos os métodos forEach, some, map e filter, do zero;
  - Neste exercício, seu desafio será criar, do zero, o método reduce;
  - Implemente uma função "reduce" que possui a mesma funcionalidade do método 
    reduce original;
  - Você não poderá utilizar o método reduce original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - reduce([1, 2, 3], (acc, item) => acc + item, 0) // 6;
    - reduce([2, 3, 4], (acc, item) => acc + item, 0) // 9;
    - reduce(
        [1, 2],
        (acc, item) => {
          acc['number-' + item] = item
          return acc
        },
        {}
      ) // {"number-1": 1, "number-2": 2};
    - reduce([1, 2], (acc, item, index) => acc + index, 0) // 1;
    - reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) // 3;
  - Utilize os casos de uso acima para testar sua função;
  - Se você não se lembra como o método reduce funciona, deixarei abaixo do 
    vídeo de correção dos exercícios um link para a aula de introdução ao 
    reduce e um link para a documentação do método no MDN.
*/

