var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var blockWith = 200;
const PI = Math.PI;
const PI2 = Math.PI * 2;

var time = 0;

var color = {
    red: '#E7465D',
    yello: '#F5AF5F',
    blue: '#3676BB',
    bg_blue: '#001D2E'
}

var ww = window.innerWidth;
var wh = window.innerHeight;
canvas.width = ww;
canvas.height = wh;

var ship = {
    x: 0,
    y: 0,
    deg: 0,
    r: 100
}

// 初始化
function init() {
    ship.deg = 0;
    ship.x = Math.random() * ww;
    ship.y = Math.random() * wh;
}

function update() {
    ship.x += 0.5;
    ship.y += 0.8;
    // console.log(mousePos.x, mousePos.y);
    ship.deg = Math.tan(mousePos.y / mousePos.x);
}

function draw() {

    // 背景
    ctx.fillStyle = "#001d2e";
    ctx.fillRect(0, 0, ww, wh);
    ctx.save()
    // grid
    let span = 50;
    ctx.beginPath();
    for (let i = 0; i < ww; i += span) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, wh);
    }
    for (let i = 0; i < ww; i += span) {
        ctx.moveTo(0, i);
        ctx.lineTo(ww, i);
    }
    ctx.strokeStyle = "rgba(255,255,255,.1)";
    ctx.stroke();

    // ship
    ctx.fillStyle = "white";
    ctx.fillRect(ship.x, ship.y, 50, 50);



    ctx.translate(ww / 2, wh / 2);
    // 轉動
    ctx.rotate(ship.deg);
    // 炮
    ctx.fillRect(150, -25 / 2, 25, 25);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(175, -25 / 2);
    ctx.lineTo(195, -25 / 3);
    ctx.lineTo(195, 25 / 3);
    ctx.lineTo(175, 25 / 2);
    ctx.fill();

    // 點點圈
    for (let i = 0; i < 32; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, ship.r + 25, 0, PI2 / 64);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
        ctx.rotate(PI2 / 32)
        ctx.stroke();
    }


    // 船
    ctx.beginPath();
    ctx.arc(0, 0, ship.r, 0, PI2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 15;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, ship.r + 50, PI2 / 3, -PI2 / 3);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.stroke();

    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -ship.r);
        ctx.stroke();
        ctx.rotate(PI2 / 3);
    }
    ctx.restore();

    requestAnimationFrame(draw);
}

init();
setInterval(update, 1000 / 60);
requestAnimationFrame(draw);

var mousePos = {
    x: 0,
    y: 0
}
canvas.addEventListener("mousemove", function (e) {

    mousePos.x = e.x - ww / 2;
    mousePos.y = e.y - wh / 2;
})