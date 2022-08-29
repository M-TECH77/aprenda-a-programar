class Produtos {
  constructor(nome, valor, inter, imposto) {
    this.nome = nome
    this.valor = valor
    this.inter = inter
    this.imposto = imposto
  }
}

function produtoITuringCamiseta() {
  let nProd = `${(Produtos.nome =
    "Camiseta:\n")} Preço: R$ 100 + imposto de 20%`

  let vImp = ` Impos: R$ ${
    (Produtos.valor = 100) * (Produtos.imposto = 1.2) - Produtos.valor
  }`

  let vlrImp = ` Total: R$ ${
    (Produtos.valor = 100) * (Produtos.imposto = 1.2) * 1
  }`

  console.log(nProd)
  console.log(vImp)
  console.log(vlrImp)
}
produtoITuringCamiseta()

console.log()

function produtoITuringPerfume() {
  let nProd = `${(Produtos.nome = "Perfume:\n")} Preço: R$ 200 + imposto de 20%`

  let vImp = ` Impos: R$ ${
    (Produtos.valor = 200) * (Produtos.imposto = 1.2) - Produtos.valor
  }`

  let vlrImp = ` Total: R$ ${
    (Produtos.valor = 200) * (Produtos.imposto = 1.2) * 1
  }`

  console.log(nProd)
  console.log(vImp)
  console.log(vlrImp)
}
produtoITuringPerfume()

console.log()

function produtoITuringSandalia() {
  let nProd = `${(Produtos.nome =
    "Sandália:\n")} Preço: R$ 120 + imposto de 12%`

  let vImp = ` Impos: R$ ${
    (Produtos.valor = 120) * (Produtos.imposto = 1.2) - Produtos.valor
  }`

  let vlrImp = ` Total: R$ ${
    (Produtos.valor = 120) * (Produtos.imposto = 1.12) * 1
  }`

  console.log(nProd)
  console.log(vImp)
  console.log(vlrImp)
}

produtoITuringSandalia()

console.log()
console.log("Obrigado pela preferência e volte sempre!")