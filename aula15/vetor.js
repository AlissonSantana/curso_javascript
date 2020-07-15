let  valores = [8, 1, 7, 5, 9, 2]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores) {
    console.log(valores[pos])
}

valores.sort()
console.log(valores.indexOf(1))