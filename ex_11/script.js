var n=5;
function getNumber(){
    let inputField = document.querySelector('.inp');
    n=parseInt(inputField.value);
    pieceContainer.innerHTML="";
    puzzleContainer.innerHTML="";
    puzzleContainer.style.width=`${600+n+1}px`;
    puzzleContainer.style.height=`${600+n+1}px`;
    init();
    
}
var pieceContainer=document.querySelector('.pices-container');
var puzzleContainer=document.querySelector('#puzzle-container')
puzzleContainer.style.width=`${600+n+1}px`;
puzzleContainer.style.height=`${600+n+1}px`;

function createPices(pieceNumber){
    
    var canvasObject = document.createElement('div');
    canvasObject.setAttribute("id",`piece${pieceNumber}`);
    canvasObject.setAttribute('draggable',"true");
    canvasObject.setAttribute("ondragstart","drag(event)");
    canvasObject.style.height=`${600/n}px`;
    canvasObject.style.width=`${600/n}px`;
    canvasObject.classList.add('box');
    var canvaselement=document.createElement('canvas');
    canvaselement.classList.add('canv');
    canvaselement.setAttribute('width',`${600/n}px`);
    canvaselement.setAttribute('height',`${600/n}px`);
    canvasObject.appendChild(canvaselement);
    pieceContainer.appendChild(canvasObject);
  }

function createPuzzleBlocks(){
    var divObject=document.createElement('div');
    divObject.classList.add('box');
    divObject.style.height=`${600/n}px`;
    divObject.style.width=`${600/n}px`;
    divObject.setAttribute("ondrop","drop(event)");
    divObject.setAttribute("ondragover","allowDrop(event)");
    puzzleContainer.appendChild(divObject);
}
function init(){
for(let i=0;i<(n*n);i++){
    createPices(i+1);
    createPuzzleBlocks();
}
drawTiles();
}
var Tiles = document.querySelectorAll('.canv');

var img = new Image();

img.src = 'img0.jpg';
img.addEventListener('load', drawTiles, false);

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("pices-container", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("pices-container");
    if(ev.target.classList.contains('canv')){
       return;
    }
    else{
    ev.target.appendChild(document.getElementById(data));}
}

function drawTiles(){
    Tiles = document.querySelectorAll('.canv');
    var row=0;
    for(let i=0;i<(n*n);i++){
    var ctx=Tiles[i].getContext('2d');
        ctx.drawImage(img,(i%n)*(600/n),(row%n)*(600/n),600/n,600/n,0,0,600/n,600/n)
        if(i%n==0){
         row++;   
        }
}
}
init()

