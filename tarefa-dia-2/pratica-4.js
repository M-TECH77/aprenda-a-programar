let produtoA = {
  nomeProduto: "Camiseta:\n",
  valorProduto: 100.0,
  produtoInternacional: true,
  impostoSobreProd: 1.2,
}

function produtoITuringCamiseta() {
  if (produtoA.produtoInternacional === true) {
    console.log(`${produtoA.nomeProduto} Preço: R$ 100 + imposto de 20%`)
    console.log(
      " Total: R$",
      produtoA.valorProduto * produtoA.impostoSobreProd
    ) / 100
  } else {
    console.log("Desculpe! Produto não disponível no momento!")
  }
}
produtoITuringCamiseta()

console.log()
let produtoB = {
  nomeProduto: "Perfume:\n",
  valorProduto: 200.0,
  produtoInternacional: true,
  impostoSobreProd: 1.2,
}

function produtoITuringPerfume() {
  if (produtoB.produtoInternacional === true) {
    console.log(`${produtoB.nomeProduto} Preço: R$ 200 + imposto de 20%`)
    console.log(
      " Total: R$",
      produtoB.valorProduto * produtoB.impostoSobreProd
    ) / 100
  } else {
    console.log("Desculpe! Produto não disponível no momento!")
  }
}
produtoITuringPerfume()

console.log()
let produtoC = {
  nomeProduto: "Sandália:\n",
  valorProduto: 120.0,
  produtoNacional: true,
  impostoSobreProd: 1.12,
}

function produtoITuringSandalia() {
  if (produtoC.produtoNacional === true) {
    console.log(`${produtoC.nomeProduto} Preço: R$ 120 + imposto de 12%`)
    console.log(
      " Total: R$",
      produtoC.valorProduto * produtoC.impostoSobreProd
    ) / 100
  } else {
    console.log("Desculpe! Produto não disponível no momento!")
  }
}
produtoITuringSandalia()

console.log()
console.log("Obrigado pela preferência e volte sempre!")

// Depois eu vou refatorar esse código. Tem muita repetição.
