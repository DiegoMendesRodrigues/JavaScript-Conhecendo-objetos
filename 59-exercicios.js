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
 * Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um 
 * objeto chamado pessoa que represente informações sobre uma pessoa. 
 * Este objeto deve ter as seguintes propriedades:
 *     nome (string): Nome da pessoa.
 *     idade (number): Idade da pessoa.
 *     solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
 *     hobbies (array): Lista de hobbies da pessoa.
 * 
 * Adicione valores a cada propriedade do objeto pessoa. Use valores 
 * fictícios para simular uma pessoa específica.
 * 
 * Crie uma função chamada mostrarInfoPessoa que aceite o objeto 
 * pessoa como parâmetro e imprima todas as informações da pessoa 
 * no console, incluindo o tipo de dado de cada propriedade.
 * 
 * No final do arquivo infoPessoa.js, chame a função 
 * mostrarInfoPessoa passando o objeto pessoa como argumento.
 * 
 * Dica: você pode usar um método de array para retirar os elementos 
 * dos colchetes e exibi-los como texto.
 */
const pessoa = {
  nome: 'Julia',
  idade: 22,
  solteiro: true,
  hobbies: ['Assistir filmes', 'Praticar esportes', 'Ler']
}

function mostrarInfoPessoa(pessoaInformacoes) {
  console.log(`Nome = ${pessoaInformacoes.nome} - ${typeof pessoaInformacoes.nome}`)
  console.log(`Idade = ${pessoaInformacoes.idade} - ${typeof pessoaInformacoes.idade}`)
  console.log(`Solteiro = ${pessoaInformacoes.solteiro} - ${typeof pessoaInformacoes.solteiro}`)
  console.log(`Hobbies = ${pessoaInformacoes.hobbies} - ${typeof pessoaInformacoes.hobbies}`)
}

mostrarInfoPessoa(pessoa)
console.log('-')

/**
 * Adicione ao objeto pessoa uma nova propriedade chamada endereco. 
 * Esta propriedade deve ser um objeto representando o endereço da 
 * pessoa, com as seguintes subpropriedades:
 *     rua (string): nome da rua.
 *     cidade (string): nome da cidade.
 *     estado (string): nome do estado.
 * 
 * Preencha as subpropriedades do objeto endereco com valores fictícios.
 * Modifique a função mostrarInfoPessoa para incluir as informações do 
 * endereço da pessoa ao ser chamada.
 * No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa 
 * para verificar se as informações atualizadas, incluindo o endereço, 
 * são exibidas corretamente no console.
 */
pessoa.endereco = {
  rua: 'Avenida Paulista',
  cidade: 'Guarujá',
  estado: 'São Paulo'
}

function mostrarInfoPessoaEndereco(pessoaInformacoes) {
  console.log(`Nome = ${pessoaInformacoes.nome} - ${typeof pessoaInformacoes.nome}`)
  console.log(`Idade = ${pessoaInformacoes.idade} - ${typeof pessoaInformacoes.idade}`)
  console.log(`Solteiro = ${pessoaInformacoes.solteiro} - ${typeof pessoaInformacoes.solteiro}`)
  console.log(`Hobbies = ${pessoaInformacoes.hobbies} - ${typeof pessoaInformacoes.hobbies}`)
  console.log(`Endereço = ${pessoaInformacoes.endereco} - ${typeof pessoaInformacoes.endereco}`)
  console.log(`Rua = ${pessoaInformacoes.endereco.rua}`)
  console.log(`Cidade = ${pessoaInformacoes.endereco.cidade}`)
  console.log(`Estado = ${pessoaInformacoes.endereco.estado}`)
}

mostrarInfoPessoaEndereco(pessoa)
console.log('-')

/**
 * Crie uma lista de pessoas chamada pessoas que será um array contendo 
 * objetos. Cada objeto deve representar uma pessoa e conter as 
 * seguintes propriedades:
 *     nome (string): nome da pessoa.
 *     idade (number): idade da pessoa.
 *     cidade (string): cidade de residência da pessoa.
 * 
 * Adicione pelo menos três objetos à lista pessoas com informações 
 * fictícias de diferentes pessoas.
 * 
 * a) Crie uma função chamada mostrarListaPessoas que aceita a lista 
 * pessoas como parâmetro e imprima no console as informações de cada 
 * pessoa na lista.
 * 
 * b) Adicione uma nova pessoa à lista pessoas utilizando o método 
 * push. Certifique-se de que a nova pessoa tenha informações distintas 
 * das pessoas já existentes na lista.
 * 
 * c) Chame a função mostrarListaPessoas para verificar se as 
 * informações, incluindo a nova pessoa, são exibidas corretamente no 
 * console.
 * 
 * d) Crie uma função chamada filtrarPorCidade que aceita a lista 
 * pessoas e uma string cidade como parâmetros. A função deve retornar 
 * uma nova lista contendo apenas as pessoas que residem na cidade 
 * fornecida.
 * 
 * Chame a função filtrarPorCidade passando a lista pessoas e uma 
 * cidade fictícia como argumentos e imprima no console o resultado 
 * obtido.
 */
const pessoas = [
  {
    nome: 'Regina',
    idade: 40,
    cidade: 'Paulínia'
  },
  {
    nome: 'Bruna',
    idade: 33,
    cidade: 'Sumaré'
  },
  {
    nome: 'Julia',
    idade: 8,
    cidade: 'Campinas'
  }
]

