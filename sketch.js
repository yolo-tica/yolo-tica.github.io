// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// tlaloc

let xspacing = 23; // How far apart should each horizontal position be spaced
let w; // Width of entire wave
let maxwaves = 200; // total # of waves to add together

var lines, markov;

let theta = 0;
let amplitude = []; // Height of wave
let dx = []; // Value for incrementing X, to be calculated as a function of period and xspacing
let yvalues; // Using an array to store height values for the wave (not entirely necessary)

var contador = 1;
var contando = 1;


var font,
    fontsize = 24;

var contacolor = 0;
var dato = 1;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// xon ahuiyacan - Nezahualcóyotl

let xon_xspacing = 90; // How far apart should each horizontal position be spaced
let xon_w; // Width of entire wave
let xon_maxwaves = 300; // total # of waves to add together

var xon_lines, xon_markov;

let xon_theta = 0;
let xon_amplitude = []; // Height of wave
let xon_dx = []; // Value for incrementing X, to be calculated as a function of period and xon_xspacing
let xon_yvalues; // Using an array to store height values for the wave (not entirely necessary)

var xon_contador = 1;

var xon_font,
    xon_fontsize = 22;

var xon_contacolor = 0;
var xon_dato = 1;

var xon_giro = 1;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Zan tontemiquico - Coyolchiuhqui

let ton_xspacing = 10; // How far apart should each horizontal position be spaced
let ton_w; // Width of entire wave
let ton_maxwaves = 28; // total # of waves to add together

var ton_lines, ton_markov;

let ton_theta = 100;
let ton_amplitude = []; // Height of wave
let ton_dx = []; // Value for incrementing X, to be calculated as a function of period and ton_xspacing
let ton_yvalues; // Using an array to store height values for the wave (not entirely necessary)

var ton_contador = 1;

var ton_font,
    ton_fontsize = 20;

var ton_contacolor = 0;
var ton_dato = 1;

var ton_giro = 1;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Zan moch ompa ye huitz - Xayacámach de Tizatlan

let cuecue_xspacing = 10; // How far apart should each horizontal position be spaced
let cuecue_w; // Width of entire wave
let cuecue_maxwaves = 18; // total # of waves to add together

var cuecue_lines, cuecue_markov;

let cuecue_theta = 0;
let cuecue_amplitude = []; // Height of wave
let cuecue_dx = []; // Value for incrementing X, to be calculated as a function of period and cuecue_xspacing
let cuecue_yvalues; // Using an array to store height values for the wave (not entirely necessary)

var cuecue_contador = 1;

var cuecue_font,
    cuecue_fontsize = 22;

var cuecue_contacolor = 0;
var cuecue_dato = 1;

var cuecue_giro = 5;


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

var sketchSelector = [0, 1];



function preload() {

    tlaloc = loadImage("img/tlaloc.svg");
    tloquenahuaque = loadImage("img/tloquenahuaque.svg");

    mictlantecuhtli = loadImage("img/mictlantecuhtli.svg");
    mictlantecihuatl = loadImage("img/mictlantecihuatl.svg");

    xolotl_rev = loadImage("img/xolotl_rev.svg");
    xolotl = loadImage("img/xolotl.svg");
    xochitl = loadImage("img/xochitl.svg")

}

function setup() {

    createCanvas(windowWidth, windowHeight);

    //    sketchSelector = Math.round(random());

    sketchSelector = Math.floor(Math.random() * 4);

    //sketchSelector = 2;

    w = width;
    xon_w = width;
    ton_w = width;
    cuecue_w = width;

    noCursor();

    //textFont("Marta-Italic");
    textFont("Varela Round");
    //textFont("Didact Gothic");

    for (let i = 0; i < xon_maxwaves; i++) {
        xon_amplitude[i] = 1;
        let xon_period = 500; // How many pixels before the wave repeats
        xon_dx[i] = (TWO_PI / xon_period) * xon_xspacing;
    }
    xon_yvalues = [];

    for (let i = 0; i < maxwaves; i++) {
        amplitude[i] = 1;
        let period = 1400; // How many pixels before the wave repeats
        dx[i] = (TWO_PI / period) * xspacing;
    }

    yvalues = [];


}

function draw() {

    for (let i = 0; i < ton_maxwaves; i++) {
        ton_amplitude[i] = 1.4;
        let ton_period = windowWidth / 37; // How many pixels before the wave repeats
        ton_dx[i] = (QUARTER_PI / ton_period) * ton_xspacing;
    }
    ton_yvalues = [];

    for (let i = 0; i < cuecue_maxwaves; i++) {
        cuecue_amplitude[i] = 4;
        let cuecue_period = 100; // How many pixels before the wave repeats
        cuecue_dx[i] = (QUARTER_PI / cuecue_period) * cuecue_xspacing;
    }
    cuecue_yvalues = [];

    contando++;

    if (contando <= 1400) {
        tlalocan();
    }

    if (contando >= 1400 && contando <= 3400) {
        xon_ahuiyacan();
    }

    if (contando >= 3400 && contando <= 4800) {
        ton_temiquico();

    }

    if (contando >= 4800 && contando <= 6600) {
        cuecue_xochichuicatl();
    }

    if (contando >= 6600) {
        contando = 0;
                window.location.reload();

    }

/*
    if (sketchSelector == 0) {
        tlalocan();
    }

    if (sketchSelector == 1) {
        ton_temiquico();
    }

    if (sketchSelector == 2) {
        xon_ahuiyacan();
    }

    if (sketchSelector == 3) {
        cuecue_xochichuicatl();
    }*/
}


