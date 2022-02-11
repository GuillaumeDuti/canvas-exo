/** @type {HTMLCanvasElement} */
let exo1 = document.querySelector('#exo1');
if(exo1.getContext) {
    let ctx = exo1.getContext("2d");
    console.log(ctx);

    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 150, 300);

    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 150, 100);

    ctx.fillStyle = "green";
    ctx.fillRect(50, 200, 150, 100);

    ctx.clearRect(60, 210, 130, 80);

    ctx.strokeStyle = "red";
    ctx.strokeRect(80, 230, 90, 40)
}

let exo2 = document.querySelector('#exo2');
if(exo2.getContext) {
    let ctx = exo2.getContext("2d");
    console.log(ctx);

    ctx.fillStyle = "black";
    ctx.fillRect(50, 50, 300, 300);

    ctx.clearRect(70, 70, 260, 260);

    ctx.strokeStyle = "black";
    ctx.strokeRect(100, 100, 200, 200);

}

let exo3 = document.querySelector('#exo3');
if(exo3.getContext) {
    let ctx = exo3.getContext("2d");
    console.log(ctx);

    ctx.strokeStyle = "red";
    ctx.strokeRect(50, 50, 400, 300);

    ctx.fillStyle = "red";
    ctx.fillRect(70, 70, 360, 260);

    ctx.fillStyle = "white";
    ctx.fillRect(150, 175, 200, 50);
    ctx.fillRect(225, 100, 50, 200);


}