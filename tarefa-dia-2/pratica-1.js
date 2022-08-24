let nome
let email
let profissao
let idade
let lugarParaConhecer

nome = " Marcelino\n"
email = "marcelinocost69@gmail.com\n"
profissao = "Dev Estudante\n"
idade = 54
paisParaConhecer = "\n Portugal"

function ituring() {
  console.log(nome, email, profissao, idade, paisParaConhecer)
}
ituring()

console.log(`Olá, ${nome}! 
Somos aqui da agência de turismo Viagem dos Sonhos. 
Estamos te escrevendo este email, pois acabamos de 
confirmar as compras das passagens aéreas para 
${paisParaConhecer}. 
Confirma pra gente alguns dados? A sua idade é 
${idade}, você é 
${profissao} e o seu email é 
${email}? 
Ficamos no aguardo. Muito obrigado e boa viagem!`)

// Execute: (git status -> git add * -> git commit -m 'mensagem de commit' -> git log -> git push) para subir a aplicação
