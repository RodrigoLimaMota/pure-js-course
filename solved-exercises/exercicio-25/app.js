/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const january = months.reduce((acc, month, index) => {
  if (month === `Janeiro`) {
    acc = index
  }
  return acc
}, 0)

console.log(january)

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

const present = new Date()
// console.log(present)

/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

// console.log(present.getFullYear())

/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/
const past = new Date(`Apr 15 2022 04:51:22`)
// console.log(past)
/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/
// console.log(past.getHours())

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/
const future = new Date(`Apr 15 2030 14:51:22`)
// console.log(future)
/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

const diference = future.getTime() - past.getTime()

const secondsDiference = Math.round(diference / 1000)
const minutesDiference = Math.round(secondsDiference / 60)
const hoursDiference = Math.round(minutesDiference / 60)
const daysDiference = Math.round(hoursDiference / 24)

console.log(daysDiference)

/*
  08
  
  Assim como a 1ª aplicação que implementamos no curso (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
