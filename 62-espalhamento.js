/**
 * Curso de JavaScript: Conhecendo objetos
 * Espalhamento
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nEspalhamento",
  "\n" + "-".repeat(35))

const estudante = {
  nome: 'Diego Rodrigues',
  cpf: '111.222.333-44',
  idade: 30,
  curso: 'Fundamentos do JavaScript',
  telefones: ['(11) 98888-7766', '(19) 88982-2112'],
  enderecos: [{
    rua: 'Avenida Brasil',
    numero: '50',
    complemento: ''
  }]
}
console.log(estudante)
console.log('-')

function exibirTelefones(listaTelefones) {
  listaTelefones.forEach(telefone => {
    console.log(telefone)
  });
}
exibirTelefones(estudante.telefones)
console.log('-')

// Usando espalhamento
function exibirDoisTelefones(telefone1, telefone2) {
  console.log(`Telefone 1 = ${telefone1}`)
  console.log(`Telefone 2 = ${telefone2}`)
}
exibirDoisTelefones(...estudante.telefones)
console.log('-')

// Usando espalhamento
const dadosEnvio = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0]
}
console.log(dadosEnvio)
console.log('-')

// Usando espalhamento
const fichaGuerreiro = {
  nome: 'Aragon',
  classe: 'Gerreiro'
}
const equipamentoGuerreiro = {
  espada: 'Andúril',
  capa: 'Capa élfica +2'
}
const guerreiro = {...fichaGuerreiro, ...equipamentoGuerreiro}
console.log(guerreiro)
console.log('-')

/**
 * Caso a sintaxe de espalhamento seja usada em objetos que tenham
 * chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever 
 * o valor destas propriedades à medida que encontra novos valores com 
 * o mesmo nome de chave.
 */
const mago = {
  nome: 'Galdalf',
  classe: 'mago'
}
const guerreiroSupremo = {
  nome: 'Aragon',
  classe: 'guerreiro'
}
const elfo = {
  nome: 'Legolas',
  classe: 'elfo'
}
const personagens = {...mago, ...guerreiroSupremo, ...elfo}
console.log(personagens)
console.log('-')