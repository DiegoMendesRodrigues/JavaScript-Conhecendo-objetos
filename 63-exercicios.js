/**
 * Curso de JavaScript: Conhecendo objetos
 * Exercícios
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
  "\nExercícios",
  "\n" + "-".repeat(35))

/**
 * Crie um objeto chamado pessoa que represente informações sobre uma
 * pessoa. O objeto deve ter as seguintes propriedades: nome e notas. 
 * Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este
 * método deve calcular a média das notas da pessoa.
 * 
 * Adicione um método chamado classificarDesempenho ao objeto pessoa. 
 * Este método deve retornar uma categoria de desempenho com base na 
 * média calculada. Utilize as seguintes categorias:
 *     Desempenho excelente: média >= 9
 *     Bom desempenho: 7.5 <= média entre 7.6 e 8.9
 *     Desempenho regular: 6 <= média entre 6 e 7.5
 *     Desempenho insuficiente: média < 6
 * 
 * Chame o método calcularMediaNotas para calcular a média das notas 
 * da pessoa e imprima no console a média calculada.
 * Chame o método classificarDesempenho e imprima no console a 
 * categoria de desempenho da pessoa.
 */
const pessoa = {
  nome: 'Julia',
  notas: [8.1, 7.5, 6.7],
  calcularMediaNotas: function () {
    const somaNotas = this.notas.reduce(
      (acumulador, nota) => acumulador + nota,
      0
    )
    return Number((somaNotas / this.notas.length).toFixed(2))
  },
  classificarDesempenho: function () {
    const media = this.calcularMediaNotas()
    if (media >= 9) {
      return 'Desempenho excelente'
    } else if (media < 9 && media > 7.5) {
      return 'Bom desempenho'
    } else if (media <= 7.5 && media >= 6) {
      return 'Desempenho regular'
    }
    return 'Desempenho insuficiente'
  }
}
console.log(pessoa)
console.log(pessoa.calcularMediaNotas())
console.log(pessoa.classificarDesempenho())
console.log('.')

pessoa.notas = [9, 9.2, 9.6]
console.log(pessoa.calcularMediaNotas())
console.log(pessoa.classificarDesempenho())
console.log('.')

pessoa.notas = [5.2, 4.7, 6.1]
console.log(pessoa.calcularMediaNotas())
console.log(pessoa.classificarDesempenho())
console.log('-')

/**
 * Crie um objeto chamado carro que represente as informações de um 
 * veículo. O objeto deve ter as seguintes propriedades:
 *     marca (string): marca do carro.
 *     modelo (string): modelo do carro.
 *     ano (number): ano de fabricação do carro.
 *     cor (string): cor do carro.
 * 
 * Utilize o loop for...in para percorrer todas as propriedades do 
 * objeto carro e imprima no console o nome da propriedade e o 
 * seu valor.
 * 
 * Adicione mais propriedades ao objeto carro para representar 
 * características adicionais do veículo.
 * 
 * Utilize novamente o loop for...in para percorrer todas as 
 * propriedades atualizadas do objeto carro e imprima no console o nome 
 * da propriedade e o seu valor.
 */
const carro = {
  marca: 'Hyundai',
  modelo: 'HB20',
  ano: 2020,
  cor: 'Preto'
}

function imprimirPropriedades(lista) {
  for (let chave in lista) {
    console.log(`${chave} = ${carro[chave]}`)
  }
}

imprimirPropriedades(carro)
console.log('.')

carro.portas = 4
carro.combustivel = 'Flex'

imprimirPropriedades(carro)
console.log('-')

