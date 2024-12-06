/**
 * Curso de JavaScript: Conhecendo objetos
 * Estrutura de Objetos
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nEstrutura de Objetos",
  "\n" + "-".repeat(35))

/**
 * Objeto
 * Funciona bem quando queremos armazenar grupos com
 * vários tipos de informações
 */
const estudante = {
  nome: 'Diego Rodrigues',
  cpf: '111.222.333-44',
  idade: 42,
  turma: 'JavaScript'
}
console.log(estudante)
console.log('-')

/**
 * 'Notação de ponto' para acessar o objeto, e dentro dele,
 * cada uma das propriedades - chave e valor
 * objeto.chave podemos manipular o valor
 */
console.log(estudante.nome)
console.log(estudante.cpf)
console.log(estudante.idade)
console.log(estudante.turma)
console.log('-')
console.log(`O nome do estudante é ${estudante.nome}`)
console.log(`Os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`)
console.log(`Maior de idade = ${estudante.idade >= 18 ? 'Sim' : 'Não'}`)