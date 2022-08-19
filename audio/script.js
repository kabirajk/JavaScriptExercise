function createAudioObject(src="https://freemusicarchive.org/track/twitch/download/"){
    let newAudioObject=new Audio(src);
    return newAudioObject;
}

//list of songs 
//use ondrag event lsienter and ended to 1st time seek
var slider;
var current;
var audioObject=new Audio();
var totalTime;
let replay=false;
let firstTime=false;
// var audioList={"Hidan":"https://ia600602.us.archive.org/33/items/jamendo-097169/08.mp3","Itachi":"https://ia800602.us.archive.org/33/items/jamendo-097169/10.mp3","pain":"https://ia800602.us.archive.org/33/items/jamendo-097169/05.mp3","Shouryuu":"https://ia800602.us.archive.org/33/items/jamendo-097169/16.mp3","rinkai":"https://ia800602.us.archive.org/33/items/jamendo-097169/21.mp3","Lightning":"https://ia600303.us.archive.org/26/items/Music-Naruto-Shippuden-Original-Soundtrack-1/05-Lightning%20Speed.mp3"};
var audioList = new Map();
audioList.set("Hidan","https://ia600602.us.archive.org/33/items/jamendo-097169/08.mp3");
audioList.set("Itachi","https://ia800602.us.archive.org/33/items/jamendo-097169/10.mp3");
audioList.set("pain","https://ia800602.us.archive.org/33/items/jamendo-097169/05.mp3");
audioList.set("Shouryuu","https://ia800602.us.archive.org/33/items/jamendo-097169/16.mp3");
audioList.set("rinkai","https://ia800602.us.archive.org/33/items/jamendo-097169/21.mp3");
audioList.set("Lightning","https://ia600303.us.archive.org/26/items/Music-Naruto-Shippuden-Original-Soundtrack-1/05-Lightning%20Speed.mp3");

function getUrl(){
    if(!document.querySelector("#link").value!=""){
        return
    }
    slider.value=0;
    audioObject.src=document.querySelector("#link").value;
}



function seek(events){
    if(!replay){
        events.stopImmediatePropagation();
    }
    else return;
    audioObject.currentTime=Math.round((slider.value/100)*audioObject.duration);
    current.textContent=`${(""+Math.floor(audioObject.currentTime/60)).padStart(2,'0')}:${(""+Math.round(audioObject.currentTime%60)).padStart(2,'0')}`;
    
    if (!replay){
        audioObject.play();
    }
    if(audioObject.played.length==1)
    {
        replay=false
    }
    changeicon(document.querySelector('.playing #Play'));
}
function seekAndPause(events){
    if(!replay){
        return
    }
    events.stopImmediatePropagation();
    audioObject.currentTime=Math.round((slider.value/100)*audioObject.duration);
    current.textContent=`${(""+Math.floor(audioObject.currentTime/60)).padStart(2,'0')}:${(""+Math.round(audioObject.currentTime%60)).padStart(2,'0')}`;
    
    
    if (replay){
        audioObject.pause();
        replay=false;
    }
    else audioObject.play()

    changeicon(document.querySelector('.playing #Play'));
}

function change(){
    current.textContent=`${(""+Math.floor(audioObject.currentTime/60)).padStart(2,'0')}:${(""+Math.round(audioObject.currentTime%60)).padStart(2,'0')}`;
    if(isNaN(audioObject.duration)){
        slider.value=0;
    }
    else{
        slider.value=Math.round((audioObject.currentTime/audioObject.duration)*100);
    }
    console.log(audioObject.duration,audioObject.currentTime);
    if(audioObject.ended){
        console.log(audioObject.played)
        replay=true;
    }
    changeicon(document.querySelector('.playing #Play'));
}

function play(){
    if (audioObject.paused){
        audioObject.play();
        
    }
    else if(!audioObject.paused){
        audioObject.pause();
    }
}

function changeicon(events){
    if(audioObject.paused){
        events.textContent='\u25B6';
        // console.log(events.target.textContent="\u23F8",'\u23F8');
        // console.log('\u23F8','\u25B6');

    }
    else{
        events.textContent="\u23F8";
        // console.log(events.target.textContent);
        // console.log('\u23F8','\u25B6');

    
    }
    
}

