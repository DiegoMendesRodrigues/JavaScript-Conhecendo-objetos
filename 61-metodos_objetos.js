/**
 * Curso de JavaScript: Conhecendo objetos
 * Métodos de Objetos
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nMétodos de Objetos",
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

/**
 * Pesquisar se uma propriedade existe
 * 
 * Object.keys(estudante) devolve um 'array' com as chaves do objeto
 * estudante
 */
const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto)

if (!chavesObjeto.includes('enderecos')) {
  console.error('É necessário que o estudante possua um endereço')
} else {
  console.warn('Endereço do estudante encontrado')
}
console.log('-')

/**
 * Object.values()
 * Retorna um 'array' com os valores das propriedades de um dado
 * objeto, na mesma ordem dos objetos providos através do 
 * loop for...in
 */
const valoresObjeto = Object.values(estudante)
console.log(valoresObjeto)
console.log('-')

/**
 * Object.entries()
 * Retorna uma 'array de arrays' dos próprios pares [key, value]
 * enumeráveis de um dado objeto, na mesma ordem dos objetos 
 * providos através do loop for...in
 */
const elementosObjeto = Object.entries(estudante)
console.log(elementosObjeto)
console.log('.')

for (let [chave, valor] of Object.entries(estudante)) {
  console.log(chave, ' = ', valor)
}
console.log('-')

/**
 * Object.assign()
 * Usado para fusão e cópia de objetos. Este método permite 
 * combinar propriedades de diferentes objetos em um único objeto.
 */
const valorOriginal = { a: 1, b: 2 }
const valorCopiar = { c: 5, d: 4 }
const valorCopiarB = { b: 7, c: 8 }

const valorFusionado = Object.assign({}, valorOriginal, valorCopiar)
console.log(valorFusionado)

// Observar o elemente B nessa fusão
const valorFusionadoB = Object.assign({}, valorOriginal, valorCopiarB)
console.log(valorFusionadoB)
console.log('-')

/**
 * Usando uma função construtora
 * Defina o tipo de objeto escrevendo uma função construtora. Há uma forte convenção, e com boa razão, de se usar uma letra inicial maiúscula.
 * Crie uma instância do objeto com new.
 */
function Carro(marca, modelo, ano) {
  this.marca = marca
  this.modelo = modelo
  this.ano = ano
}

const carroBruna = new Carro('Hyundai', 'HB20', '2020')
console.log(carroBruna)
console.log(carroBruna.modelo)
console.log('-')

/**
 * Definindo getters e setters
 * Um getter é um método que obtém o valor de uma propriedade 
 * específica. 
 * Um setter é um método que define o valor de uma propriedade 
 * específica. 
 */
const valores = {
  a: 7,
  get b() {
    return this.a + 5
  },
  /**
   * @param {number} x
   */
  set c(x) {
    this.a = x / 2
  }
}

console.log(valores)
console.log(valores.b)
valores.c = 50
console.log(valores.a)
console.log('-')

/**
 * Removendo propriedadades do objeto
 */
const pessoa = {
  nome: 'Julia Neau',
  cpf: '123.456.789-99',
  idade: 10
}
console.log(pessoa)

delete pessoa.cpf
delete pessoa.idade
console.log(pessoa)
console.log('-')

/**
 * Comparando objetos
 * Em JavaScript, objetos são um tipo de referência. 
 * Dois objetos distintos nunca são iguais, mesmo que tenham as mesmas
 * propriedades. Apenas comparando o mesmo objeto de referência com ele
 * mesmo produz verdadeiro.
 */
const fruta = { nome: 'Maçã' }
const frutaPera = { nome: 'Pera' }
console.log(fruta == frutaPera)
console.log(fruta === frutaPera)
console.log('.')

// Cópia por referência
const frutaCopiadaReferencia = fruta
console.log(fruta == frutaCopiadaReferencia)
console.log(fruta === frutaCopiadaReferencia)
console.log('-')