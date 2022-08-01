let imageList=document.querySelectorAll('.slide');
let slideContainer=document.querySelector('.slideshow-container');
let dotContainer=document.querySelector('.dots-container');
let currentSlide=0;
let imageListLength=imageList.length;
function init(){
    for(let index=0;index<imageListLength;index++){
        if (imageListLength==1){
            break;
        }
        imageList[index].style.display="none";
        const dot=document.createElement('div');
        dot.classList.add('dot');
        dot.classList.add(index.toString());
        if(currentSlide==index){
            dot.classList.add('active');
        }
        dot.addEventListener('click',()=>{changeSlide(index);});
        dotContainer.appendChild(dot);

    }
    imageList[0].style.display="";
    
}

// function addNewImage(){
   
//     const newImageDiv=document.createElement('div');
//     newImageDiv.classList.add('slide');
//     let newImage=document.createElement('img');
//     newImage.src='https://raw.githubusercontent.com/Godsont/Image-Slider/master/images/slide-image1.jpg';
//     newImageDiv.appendChild(newImage);
//     newImageDiv.style.display="none";
//     slideContainer.innerHTML+=newImageDiv.outerHTML
//     slideContainer=document.querySelector('.slideshow-container');
//     imageList=document.querySelectorAll('.slide');
//     imageListLength=imageList.length;
//     const dot=document.createElement('div');
//     dot.classList.add('dot');
//     dot.classList.add((imageListLength-1).toString());
//     dot.addEventListener('click',()=>{changeSlide(imageListLength-1);});
//     dotContainer.appendChild(dot); 
// }

function changeSlide(slidenumber){
    imageList[slidenumber];
    imageList[currentSlide].style.display="none";
    dotContainer.children[currentSlide].classList.remove('active')
    currentSlide=slidenumber;
    imageList[slidenumber].style.display="";
    dotContainer.children[slidenumber].classList.add('active');
}

function prevSlide(){
    if(currentSlide == 0 ){
        changeSlide(imageListLength-1);
    }
    else{
        changeSlide(currentSlide-1);
    }
}
function nextSlide(){
    if(currentSlide == imageListLength-1 ){
        changeSlide(0);
    }
    else{
        changeSlide(1+currentSlide);
    }
}

init();
document.addEventListener('click',(Mevent)=>{
    if(Mevent.button==0){
    nextSlide();}
    if(Mevent.button==2){
        prevSlide();
    }
});
window.addEventListener('keydown', (event) => {
    if(event.code=="ArrowUp"||event.code=="PageUp"||event.code=="ArrowRight"){
        nextSlide();
    }
    if(event.code=="ArrowDown"||event.code=="PageDown"||event.code=="ArrowLeft"){
        prevSlide();
    }
});

