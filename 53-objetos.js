/**
 * Curso de JavaScript: Conhecendo objetos
 * Objetos
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nObjetos",
  "\n" + "-".repeat(35))

/**
 * Array
 * Funciona bem quando queremos armazenar grupos com 
 * 1 tipo informação
  */
const listaCPFs = ['111.222.333-44', '222.333.444-55']
console.log(listaCPFs)
console.log('-')

/**
 * Objeto
 * Funciona bem quando queremos armazenar grupos com
 * vários tipos de informações
 */
const objPessoa = {
  nome: 'Diego Rodrigues',
  cpf: '111.222.333-44',
  idade: 42,
  turma: 'JavaScript'
}
console.log(objPessoa)
console.log('-')