function tlalocan() {

    contacolor = contacolor + dato;

    if (contacolor <= 0) {
        dato = 0.5;
        contacolor += 0.5;
    }

    if (contacolor >= 255) {
        dato = -0.5;
        contacolor -= 0.5;
    }

    contador++;

    background( 57, 51, 62);
    calcWave();

    push();
    weft();
    pop();

    if (contador <= 600) {
        nicuicanitl();
    }

    if (contador >= 600 && contador <= 1000) {
        tlaaloc();
    }

    if (contador >= 1000) {
        ohuaya();
    }

    if (contador >= 1400) {
        contador = 1;
    }
}

// tloquenahuaque

function xon_ahuiyacan() {

    xon_giro++;

    xon_contacolor = xon_contacolor + xon_dato;

    if (xon_contacolor <= 0) {
        xon_dato = 0.5;
        xon_contacolor += 0.5;
    }

    if (xon_contacolor >= 255) {
        xon_dato = -0.5;
        xon_contacolor -= 0.5;
    }


    xon_contador++;

    background(0);
    xon_calcWave();

    push();
    xon_weft();
    pop();

    if (xon_contador <= 600) {

        tloquenahuaquee();

    }


    if (xon_contador >= 600 && xon_contador <= 1000) {


        ahuiyacan();

    }


    if (xon_contador >= 1000 && xon_contador <= 1400) {


        teotl();

    }


    if (xon_contador >= 1400 && xon_contador <= 2000) {

        cuicatl();

    }


    if (xon_contador >= 2000) {

        xon_contador = 1;

    }
}


// amoxohtoca, compuesta de 'toca', seguir, oh de oh-tli, 'camino' y amox-(tli), 'libro'

// nitlayocoya - estoy triste, Nezahualcóyotl


function ton_temiquico() {

    ton_giro += 0.2;

    ton_contacolor = ton_contacolor + ton_dato;

    if (ton_contacolor <= 0) {
        ton_dato = 0.5;
        ton_contacolor += 0.5;
    }

    if (ton_contacolor >= 255) {
        ton_dato = -0.5;
        ton_contacolor -= 0.5;
    }


    ton_contador++;

    background(23, 26, 33);

    ton_calcWave();

    push();
    ton_weft1();
    ton_weft();
    pop();

    if (ton_contador <= 600) {


        tecihuatl();
        //tontemiquico(); // primer párrafo Nitlayocoya
        //toyollo();
        //toyollo();
    }


    if (ton_contador >= 600 && ton_contador <= 1000) {

tontemiquico(); // 
    }


    if (ton_contador >= 1000 && ton_contador <= 1400) {

        toyollo();

    }



    if (ton_contador >= 1400) {

        ton_contador = 1;

    }
}

// Zan moch ompa ye huitz - Xayacámach de Tizatlan

function cuecue_xochichuicatl() {

    //    cuecue_giro += 1;

    cuecue_giro = cuecue_giro + cuecue_dato;

    if (cuecue_giro <= 0) {
        cuecue_dato = 1;
        cuecue_giro += 1;
    }

    if (cuecue_giro >= 640) {
        cuecue_dato = -1;
        cuecue_giro -= 1;
    }



    cuecue_contacolor = cuecue_contacolor + cuecue_dato;

    if (cuecue_contacolor <= 0) {
        cuecue_dato = 0.5;
        cuecue_contacolor += 0.5;
    }

    if (cuecue_contacolor >= 255) {
        cuecue_dato = -0.5;
        cuecue_contacolor -= 0.5;
    }


    cuecue_contador++;

    background(200, 163, 204);

    cuecue_calcWave();

    push();
    cuecue_weft1();
    cuecue_weft();
    pop();

    if (cuecue_contador <= 600) {


        tecuecuepalxochitl();

    }


    if (cuecue_contador >= 600 && cuecue_contador <= 1200) {

        cuecue_xochitl();

    }


    if (cuecue_contador >= 1200 && cuecue_contador <= 1800) {

        cacahuaxochitl();

    }


    if (cuecue_contador >= 1800) {

        cuecue_contador = 1;

    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {

    if (key == 'a' || key == 'A') {
        sketchSelector = 0;
    }

    if (key == 's' || key == 'S') {
        sketchSelector = 1;
    }

    if (key == 'd' || key == 'D') {
        sketchSelector = 2;
    }

    if (key == 'f' || key == 'F') {
        sketchSelector = 3;
    }

    if (key == 'r' || key == 'R') {
        window.location.reload();
    }
}