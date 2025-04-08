function factorial(n) {
    if (n < 0) return;
    if (n === 0 || n === 1) return 1;
    console.log("El factorial del numero : " + n)
    return n * factorial(n - 1);
}
factorial(19)

function fibonacci(n1) {
    if (n1 <= 0) return;
    if (n1 === 1) return 0;
    if (n1 === 2) return 1;
    console.log("Número de Fibonacci : " + n1)
    return fibonacci(n1 - 1) + fibonacci(n1 - 2);
}
fibonacci(10)

function revertirCadena(cadena) {
    if (cadena === "") return "";
    console.log("Esta es la : " + cadena)
    return revertirCadena(cadena.substr(1)) + cadena.charAt(0);
}
revertirCadena("Hola guerreros Z")