function muted(events){
    if(!events.target.parentElement.classList.contains('playing')){
        return;
    }
    console.log(audioObject.muted)
    if(!audioObject.muted){
        audioObject.muted=!audioObject.muted;
    }
    else if(audioObject.muted){
        audioObject.muted=!audioObject.muted;
    }
 }
// function stopOld(){
//     audioObject.pause()
// }

function addMediaBar(events){
    // console.log(events);
    var newElement=events.target.parentElement;
    if(newElement.classList.contains('playing')) {
        play();
        changeicon(events.target);
        return;}
    if(!audioObject.paused)
        audioObject.pause();
    var currentlyPlaying= document.querySelector('.playing');
    if(isNaN(currentlyPlaying)){
    currentlyPlaying.childNodes.forEach((Value)=>{
        console.log(Value);
        if(Value.classList.contains("slider-div"))
        {currentlyPlaying.removeChild(Value);
    changeicon(document.querySelector('.playing #Play'));
          currentlyPlaying.classList.remove('playing');}
    })}
    newElement.classList.add('playing');
    newElement.appendChild(getNewSlider());
    delete audioObject;
    audioObject= createAudioObject(audioList.get(newElement.id));
    replay=false;
    audioObject.addEventListener('loadedmetadata',()=>{

        totalTime.innerHTML=`${(""+((Math.floor(audioObject.duration/3600) != 0)?Math.floor(audioObject.duration/3600).padStart(2,'0')+":":""))}${(""+Math.floor((audioObject.duration%3600)/60)).padStart(2,'0')}:${(""+Math.round((audioObject.duration%3600)%60)).padStart(2,'0')}`;
        change();
        console.log(audioObject);
    
    });
    audioObject.addEventListener('timeupdate',change)
    play();
}

function getNewSlider(){
    var newDiv=document.createElement('div');
    newDiv.classList.add('slider-div');
    newDiv.style.display="inline";
    var newCTspan =document.createElement('span');
    newCTspan.setAttribute('id','curenttime');
    newCTspan.textContent="--:--";
    current=newCTspan;
    newDiv.appendChild(newCTspan);
    var newRangedInput = document.createElement('input');
    newRangedInput.setAttribute('type','range');
    newRangedInput.setAttribute('id','time');
    newRangedInput.setAttribute('min','0');
    newRangedInput.setAttribute('max','100');
    newRangedInput.setAttribute('value','0');
    newRangedInput.setAttribute('autocomplete','off');
    slider=newRangedInput;
    slider.addEventListener("change",seekAndPause)
    slider.addEventListener("input",seek)
    newDiv.appendChild(newRangedInput);
    var newTTspan =document.createElement('span');
    newTTspan.setAttribute('id','totaltime');
    newTTspan.textContent="--:--";
    newDiv.appendChild(newTTspan);
    totalTime=newTTspan;
    return newDiv;

}

function generateDivs(){
    var playlist=document.querySelector('.playlist')
audioList.forEach((value,key)=>{
    console.log(key);
    playlist.appendChild(appendMediaControl(key))
})

}

 function appendMediaControl(classname){
    var listItem = document.createElement("li");
    var muscItemDiv= document.createElement('div')
    muscItemDiv.classList.add('music-item');
    muscItemDiv.setAttribute('id',classname)
    // muscItemDiv.classList.add(classname);
    var playButton = document.createElement('button');
    playButton.setAttribute('id','Play');
    playButton.textContent="\u25B6"
    playButton.addEventListener('click',addMediaBar);
    var muteButton = document.createElement('button');
    muteButton.setAttribute('id','mute');
    muteButton.textContent="🔇";
    muteButton.addEventListener('click',muted);
    var h6Tag= document.createElement('h6');
    h6Tag.textContent=classname;
    muscItemDiv.appendChild(h6Tag)
    muscItemDiv.appendChild(playButton);
    muscItemDiv.appendChild(muteButton);
    listItem.appendChild(muscItemDiv);
    console.log(listItem);
    return listItem
 }
