/**
 * Curso de JavaScript: Conhecendo objetos
 * Filtrar Estudantes
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nFiltrar Estudantes",
  "\n" + "-".repeat(35))

/**
 * Importar o arquivo JSON que é um array de informações
 * [
 *  {
 *    ...
 *  }
 * ]
 */
const estudantes = require('./67-estudantes.json')
console.log(typeof estudantes)
console.log(estudantes)
console.log('-')

/**
 * Iremos encontrar os estudantes que não possuem a propriedade
 * CEP no seu endereço
 * 
 * Object.prototype.hasOwnProperty()
 * ----------------------------------
 * O método hasOwnProperty() retorna um booleano indicando se o 
 * objeto possui a propriedade especificada como uma propriedade 
 * definida no próprio objeto em questão (ao contrário de uma 
 * propriedade herdada).
 * O método hasOwnProperty retorna true mesmo se o valor da 
 * propridade em questão é null ou undefined.
 * Vale observar que o loop for...in percorre somente itens 
 * enumeráveis. Entretanto, o método hasOwnProperty também funciona 
 * com propriedades não enumeráveis.
 */

/**
 * Filtrar as informações do array de estudantes
 * @param {*} listaEstudantes array com as informações
 * @param {*} propriedade propriedade utilizada no filtro
 * @returns estudantes com essa chave e valor, ou undefined
 */
function filtrarPorPropriedade(listaEstudantes, propriedade) {
  return listaEstudantes.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propriedade)
  })
}

const listaEnderecosInclompletos = filtrarPorPropriedade(estudantes, 'cep')
console.log(listaEnderecosInclompletos)
console.log('-')