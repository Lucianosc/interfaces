"use strict";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let width = 400;
let height = 400;
let imageData = ctx.createImageData(width, height);

let r = 0;
let g = 0;
let b = 0;
let a = 255;

function drawRect(imageData, r, g, b, a){
    let coefWidth = 255 / (width / 2);

    for (let x = 0; x < imageData.width; x++){

        if (x <= width / 2){
            r = x * coefWidth;
            g = x * coefWidth;
        }
        else{
            g = g - coefWidth;
        }

        for ( let y = 0; y < imageData.height; y++){
            setPixel(imageData, x, y, r, g, b, a);
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a){
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 10, 10);