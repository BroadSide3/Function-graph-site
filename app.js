// Предположим, на клиентской части в браузере необходимо вывести график функции
// y=A*sin*(x/T + F), где A- амплитуда сигнала, T- период, F -фаза
// Предложите реализацию этой функциональности на JavaScript на стороне клиента, с
// сохранением данных длительностью 10 периодов в массив. Кроме перечисленных
// параметров, клиент передает в функцию параметры окна вывода графика W(ширину) и
// H(высоту).
//
//     y=A*sin*(x/T + F)
//
// A = амплитуда сигнала
// x = ?
// T = период
// F = фаза
// W = ширина
// H = высота

let canvasElement =  document.getElementById("myCanvas");
let userInputHeight = document.getElementById("enterHeightInput");
let userInputWidth = document.getElementById("enterWidthInput");
let addParamCanvas = document.getElementById("submitButton");
let addAmplitude = document.getElementById("amplitude");


let ctx = canvasElement.getContext("2d");

let counter = 0, x=0, y=180;

let amplitude = 120;
let period = 180;
let phase = 10;

let increase = 0.5 * Math.PI / 90;

function renderAmplitude(){
for(let i=0; i<=360; i++) {
    ctx.moveTo(x, y);
    x = i;
    y =  180 - Math.sin((counter + period) * phase) * amplitude;
    counter += increase;

    ctx.lineTo(x, y);
}
ctx.stroke();

};

function eraseCanvas(){
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.strokeStyle = 'transparent';
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.restore();
};

function changeCanvas() {
    eraseCanvas();

    canvasElement.style.width = userInputWidth.value+"px";
    canvasElement.style.height = userInputHeight.value+"px";
    amplitude = addAmplitude.value;

    renderAmplitude();
}

addParamCanvas.addEventListener('click', changeCanvas);

$("#app").submit(function(e){
    return false;
});

