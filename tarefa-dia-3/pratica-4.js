function numeroPrimo(numero) {
  for (let n = 2; n < numero; n++) {
    if (numero % n == 0) {
      return false
    }
  }
  return true
}

let numeroDeEntrada = 30

for (let i = 2; i < numeroDeEntrada; i++) {
  numeroPrimo(i)
    ? console.log(`Sim, o número ${i} é primo!`)
    : console.log(`Não, o número ${i} não é primo!`)
}
