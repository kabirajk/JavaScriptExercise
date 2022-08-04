var slider = document.querySelector('.slider');
var textContainer= document.querySelector('.text-container');
function scrollDiv(percent){
    textContainer.scrollTop=(parseInt(percent)/100)*textContainer.scrollTopMax;
}

