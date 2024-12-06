/**
 * Curso de JavaScript: Conhecendo objetos
 * Ordenar Estudantes
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\Ondernar Estudantes",
  "\n" + "-".repeat(35))

/**
 * Importar o arquivo JSON que é um array de estudantes
 */
const estudantes = require('./67-estudantes.json')
console.log(estudantes)
console.log('-')

/**
 * Ordenar uma lista através de uma propriedade
 * @param {*} listaEstudantes 
 * @param {*} propriedade 
 * @returns lista ordenada
 */
function ordenar(listaEstudantes, propriedade) {
  return listaEstudantes.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1
    }
    if (a[propriedade] > b[propriedade]) {
      return 1
    }
    return 0
  })
}

const listaOrdenada = ordenar(estudantes, 'nome')
console.log(listaOrdenada)
console.log('-')