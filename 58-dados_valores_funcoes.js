/**
 * Curso de JavaScript: Conhecendo objetos
 * Tipos de Dados e Valores
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nTipos de Dados e Valores",
  "\n" + "-".repeat(35))

// Objeto
const estudante = {
  nome: 'Diego Rodrigues',
  cpf: '111.222.333-44',
  telefones: ['(11) 99999-8888',
    '(11) 3333-2222'],
  matricula: 64514,
  curso: 'Fundamentos do JavaScript',
  materias: ['Conceitos básicos',
    'Variáveis e funções',
    'Orientação a objetos'],
  isBolsista: true,
  dataAniversario: new Date(1982, 8, 7)
}

console.log(estudante)
console.log('-')

// O atributo telefones do objeto é um array
console.log(estudante.telefones)
console.log(estudante.telefones[0])
estudante.telefones[0] = '(19) 98877-1234'
console.log(estudante.telefones)
console.log('-')

// Adicionar um objeto dentro do objeto, sendo o endereço
const enderecoResidencial = {
  rua: 'Avenida Brasil',
  numero: '200A',
  complemento: '',
  bairro: 'Centro',
  cidade: 'Paulínia',
  estado: 'SP'
}
enderecoResidencial.cep = '13142-987'
console.log(enderecoResidencial)
console.log(`${enderecoResidencial.rua}, ${enderecoResidencial.numero}`)

const enderecoComercial = {
  rua: 'Avenida Ipiranga',
  numero: '450',
  complemento: 'Conjunto 200',
  bairro: 'Jardim Planalto',
  cidade: 'Campinas',
  estado: 'SP',
  cep: '17888-222'
}
console.log(enderecoComercial)

estudante.enderecos = [
  enderecoResidencial, enderecoComercial
]

console.log(estudante)
console.log(estudante.enderecos)
console.log(estudante.enderecos[0])
console.log('-')

const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento)
console.log(listaEnderecosComComplemento)
console.log('-')

/**
 * Atribuir um comportamento ao objeto, sendo ele uma função,
 * neste caso, métodos
 */
const aluno = {
  nome: 'Diego Rodrigues',
  cpf: '111.222.333-44',
  curso: 'Fundamentos do JavaScript',
  notas: [8.4, 7.1, 6.6],
  media: 0,
  calcularMedia: function () {
    const somaDasNotas = this.notas.reduce((acumulador, nota) => {
      return acumulador + nota
    }, 0)
    this.media = Number((somaDasNotas / 3).toFixed(2))
  },
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false
  }
}

console.log(aluno)

aluno.calcularMedia()
console.log(aluno)

console.log(aluno.estaAprovado(7.0))

aluno.notas = [6.4, 5.9, 6.6]
aluno.calcularMedia()
console.log(aluno.media)
console.log(aluno.estaAprovado(7.0))
console.log('-')

// Copiando um objeto
const aluno2 = Object.create(aluno)
console.log(aluno2.nome)
console.log('-')