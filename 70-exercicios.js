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
 * Crie um array de objetos JavaScript representando informações de 
 * livros. Cada objeto deve conter pelo menos as seguintes propriedades:
 *     id (number): identificador do livro.
 *     titulo (string): título do livro.
 *     autor (string): nome do autor.
 *     anoPublicacao (number): ano de publicação do livro.
 * 
 * Exemplo
 * const biblioteca = [
 *     { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien",
 *       anoPublicacao: 1954 },
 *     { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes",
 *       anoPublicacao: 1605 },
 *     { id: 3, titulo: "1984", autor: "George Orwell", 
 *      anoPublicacao: 1949 }
 * ]
 * 
 * Crie uma função chamada encontrarLivroPorId que receba o id 
 * de um livro como parâmetro e retorne o objeto do livro 
 * correspondente. Se nenhum livro for encontrado, a função deve 
 * retornar null.
 * 
 * Utilize a função para encontrar um livro com um id existente e 
 * imprima no console as informações do livro encontrado. Em seguida, 
 * utilize a função para encontrar um livro com um id inexistente e 
 * imprima no console uma mensagem indicando que o livro não foi 
 * encontrado.
 */
const biblioteca = [
  {
    id: 1, titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954
  },
  {
    id: 2,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoPublicacao: 1605
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949
  }
]

// Função para encontrar um livro pelo seu ID
function encontrarLivroPorId(lista, id) {
  return lista.find(livro => livro.id === id) || null;
}
console.log(encontrarLivroPorId(biblioteca, 2))
console.log(encontrarLivroPorId(biblioteca, 99))
console.log('-')

/**
 * Crie um array de objetos JavaScript representando informações de 
 * filmes. Cada objeto deve conter pelo menos as seguintes propriedades:
 *     id (number): identificador do filme.
 *     titulo (string): título do filme.
 *     diretor (string): nome do diretor.
 *     anoLancamento (number): ano de lançamento do filme.
 * 
 * Exemplo
 * const catalogoFilmes = [
 *     { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", 
 *       anoLancamento: 1999 },
 *     { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", 
 *       anoLancamento: 1993 },
 *     { id: 3, titulo: "Inception", diretor: "Christopher Nolan", 
 *       anoLancamento: 2010 }
 * ]
 * 
 * Crie uma função chamada filtrarFilmesPorAno que receba um ano como 
 * parâmetro e retorne um novo array contendo apenas os filmes lançados 
 * nesse ano.
 * 
 * Utilize a função para filtrar os filmes lançados em um ano 
 * específico e imprima no console o array resultante. Em seguida, 
 * refaça a operação com outro ano.
 */
const catalogoFilmes = [
  {
    id: 1,
    titulo: "Matrix",
    diretor: "Lana Wachowski",
    anoLancamento: 1999
  },
  {
    id: 2,
    titulo: "Jurassic Park",
    diretor: "Steven Spielberg",
    anoLancamento: 1993
  },
  {
    id: 3,
    titulo: "Inception",
    diretor: "Christopher Nolan",
    anoLancamento: 2010
  }
]

function filtrarFilmesPorAno(lista, ano) {
  return lista.filter((filme) => filme.anoLancamento === ano)
}
const filmes2010 = filtrarFilmesPorAno(catalogoFilmes, 2010)
const filmes2024 = filtrarFilmesPorAno(catalogoFilmes, 2024)
const filmes1999 = filtrarFilmesPorAno(catalogoFilmes, 1999)
console.log(filmes2010)
console.log(filmes2024)
console.log(filmes1999)
console.log('-')

/**
 * Crie um array de objetos JavaScript representando informações 
 * fictícias de produtos. Cada objeto deve conter pelo menos as 
 * seguintes propriedades:
 *     id (number): identificador do produto.
 *     nome (string): nome do produto.
 *     preco (number): preço do produto.
 * 
 * Exemplo
 * const listaProdutos = [
 *     { id: 1, nome: "Camiseta", preco: 25.99 },
 *     { id: 2, nome: "Calça Jeans", preco: 49.99 },
 *     { id: 3, nome: "Tênis", preco: 79.99 },
 *     { id: 4, nome: "Boné", preco: 15.99 }
 * ]
 * 
 * Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um 
 * valor máximo (maxPreco) como parâmetro e retorna um novo array 
 * contendo apenas os produtos cujo preço é menor ou igual ao valor 
 * máximo, ordenados em ordem crescente de preço.
 * 
 * Utilize a função para filtrar e ordenar os produtos com um valor 
 * máximo específico e imprima no console o array resultante.
 */
