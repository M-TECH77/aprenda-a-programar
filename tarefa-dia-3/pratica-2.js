let tabuadaDeCinco = 10
let n = tabuadaDeCinco
let i = 1

console.log("Usando o WHILE")
while (i <= n) {
  console.log(`  5 X ${i} = ${5 * i}`)
  i++
}

//Outra forma de chegar ao mesmo resultado
console.log("Usando o loop FOR")
for (let i = 1; i <= n; i++) {
  console.log(`  5 X ${i} = ${5 * i}`)
}
