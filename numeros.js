let numeros = [10, 20, 30, 40, 50]
console.log(numeros)

let planetas = new Array("Marte", "Jupiter", "Saturno")
console.log(planetas)

console.log("Primer planeta: ", planetas[0])
console.log("Ultimo planeta: ", planetas[planetas.length - 1])

let planet = ["Venus", "Tierra", "Marte", "Jupiter"]
planet.push("Saturno")
console.log("Despues de push: ", planet)
planet.pop()
console.log("Dspues de pop: ", planet)
planet.unshift()
console.log("Despues de unshift: ", planet)
planet.shift()
console.log("Despues de shitf: ", planet)
console.log("Numero de planetas :", planet.length)
console.log("¿El arreglo incluye a 'Venus'?", planet.includes("Venus"))

let numer = [3, 4, 1, 5, 7, 2, 6]
numer.sort();
console.log("Ordenados: ", numer)

numer.reverse();
console.log("Invertidos: ", numer)

let matriz = [
["Juan", 18],
["Alan", 19],
["Valeria", 20]
]
console.log("Edad de pablo: ", matriz[1])