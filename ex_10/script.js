const deskCanvas = document.querySelector('#Queuecanvas');
const ratCanvases = document.querySelectorAll('.ratscanvas');
const redRatCanvas = document.querySelector('.ratscanvasred');
// '#f7e6d3'
var rat = {
    draw(ratcolor,strokeColor) {
      ctx.beginPath();
      ctx.moveTo(24,23)
      ctx.bezierCurveTo(30,18,49,10,64,17);
      ctx.bezierCurveTo(73,14,90,19,77,38);
      ctx.bezierCurveTo(76,48,76,49,75,55);
      ctx.bezierCurveTo(59,80,57,72,54,83);
      ctx.bezierCurveTo(50,90,42,92,35,80);
      ctx.bezierCurveTo(20,70,20,76,15,64);
      ctx.bezierCurveTo(12,55,12,55,13,43);
      ctx.bezierCurveTo(0,45,0,10,24,23)
      ctx.moveTo(64,17);
      ctx.bezierCurveTo(63,17,60,18,57,23);
      ctx.fillStyle=ratcolor;
      ctx.fill();
      ctx.strokeStyle=strokeColor;
      ctx.stroke();
      
      ctx.closePath();// ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(68,27);
      ctx.arc(68,27,3,0,2*Math.PI);
      ctx.closePath();
      ctx.fillStyle=strokeColor
      ctx.fill();
  
      ctx.beginPath();
      ctx.moveTo(17,32);
      ctx.arc(17,32,3,0,2*Math.PI);
      ctx.closePath();
      ctx.fillStyle=strokeColor;
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(54,83);
      ctx.bezierCurveTo(50,90,42,92,35,80);
      ctx.bezierCurveTo(45,75,50,75,54,80);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle=strokeColor;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(40,64);
      ctx.arc(40,64,2,0,2*Math.PI);
      ctx.fillStyle=strokeColor;
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(48,64);
      ctx.arc(48,64,2,0,2*Math.PI);
      ctx.fillStyle=strokeColor;
      ctx.fill();
      ctx.closePath();
      
      }
   }

var desk={
    // x:1,
    // y:480,
    draw(){
        // ctx.beginPath()
        // ctx.moveTo(0,480);
        ctx.strokeRect(0,480,96,16);
        // ctx.moveTo(96,456);
        ctx.strokeRect(96,456,146,80);
        ctx.strokeRect(242,480,94,16);
        ctx.strokeRect(450,480,110,16);
        ctx.strokeRect(560,456,146,80);
        ctx.strokeRect(706,480,94,16);
        ctx.beginPath();
        ctx.moveTo(30,496);
        ctx.lineTo(30,640);
        ctx.lineTo(96,640);
        ctx.lineTo(96,496);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(770,496);
        ctx.lineTo(770,640);
        ctx.lineTo(706,640);
        ctx.lineTo(706,496);
        ctx.stroke()
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(180,596,33,0,2*Math.PI);
        ctx.closePath();
        ctx.stroke();
    
        ctx.beginPath();
        ctx.arc(630,596,33,0,2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        //books and cross lines in the ciorcles 
    }
}
var ctx;

if (deskCanvas.getContext){
    ctx = deskCanvas.getContext('2d');
   desk.draw();
}

if (redRatCanvas.getContext){
     ctx = redRatCanvas.getContext('2d');
    rat.draw('white','red');
    ctx=NaN;
}
ratCanvases.forEach((ratCanvas)=>{
    if (ratCanvas.getContext){
        ctx = ratCanvas.getContext('2d');
        rat.draw('#f7e6d3','black');
    }
});