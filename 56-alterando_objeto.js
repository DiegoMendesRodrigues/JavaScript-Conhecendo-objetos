/**
 * Curso de JavaScript: Conhecendo objetos
 * Alterando Objetos
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nAlterando Objetos",
  "\n" + "-".repeat(35))

// Objeto
const estudante = {
  nome: 'Diego Rodrigues',
  cpf: '111.222.333-44',
  idade: 42,
  turma: 'JavaScript'
}
console.log(estudante)
console.log('-')

// Adicionar uma propriedade
estudante.telefone = '(11) 99999-8888'
console.log(estudante)
console.log(estudante.telefone)
console.log('-')

// Alterar uma propriedade
estudante.nome = 'Regina Marcia'
estudante.idade = 35
console.log(estudante)
console.log('-')

// Criar um  objeto vazio e depois colocar as propriedades
const escola = {}
escola.razaoSocial = 'Tech para o futuro'
escola.cpnj = '11.333.444/0001-33'
escola.estudantes = 76
escola.curso = {
  nome: 'JavaScript',
  alunosMatriculados: 15
}
escola.funcionando = true
console.log(escola)
console.log('-')

/**
 * Excluir uma propriedade - delete
 * 
 * Importante! Note que o delete remove do objeto o 
 * valor da propriedade, assim como a chave
 */
delete escola.estudantes
delete escola['cpnj']
console.log(escola)
console.log('-')

/**
 * O valor de retorno do operador delete é um booleano, 
 * ou seja, retorna sempre true ou false para cada operação. 
 * Porém, é importante notar que ele não retorna false se tentarmos
 * remover, por exemplo, uma propriedade que não existe no objeto.
 */
if (delete escola.curso) {
  console.log('O curso foi removido da escols')
} else {
  console.log('O curso não doi removido da escola, ou não existia')
}
console.log(escola)

/**
 * O delete() não retorna false se tentarmos remover uma 
 * propriedade que não existe!
 *  */ 
if (delete escola.curso) {
  console.log('O curso foi removido da escola')
} else {
  console.log('O curso não doi removido da escola, ou não existia')
}