/**
 * Crie um arquivo chamado metodosObjeto.js para realizar este
 * exercício.
 * 
 * Utilize o objeto carro do exercício 2 com as propriedades iniciais 
 * (marca, modelo, ano, cor) e adicione:
 *     ligado: uma propriedade do tipo booleana que indica se o carro
 *             está ligado ou não.
 *     ligar: um método que imprime no console uma mensagem indicando 
 *            que o carro está ligado.
 *     desligar: um método que imprime no console uma mensagem
 *               indicando que o carro está desligado. 
 *     Observação: se o carro já está ligado (ligado = true), não 
 *                 pode ser ligado novamente e vice-versa.
 *     obterDetalhes: um método que retorna uma string contendo todos
 *                    os detalhes do carro (marca, modelo, ano, cor,
 *                    estado de ligado/desligado).
 * 
 * Em seguida, faça o seguinte:
 * Chame os métodos ligar e desligar do objeto carro e imprima no
 * console as mensagens resultantes.
 * Chame o método obterDetalhes e imprima no console a string retornada.
 */
const objCarro = {
  marca: 'Hyundai',
  modelo: 'HB20',
  ano: 2020,
  cor: 'Preto',
  ligado: false,
  ligar: function () {
    if (this.ligado) {
      console.log('O carro já estava ligado, não pode ser ligado outra vez')
    } else {
      this.ligado = true
      console.log('Carro ligado')
    }
  },
  desligar: function () {
    if (!this.ligado) {
      console.log('O carro já estava desligado, não pode ser desligado outra vez')
    } else {
      this.ligado = false
      console.log('Carro desligado')
    }
  }, obterDetalhes: function () {
    let detalhes = `Marca = ${this.marca}\n`
    detalhes += `Modelo = ${this.modelo}\n`
    detalhes += `Ano = ${this.ano}\n`
    detalhes += `Cor = ${this.cor}\n`
    detalhes += `Ligado = ${this.ligado ? 'Sim' : 'Não'}`
    console.log(detalhes)
  }
}

objCarro.desligar()
objCarro.obterDetalhes()
console.log('.')
objCarro.ligar()
objCarro.obterDetalhes()
console.log('-')

/**
 * No objeto carro, adicione uma nova propriedade chamada placa 
 * representando a placa do veículo. Defina a propriedade placa como 
 * não enumerável, para que ela não seja listada ao percorrer as 
 * propriedades do objeto.
 * 
 * Utilize um loop for...in para percorrer as propriedades do objeto 
 * carro e imprima no console apenas as propriedades enumeráveis.
 * 
 * Utilize o método Object.keys() para obter um array contendo apenas 
 * as chaves enumeráveis do objeto carro e imprima no console esse 
 * array.
 * 
 * Tente acessar a propriedade placa diretamente usando carro.placa e 
 * imprima no console o resultado obtido.
 */
Object.defineProperty(objCarro, 'placa', {
  value: 'QTP5F71',
  enumerable: false
})

for (let chave in objCarro) {
  console.log(`${chave} = ${carro[chave]}`)
}
console.log('.')

console.log(Object.keys(objCarro))
console.log('.')

console.log(objCarro.placa)
console.log('-')

/** 
 * Crie um novo objeto chamado carroNovo para representar as 
 * informações de um novo carro. O objeto deve ter as seguintes 
 * propriedades:
 *     marca (string): marca do novo carro.
 *     modelo (string): modelo do novo carro.
 *     ano (number): ano de fabricação do novo carro.
 *     cor (string): cor do novo carro.
 * 
 * Utilize o operador de espalhamento (...) para criar um novo objeto 
 * chamado carroComNovosDetalhes que herde todas as propriedades do 
 * objeto carro e adicione as propriedades do objeto carroNovo.
 * 
 * Imprima no console o objeto carroComNovosDetalhes para verificar as 
 * informações do carro com os novos detalhes.
 * 
 * Modifique o valor de uma propriedade no objeto carroComNovosDetalhes 
 * e imprima novamente o objeto no console para confirmar as alterações.
 */
const carroNovo = {
  marca: 'Hyundai',
  modelo: 'HB20',
  ano: 2020,
  cor: 'Preto'
}

const carroComNovosDetalhes = { ...carroNovo }
console.log(carroComNovosDetalhes)

carroComNovosDetalhes.ano = 2022
console.log(carroComNovosDetalhes)
console.log('-')