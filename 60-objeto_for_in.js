/**
 * Curso de JavaScript: Conhecendo objetos
 * For...In
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nFor...In",
  "\n" + "-".repeat(35))

// Objeto
const estudante = {
  nome: 'Diego Rodrigues',
  cpf: '111.222.333-44',
  idade: 30,
  matricula: 64514,
  curso: 'Fundamentos do JavaScript',
  isBolsista: true,
  enderecos: [{
    rua: 'Avenida Brasil',
    numero: '50',
    complemento: ''
  },
  {
    rua: 'Rua Ipiranga',
    numero: '284',
    complemento: 'Apartamento 25'
  }]
}
console.log(estudante)
console.log('-')

for (let chave in estudante) {
  const tipo = typeof estudante[chave]
  if (tipo !== 'object' && tipo !== 'function') {
    const texto = `${chave} = ${estudante[chave]}`
    console.log(texto)
  } else if (tipo == 'object') {
    for (let chave2 in estudante[chave]) {
      console.log(estudante[chave][chave2])
    }
  }
}
console.log('-')