/**
 * Curso de JavaScript: Conhecendo objetos
 * Encontrar Estudantes
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nEncontrar Estudantes",
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
 * Buscar uma informação no array de estudantes
 * @param {*} listaObjJson array com as informações
 * @param {*} chave chave procurada
 * @param {*} valor valor procurado
 * @returns estudante com essa chave e valor, ou undefined
 */
function buscarIformacao(listaObjJson, chave, valor) {
  return listaObjJson.find((estudante) =>
    estudante[chave].includes(valor)
  )
}

let estudanteEscontado = buscarIformacao(estudantes, 'nome', 'Juliet')
console.log(estudanteEscontado)

estudanteEscontado = buscarIformacao(estudantes, 'nome', 'Diego')
console.log(estudanteEscontado)

estudanteEscontado = buscarIformacao(estudantes, 'nome', 'Stephine')
console.log(estudanteEscontado)
console.log('-')

let telefoneEstudante = buscarIformacao(estudantes, 'telefone', '9466883489')
console.log(telefoneEstudante)

telefoneEstudante = buscarIformacao(estudantes, 'telefone', '111111111')
console.log(telefoneEstudante)

telefoneEstudante = buscarIformacao(estudantes, 'telefone', '58996279799')
console.log(telefoneEstudante)
console.log('-')