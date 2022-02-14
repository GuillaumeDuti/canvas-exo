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
/** @type {HTMLCanvasElement} */
let exo4 = document.querySelector('#exo4');
if(exo4.getContext) {
    let ctx = exo4.getContext("2d");
    ctx.lineWidth = 10;
    
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(125,300);
    ctx.arcTo(125,100,200,150, 40);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(175,200);
    ctx.lineTo(250,125);
    ctx.lineTo(325,200)
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(200,200);
    ctx.lineTo(200,300);
    ctx.lineTo(300,300);
    ctx.lineTo(300,200);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeRect(230,300,40,-60);

    ctx.beginPath()
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "lightyellow";
    ctx.lineWidth = 10;

    // ctx.moveTo(300,300);
    ctx.arc(400,100, 60,0, Math.PI *2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath()
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "lightyellow";
    ctx.arc(400,100, 30,0, Math.PI);
    // ctx.moveTo(350,125);
    // ctx.arcTo(375,-25,400,25,80)

    // ctx.moveTo(300,300);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(100,400);
    ctx.strokeStyle = "blue";
    ctx.bezierCurveTo(200,300,300,500,400,400);
    ctx.moveTo(100,450);
    ctx.bezierCurveTo(200,350,300,550,400,450);
    ctx.stroke();
    ctx.closePath()

    // ctx.strokeRect(50, 50, 400, 300);
    
    // ctx.fillStyle = "red";
    // ctx.fillRect(70, 70, 360, 260);

    // ctx.fillStyle = "white";
    // ctx.fillRect(150, 175, 200, 50);
    // ctx.fillRect(225, 100, 50, 200);


}

let exo5 = document.querySelector('#exo5');
if(exo5.getContext) {

    let cutNumber = 10;
    
    const RANGESLICENUMBER = document.querySelector('#sliceNumber');
    RANGESLICENUMBER.addEventListener('input', function(e) {
        cutNumber = e.target.value;
        runSlicer()
    })
    
    function runSlicer() {
        let ctx = exo5.getContext("2d");
        let colors = {
            red: 255,
            green: 255,
            blue: 50
        }
        let positions = {
            x: 0,
            y: 0,
        }

        for(let j = 0 ; j <= cutNumber ; j++ ) {
            for(let i = 0 ; i <= cutNumber ; i++ ) {
                ctx.fillStyle = `rgb(${colors.red},${colors.green},${colors.blue})`
                ctx.fillRect(positions.x, positions.y , (500/cutNumber),(500/cutNumber));
                positions.x = positions.x + (500/cutNumber);
                colors.blue = colors.blue - (50/cutNumber);
                colors.green = colors.green - (255/cutNumber);
            }
            positions.x = 0;
            positions.y = positions.y + (500/cutNumber);
            colors.blue = 50;
            colors.green = 255;
            colors.red = colors.red - (255/cutNumber);
        }
    }

    runSlicer();


}