const bubble=document.getElementById('bubble');
const move =document.getElementById('move_button');
const pause =document.getElementById('pause_button');
const reset =document.getElementById('reset_button');

move.addEventListener('click',() => {
   console.log(bubble.classList.contains("reset"));
 if(bubble.classList.contains("reset")){
    bubble.classList.remove('reset');
    bubble.classList.add('move');
 }
 else if(bubble.classList.contains("pause")){
   bubble.classList.remove('pause');
   bubble.classList.add('move');
}
console.table(bubble.classList)
})

pause.addEventListener('click',() => {
   if(bubble.classList.contains('move')){
    bubble.classList.remove('move');
    bubble.classList.add("pause");
 }

})

reset.addEventListener('click',() => {
   
 if(bubble.classList.contains("move")){
    bubble.classList.remove('move');
    bubble.classList.add('reset');
 }
 else if(bubble.classList.contains("pause")){
   bubble.classList.remove('pause');
   bubble.classList.add('reset');
}
console.table(bubble.classList);
})
