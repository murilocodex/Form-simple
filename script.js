// Variaveis para pegar elementos na pagina
// e também criar o elemento <p>
const p = document.createElement('p')
const body = document.querySelector('body')
const button = document.querySelector('button')
const textarea = document.querySelector('textarea')

// Criar uma função para pegar o valor do textarea (o texto do usuário)
// transportar este texto através da criação do elemento <p>
// adicionado e.preventDefault() afim de evitar reload na página

function acao(event) {
  button.addEventListener("click", function(e) {
    e.preventDefault()
    p.innerHTML = `<br><br><h3>Mensagem digitada: ${textarea.value}</h3>`
    body.appendChild(p)
  })
}
 