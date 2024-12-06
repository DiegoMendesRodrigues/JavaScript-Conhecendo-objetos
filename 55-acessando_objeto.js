/**
 * Curso de JavaScript: Conhecendo objetos
 * Acessando Objetos
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nAcessando Objetos",
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

/**
 * Notação de ponto funciona quando conhecemos as propriedades 
 * do objeto
 * Como fazer quando não sabemos de incialmente qual utilizar,
 * utilizamos a notação de conchetes
 */
function retornarInformacoesEstudade(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante]
}

console.log(retornarInformacoesEstudade(estudante, 'nome'))
console.log(retornarInformacoesEstudade(estudante, 'cpf'))
console.log(retornarInformacoesEstudade(estudante, 'naoExiste'))
console.log('-')