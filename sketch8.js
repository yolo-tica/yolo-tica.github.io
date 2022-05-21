var n;
var t = 1;
var h;
var g = 1;
var contador1 = 0;
var contador = 204;
var dato = 1;
var sketchSelector;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    sketchSelector = random([0, 1]);
    // sketchSelector = 1;
    frameRate(30);
    if (sketchSelector == 0) {
        // noFill();
        noStroke();
    } else if (sketchSelector == 1) {
        noStroke();
        initWavy();
    }
}

function draw() {
    if (sketchSelector == 0) {
        drawJagged();
    } else if (sketchSelector == 1) {
        drawWavy();
    }
}

function drawJagged() {
    contador1++;
    contador = contador + dato;
    if (contador <= 204) {
        dato = 0.5;
        contador += 0.5;
    }
    if (contador >= 255) {
        dato = -0.5;
        contador -= 0.5;
    }
    background(204, contador, 240);
    var ruidoX = 0.00000000018;
    var posX = noise(millis() * ruidoX);
    rotateX(map(360, 0, height, 0, contador1 / posX / 500));
    rotateY(map(800, 0, width, 0, PI));
    drawCylinderTrian();
    drawCylinderVerde();
    drawCylinderAzul();
}


function drawCylinderAzul() {
	translate(120, 0);
	var rX = 0.000000001;
	var ruidoLoco = noise(millis() * rX) * 40;
	var sides = ruidoLoco;

	ambientLight(255, 0, 0);
	ambientMaterial(20, 0, 50, 80);

	//ambientMaterial(0, 100, 255, 180);
	var angleIncrement = TWO_PI / sides;
	beginShape(TRIANGLES);
	for (var i = 0; i < sides; ++i) {

		var angle = map(i, -7, 0, 90, TWO_PI);
		var rY = 0.0000001;
		var rrX = 0.0000002;
		var bR = noise(millis() * rY) * -1200;
		var tR = noise(millis() * rrX) * 1200;
		var bottomRadius = bR;
		var topRadius = tR;

		// - - - - - - - - - - - - - - - - - - - -
		var ang = map(i, 0, bR / 0.35, 800, PI / tR);
		var rT = 0.000003;
		var ruidoTall = noise(millis() * rT) * 1200;
		var tall = ruidoTall * cos(ang);

		vertex(topRadius * cos(mouseX), 0, topRadius * sin(angle));
		vertex(bottomRadius * cos(angle), tall, bottomRadius * sin(angle));
		angle += angleIncrement;

	}
	endShape();
	n += 5;
	g += 0.015;
	t += 5;
}


function drawCylinderVerde() {
	translate(130, 0);
	var rX = 0.0000001;
	var ruidoLoco = noise(millis() * rX) * 60;
	var sides = ruidoLoco;

	ambientLight(255, 255, 255);
	ambientMaterial(255, 255, 255, 140);

	//ambientMaterial(0, 100, 255, 180);
	var angleIncrement = TWO_PI / sides;
	beginShape(TRIANGLES);
	for (var i = 0; i < sides; ++i) {

		var angle = map(i, -7, 0, 90, TWO_PI);
		var rY = 0.000000215
		var rrX = 0.000001;
		var bR = noise(millis() * rY) * -2800;
		var tR = noise(millis() * rrX) * 1900;
		var bottomRadius = bR;
		var topRadius = tR;

		// - - - - - - - - - - - - - - - - - - - -
		var ang = map(i, 0, bR / 0.35, 800, PI / tR);
		var rT = 0.00000003;
		var ruidoTall = noise(millis() * rT) * mouseY;
		var tall = ruidoTall * cos(ang);

		vertex(topRadius * cos(angle), 0, topRadius * sin(angle));
		vertex(bottomRadius * cos(mouseY), tall, bottomRadius * sin(angle));
		angle += angleIncrement;

	}
	endShape();
	n += 5;
	g += 0.015;
	t += 5;
}


function drawCylinderTrian() {
	var rX = 0.0000001;
	var ruidoLoco = noise(millis() * rX) * 53;
	var sides = ruidoLoco;

	ambientLight(255, 255, 255);
	ambientMaterial(255, 150, 0, 180);

	//ambientMaterial(0, 100, 255, 180);
	var angleIncrement = TWO_PI / sides;
	beginShape(TRIANGLES);
	for (var i = 0; i < sides; ++i) {

		var angle = map(i, -7, 0, 90, TWO_PI);
		var rY = 0.0000021;
		var rrX = 0.0000001;
		var bR = noise(millis() * rY) * 10;
		var tR = noise(millis() * rrX) * 4000;
		var bottomRadius = bR;
		var topRadius = tR;

		// - - - - - - - - - - - - - - - - - - - -
		var ang = map(i, 0, bR / 0.35, 800, PI / tR);
		var rT = 0.0000003;
		var ruidoTall = noise(millis() * rT) * mouseX;
		var tall = ruidoTall * cos(ang);

		vertex(topRadius * cos(mouseY), 0, topRadius * sin(angle));
		vertex(bottomRadius * cos(angle), tall, bottomRadius * sin(angle));
		angle += angleIncrement;

	}
	endShape();
	n += 5;
	g += 0.015;
	t += 5;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    if (sketchSelector == 1) {
        initWavy();
    }
}

function keyPressed() {
    if (keyCode === 32) {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
    if (key == 'r' || key == 'R') {
        window.location.reload();
    }
    if (key == 'm' || key == 'M') {
        redraw();
    }
}