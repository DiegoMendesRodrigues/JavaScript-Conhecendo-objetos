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
 * Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto 
 * livro que represente as informações de um livro. O objeto deve 
 * conter as seguintes propriedades:
 *  titulo (string): título do livro
 *  autor (string): nome do autor do livro
 *  anoPublicacao (number): ano de publicação do livro
 *  genero (string): gênero do livro
 * 
 * No final do arquivo livro.js, instancie o objeto livro com dados 
 * de algum livro que você goste e imprima os detalhes do livro no 
 * console.
 */
const livro = {
  titulo: 'Fundamentos do JavaScript',
  autor: 'Julia Neau',
  anoPublicacao: 2024,
  genero: 'Informática e Tecnologia, Programação'
}
console.log(livro)

livro.titulo = 'JavaScript: O Guia Definitivo'
livro.autor = 'David Flanagan'
livro.anoPublicacao = 2012
livro.genero = 'Informática e Tecnologia, Computação, Programação'
console.log(livro)
console.log('-')

/**
 * Crie uma nova variável chamada anoAtual e atribua a ela o ano 
 * atual (utilize new Date().getFullYear()). Crie um objeto chamado 
 * livro com as seguintes propriedades: título, autor, ano de 
 * publicação e gênero.
 * 
 * Adicione a propriedade idadePublicacao diretamente ao objeto 
 * livro, representando há quantos anos o livro foi publicado. 
 * Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
 * 
 * Crie uma string chamada mostrarDetalhes contendo os detalhes do 
 * livro, incluindo a informação da idade de publicação.
 * 
 * Exiba a string mostrarDetalhes no console para verificar se as 
 * informações, incluindo a idade de publicação, são exibidas 
 * corretamente.
 */
const anoAtual = new Date().getFullYear()
const idadePublicacaoLivro = anoAtual - livro.anoPublicacao
livro.idadePublicacao = idadePublicacaoLivro
console.log(livro)

const mostrarDetalhes = `${livro.titulo}\nAutor: ${livro.autor}\nAno de publicação: ${livro.anoPublicacao}\nIdade de publicacao: ${livro.idadePublicacao}`
console.log(mostrarDetalhes)
console.log('-')

/**
 * Crie um objeto livro com as seguintes propriedades: título, 
 * autor, ano de publicação, gênero, idade de publicação. Depois, 
 * utilize colchetes para acessar diretamente as propriedades do 
 * objeto livro e imprimir no console os detalhes do livro.
 */
console.log(`Titulo = ${livro['titulo']}`)
console.log(`Autor = ${livro['autor']}`)
console.log(`Ano de publicação = ${livro['anoPublicacao']}`)
console.log(`Idade de publicação = ${livro['idadePublicacao']}`)
console.log(`Gênero = ${livro['genero']}`)
console.log('-')

/**
 * 4 - Crie um objeto livro com as seguintes propriedades: título, 
 * autor, ano de publicação, gênero, idade de publicação. Depois, 
 * adicione uma nova propriedade chamada avaliacao. Esta propriedade 
 * deve ser inicializada como null.
 * 
 * No final do arquivo livro.js, adicione uma avaliação ao objeto.
 * 
 * Caso a propriedade avaliacao seja null, atribua a avaliação ao 
 * objeto livro.
 * 
 * Caso contrário, imprima uma mensagem indicando que o livro já 
 * possui uma avaliação.
 */
livro.avaliacao = null
if (livro.avaliacao === null) {
  livro.avaliacao = 'Positiva: Livro muito direto ao ponto'
} else {
  console.log('O livro já possui uma avaliação')
}
console.log(livro)
console.log('-')

/**
 * Crie um objeto livro com as seguintes propriedades: título, 
 * autor, ano de publicação, gênero, idade de publicação. Depois 
 * altere o gênero do livro para "Aventura".
 */
livro.genero = 'Aventura'
console.log(livro)
console.log('-')

/**
 * Crie um objeto livro com as seguintes propriedades: título, 
 * autor, ano de publicação, gênero, idade de publicação. 
 * Em seguida, exclua a propriedade avaliacao do objeto livro. 
 * Depois, exiba os detalhes do livro no console, verificando se as 
 * informações atualizadas, sem a avaliação, são exibidas 
 * corretamente.
 */
delete livro.avaliacao
console.log(livro)
console.log('-')