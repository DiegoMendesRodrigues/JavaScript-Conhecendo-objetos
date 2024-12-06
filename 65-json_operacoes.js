/**
 * Curso de JavaScript: Conhecendo objetos
 * JSON - Operações
 * Apoio:
 * https://www.alura.com.br/artigos/implementar-funcao-clonagem-profunda-imutabilidade-js
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nJSON - Operações",
  "\n" + "-".repeat(35))

/**
 * Converter arquivos JSON
 */
const estudante = require('./64-estudante.json')

// String que possa ser enviada em uma requisição
const stringEstudante = JSON.stringify(estudante)
console.log(stringEstudante)
console.log(typeof stringEstudante)
console.log('-')

// Exibir o nome do estudante, usando o objeto
console.log(estudante.nome)

/**
 * Exibir o nome do estudante, usando a string convertida
 * stringEstudante é uma string
 * Não irá funcionar -> retorna undefined, ao invés da dar erro
 */
console.log(stringEstudante.nome)
console.log('-')

/**
 * Converter a string para um objeto JSON
 */
const objetoEstudante = JSON.parse(stringEstudante)
console.log(objetoEstudante)
console.log(typeof objetoEstudante)
console.log(objetoEstudante.nome)
console.log(objetoEstudante.email)
console.log('-')

/**
 * Copiar objetos
 * 
 * Ao criar uma cópia por referência, não foi realizada uma cópia,
 * apenas estamos apontando novamente para o objeto
 * const carro = { ... }
 * const novoCarro = carro
 * Ao alterarmos novoCarro, estamos alterando também carro
 * 
 * Uma abordagem comum para realizar cópias de objetos é através 
 * da técnica conhecida como "clonagem profunda". 
 * Essa técnica assegura que a cópia seja independente do objeto 
 * original, evitando referências compartilhadas e garantindo a 
 * integridade dos dados.
 * const objetoOriginal = { chave: 'valor' }
 * const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal))
 * copiaProfunda.chave = 'novoValor'
 * console.log(objetoOriginal.chave); // Saída: valor
 */
const carro = {
  modelo: 'HR-V',
  proprietario: 'Claudio'
}
const novoCarro = carro
novoCarro.modelo = 'Gol'
console.log(carro)
console.log(novoCarro)
console.log('-')

carro.modelo = 'HRV'
const carroDiego = JSON.parse(JSON.stringify(carro))
carroDiego.modelo = 'Palio'
console.log(carro)
console.log(carroDiego)
carroDiego.proprietario = 'Diego'
console.log(carroDiego)
console.log('-')

/**
 * Exemplo de funções para a clonagem profunda de objetos
 */
const typeCheck = (type) => {
  const typeString = Reflect.apply(Object.prototype.toString, type, [])
  return typeString.slice(
    typeString.indexOf(' ') + 1,
    typeString.indexOf(']')
  ).toLowerCase()
}
console.log(typeCheck([]))
console.log(typeCheck(null))
console.log(typeCheck({}))
console.log(typeCheck('teste'))
console.log(typeCheck(123))
console.log('.')

const deepClone = (element) => {
  switch (typeCheck(element)) {
    case 'array':
      return cloneArray(element)
    case 'object':
      return cloneObject(element)
    default:
      return element
  }
}

const cloneArray = (element) => {
  if (typeCheck(element) !== 'array') return element
  return element.map(deepClone)
}

const cloneObject = (element) => {
  if (typeCheck(element) !== 'object') return element
  return Object.fromEntries(
    Object.keys(element).map((key) => [key, deepClone(element[key])])
  )
}
const usuario = {
  nome: 'caique',
  endereco:
  {
    pais: 'Brazil',
    estado: 'SP'
  }
}
const usuarioClonado = usuario  // Referência
console.log(usuario.endereco === usuarioClonado.endereco) // Referência: true
console.log(usuario.endereco === cloneObject(usuario).endereco) // Clonagem: false
console.log('-')

const pessoa = {
  nome: 'caique',
  idade: 27,
  hobbies: [
    'movie',
    'music',
    'books'
  ]
}
console.log(deepClone(pessoa).hobbies === pessoa.hobbies) // false
console.log(deepClone(pessoa) === pessoa) // false
console.log('-')