const listaProdutos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça Jeans", preco: 49.99 },
  { id: 3, nome: "Tênis", preco: 79.99 },
  { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(lista, maxPreco) {
  return lista.filter((produto) =>
    produto.preco <= maxPreco)
    .sort((a, b) => a.preco - b.preco)
}

console.log('Produtos com valores até R$ 30,00:')
console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 30))

console.log('Produtos com valores até R$ 20,00:')
console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 20))

console.log('Produtos com valores até R$ 100,00:')
console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 100))
console.log('-')

/**
 * Crie um array de objetos JavaScript representando informações de 
 * animais. Cada objeto deve conter pelo menos as seguintes 
 * propriedades:
 *     id (number): identificador do animal.
 *     nome (string): nome do animal.
 *     especie (string): espécie do animal.
 *     idade (number): idade do animal.
 * 
 * Exemplo
 * const animais = [
 *     { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
 *     { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
 *     { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
 * ]
 * 
 * Crie uma função chamada ordenarAnimais que receba como parâmetro uma 
 * função de comparação para realizar a ordenação do array.
 * 
 * Exemplo
 * function ordenarAnimais(comparacao) {
 *     return animais.sort(comparacao);
 * }
 * 
 * Você pode criar funções para fazer a ordenação crescente ou 
 * decrescente:
 * 
 * function compararIdadeCrescente(a, b) {
 *     // implementação
 * }
 * 
 * function compararIdadeDecrescente(a, b) {
 *     // implementação
 * }
 */
const animais = [
  { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
  { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
  { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

// Função para ordenar animais com base na função de comparação fornecida
function ordenarAnimais(comparacao) {
  return animais.sort(comparacao);
}

// Função de comparação para ordenar por idade de forma crescente
function compararIdadeCrescente(a, b) {
  return a.idade - b.idade;
}

// Função de comparação para ordenar por idade de forma decrescente
function compararIdadeDecrescente(a, b) {
  return b.idade - a.idade;
}

// Ordena os animais por idade de forma crescente e imprime no console
const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeCrescente);
console.log("Animais ordenados por idade (Crescente):");
console.log(animaisOrdenadosCrescente);
console.log('.')

// Ordena os animais por idade de forma decrescente e imprime no console
const animaisOrdenadosDecrescente = ordenarAnimais(compararIdadeDecrescente)
console.log("Animais ordenados por idade (Decrescente):");
console.log(animaisOrdenadosDecrescente)
console.log('-')

/**
 * Crie um array de objetos JavaScript representando informações 
 * fictícias de departamentos. Cada objeto deve conter pelo menos as 
 * seguintes propriedades:
 *     id (number): identificador do departamento.
 *     nome (string): nome do departamento.
 *     funcionarios (array): array de objetos representando 
 *                           funcionários do departamento.
 * 
 * Exemplo
 * const departamentos = [
 *     {
 *         id: 1,
 *         nome: "Vendas",
 *         funcionarios: [
 *             { id: 101, nome: "Ana", cargo: "Vendedor" },
 *             { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
 *         ]
 *     },
 *     {
 *         id: 2,
 *         nome: "TI",
 *         funcionarios: [
 *             { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
 *             { id: 202, nome: "João", cargo: "Analista de sistemas" }
 *         ]
 *     }
 * ]
 * 
 * Crie uma função chamada encontrarFuncionarioPorId que recebe o 
 * id de um funcionário e retorna o objeto do funcionário 
 * correspondente em qualquer departamento.
 * 
 * Utilize a função para encontrar um funcionário com um id existente e 
 * imprima no console as informações do funcionário encontrado. Em 
 * seguida, utilize a função para encontrar um funcionário com um id 
 * inexistente e imprima no console uma mensagem indicando que o 
 * funcionário não foi encontrado.
 */
const departamentos = [
  {
    id: 1,
    nome: "Vendas",
    funcionarios: [
      { id: 101, nome: "Ana", cargo: "Vendedor" },
      { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
    ]
  },
  {
    id: 2,
    nome: "TI",
    funcionarios: [
      { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
      { id: 202, nome: "João", cargo: "Analista de sistemas" }
    ]
  }
]

function encontrarFuncionarioPorId(identificador) {
  for (const departamento of departamentos) {
    const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === identificador)

    if (funcionarioEncontrado) {
      return funcionarioEncontrado
    }
  }
  return null
}

console.log(`Funcionário (ID=201) = ${encontrarFuncionarioPorId(201).nome}`)
console.log(`Funcionário (ID=102) = ${encontrarFuncionarioPorId(102).nome}`)
console.log(`Funcionário (ID=999) = ${encontrarFuncionarioPorId(999)}`)
console.log('-')