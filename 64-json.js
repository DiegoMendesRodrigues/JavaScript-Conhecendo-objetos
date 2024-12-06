/**
 * Curso de JavaScript: Conhecendo objetos
 * JSON
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nJSON",
  "\n" + "-".repeat(35))
/**
 * JSON = JavaScript Object Notation - Notação de Objeto JavaScript
 * 
 * Não é um tipo de dados do JavaScript, é um tipo de notação de dados,
 * utilizado em diversas linguagens de programação
 * Todos os nomes das chaves estão sobre aspas duplas ""
 * O JSON não trabalha com aspas simples
 * Não são permitidas funções
 * Não são permitidos comentários
 * Suporta apenas os tipos primitivos
 * 
 * JSON foi criado para substituir o XML
 * 
 * Informações no formato JSON costumam ser recebidas e devolvidas
 * por APIs, como por exemplo:
 * https://www.alura.com.br/api/formacao-programacao
 * https://viacep.com.br/
 * https://viacep.com.br/ws/05659020/json
 * 
 * Objeto JavaScript
 * --------------------
 * const estudante = {
 *  nome: 'Ana',
 *  idade: 32,
 *  telefones: ['11988776655', '1933445566'],
 *  endereco: {
 *    rua: 'Avenida Brasil',
 *    numero: '234'
 *  }
 * }
 * 
 * JSON
 * --------------------
 * {
 *  "nome": "Ana",
 *  "idade": "32",
 *  "telefones": ["11988776655", "1933445566"],
 *  "endereco": {
 *    "rua": "Avenida Brasil",
 *    "numero": "234"
 *  }
 * }
 * 
 * Apoio:
 * https://nodejs.org/api/modules.html#modules_all_together
 */

/**
 * Importar um arquivo JSON, convertendo para o formato objeto do JS
 */
// Forma nativa do Node.js
const estudante = require('./64-estudante.json')

// Forma mais moderna
//import estudante from './64-estudante.json'

console.log(estudante)
console.log(typeof estudante)
console.log('-')

const chaves = Object.keys(estudante)
console.log(chaves)
console.log(estudante.nome)
console.log(estudante.telefones)
console.log('-')