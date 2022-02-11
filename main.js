/** @type {HTMLCanvasElement} */
let exo1 = document.querySelector('#exo1');
if(exo1.getContext) {
    let ctx = exo1.getContext("2d");
    console.log(ctx);
}