function mostrarListaPessoas(listaPessoas) {
  listaPessoas.forEach(pessoa => {
    console.log(`Nome = ${pessoa.nome} || Idade = ${pessoa.idade} || Cidade = ${pessoa.cidade}`)
  })
}

console.log(pessoas)
mostrarListaPessoas(pessoas)
console.log('.')

pessoas.push({ nome: 'Diego', idade: 50, cidade: 'João Pessoa' })
mostrarListaPessoas(pessoas)
console.log('.')

function filtrarPorCidade(listaPessoas, cidade) {
  const pessoasNaCidade = []
  listaPessoas.forEach(pessoa => {
    if (pessoa.cidade === cidade) {
      pessoasNaCidade.push(pessoa)
    }
  })
  return pessoasNaCidade
}
console.log(filtrarPorCidade(pessoas, 'Paulínia'))
console.log(filtrarPorCidade(pessoas, 'João Pessoa'))
console.log(filtrarPorCidade(pessoas, 'Ubatuba'))
console.log('-')

/**
 * Crie um objeto chamado calculadora que terá os seguintes métodos:
 *     soma: uma função que aceita dois parâmetros e retorna a soma 
 *           deles.
 *     subtracao: uma função que aceita dois parâmetros e retorna a 
 *                subtração do segundo parâmetro do primeiro.
 *     multiplicacao: uma função que aceita dois parâmetros e retorna 
 *                    o resultado da multiplicação deles.
 *     divisao: uma função que aceita dois parâmetros e retorna o 
 *              resultado da divisão do primeiro pelo segundo. 
 *              Certifique-se de tratar a divisão por zero, retornando
 *              uma mensagem apropriada nesse caso.
 * 
 * a) Chame cada função dentro do objeto calculadora passando valores 
 * como argumentos e imprima no console os resultados obtidos.
 * 
 * b) Adicione um novo método chamado calcularMedia ao objeto 
 * calculadora. Esta função deve aceitar um array de números como 
 * parâmetro e retornar a média aritmética dos valores.
 * 
 * c) Chame a função calcularMedia passando um array de números e 
 * imprima no console o resultado obtido.
 */
const calculadora = {
  soma: function (numero1, numero2) {
    return numero1 + numero2
  },
  subtracao: function (numero1, numero2) {
    return numero1 - numero2
  },
  multiplicacao: function (numero1, numero2) {
    return numero1 * numero2
  },
  divisao: function (numero1, numero2) {
    if (numero2 !== 0) {
      return numero1 * numero2
    } else {
      return 'O dividendo não pode ser zero'
    }
  }
}
console.log(calculadora.soma(10, 5))
console.log(calculadora.subtracao(10, 5))
console.log(calculadora.multiplicacao(10, 5))
console.log(calculadora.divisao(10, 5))
console.log(calculadora.divisao(10, 0))
console.log('.')

calculadora.calcularMedia = function (listaNumeros) {
  const soma = listaNumeros.reduce((acumulador, nota) => {
    return acumulador + nota
  }, 0)
  return Number((soma / listaNumeros.length).toFixed(2))
}
console.log(calculadora.calcularMedia([10, 5]))
console.log(calculadora.calcularMedia([9, 8, 3, 4]))
console.log('-')

/**
 * Crie um objeto chamado contaBancaria com as seguintes propriedades:
 *     titular: uma string representando o titular da conta.
 *     saldo: um número representando o saldo da conta.
 *     depositar: uma função que aceita um valor como parâmetro e
 *                adiciona esse valor ao saldo da conta. Utilize this 
 *                para acessar a propriedade saldo.
 *     sacar: uma função que aceita um valor como parâmetro e subtrai 
 *            esse valor do saldo da conta. Utilize this para acessar a 
 *            propriedade saldo. Certifique-se de verificar se há 
 *            saldo suficiente antes de efetuar o saque.
 * 
 * Crie um objeto chamado cliente que representa um cliente com uma 
 * conta bancária. O objeto deve ter as seguintes propriedades:
 *     nome: uma string representando o nome do cliente.
 *     conta: uma referência à conta bancária associada a esse cliente 
 *            (objeto criado anteriormente).
 * 
 * Crie uma função chamada mostrarSaldo que aceita o objeto cliente 
 * como parâmetro e imprime no console o nome do cliente e o saldo da 
 * sua conta utilizando this para acessar as propriedades do objeto.
 * 
 * Realize operações de depósito e saque na conta bancária do cliente 
 * usando as funções do objeto contaBancaria e, em seguida, chame a 
 * função para exibir as informações atualizadas no console.
 */
const contaBancaria = {
  titular: '',
  saldo: 0,
  depositar: function (valor) {
    this.saldo += valor
  },
  sacar: function (valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor
    } else {
      console.log(`Saldo insuficiente para sacar R$ ${valor}`)
    }
  }
}
contaBancaria.titular = 'Julia Neau'
contaBancaria.saldo = 1000

const cliente = {
  nome: 'Natalia Neau',
  conta: contaBancaria,
  mostrarSaldo: function () {
    console.log(`O saldo do cliente ${this.nome} é R$ ${this.conta.saldo}`)
  }
}

console.log(cliente)
cliente.mostrarSaldo()

cliente.conta.depositar(500)
cliente.conta.sacar(780)
cliente.mostrarSaldo()

cliente.conta.sacar(5000)
console.log('-')