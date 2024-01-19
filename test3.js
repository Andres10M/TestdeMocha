function sumarArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

export function testSumarArray() {
    const arreglo = [5, 10, 15, 20];
    const resultado = sumarArray(arreglo);
    const esperado = 50;

    if (resultado === esperado) {
        console.log("Test de sumarArray PASADO");
    } else {
        console.error("Test de sumarArray FALLIDO");
    }
}

function pow(x, n) {
    return Math.pow(x, n);
}

export function testPowing() {
    let a = 3;
    let b = 4;
    let resultado = pow(a, b);
    let expected = 81;

    if (resultado === expected) {
        console.log("Test de pow PASADO");
    } else {
        console.error("Test de pow FALLIDO");
    }
}

function loop(N) {
    let x = 0;
    for (let i = 1; i <= N; i++) {
        x += 2; 
    }
    return x;
}

export function testLoopimg() {
    let a = 8;
    let suma = loop(a);
    let expected = 16; 
    if (suma === expected) {
        console.log("Test de loop PASADO");
    } else {
        console.error("Test de loop FALLIDO");
    }
}