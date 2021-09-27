"use strict";

let matrix = [];
let width = 7;
let height = 6;


for (let i = 0; i < height; i++){
    matrix[i] = [i];
    for (let j = 0; j < width; j++){
        matrix[i][j] = null;
    }
}

// Escribir una función que retorne el valor máximo de toda la matriz
function returnMax(){
    let max = 0;
    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            if (max < matrix[i][j]){
                max = matrix[i][j];
            }
        }
    }
    return max;
}

let numMax = returnMax();

// Escribir una función que retorne el valor máximo contenido en las 
// filas pares y el valor mínimo en las filas impares

function returnMaxParMinImpar(){
    let max = 0;
    let min = 99999;
    let arr = new Array();

    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            if (max < matrix[i][j] && j % 2 == 0){
                max = matrix[i][j];
            }
            if (min > matrix[i][j] && !(j % 2 == 0) ){
                min = matrix[i][j];
            }
        }
    }

    arr.push(max);
    arr.push(min);
    return arr;
}

let maxParMinImpar = returnMaxParMinImpar();

// Calcular el valor promedio de cada fila y guardarlos en un arreglo

function returnRowAverage(){
    let aux = 0;
    let arr = new Array();

    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            aux += matrix[i][j];
        }
        arr.push(aux/width);
        aux = 0;
    }

    return arr;
}

let rowAverage = returnRowAverage();

console.log(matrix);
console.log(numMax);
console.log(maxParMinImpar);
console.log(rowAverage);
