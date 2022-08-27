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
  if (numeroPrimo(i)) {
    console.log(`Sim, o número ${i} é primo!`)
  } else {
    console.log(`Não, o número ${i} não é primo!`)
  }
}
