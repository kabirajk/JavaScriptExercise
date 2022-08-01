
let infoContainers=document.querySelectorAll('.info-container');
function showDetail(eventObj,nodeObj){
    let mouseButton = ['LMB','MMV','RMB'];
    const areaObj=nodeObj.querySelectorAll('.areaxy')

    areaObj.innerHTML="<h5>Hai:</h5>";

    
    nodeObj.children[1].style.display="block";
    console.log(areaObj.innerHTML+nodeObj);
}

function hideDetail(eventObj,nodeObj){
    n
}
infoContainers.forEach((value,key,nodeObj)=>{

    value.children[2].addEventListener('click',(eventObj,nodeObj=value.children[1])=>{
        console.log(eventObj);
        let mouseButton = ['LMB','MMV','RMB'];
    const areaObj=(eventObj.target.previousElementSibling).children[3];

    areaObj.innerHTML=`X/Y:${eventObj.clientX} / ${eventObj.clientY} <br><br> Mouse button:${mouseButton[eventObj.button]}`;
    
    nodeObj.style.display="block";
    console.log(areaObj.innerHTML+nodeObj);
    })
    value.children[2].addEventListener('mouseout',(eventObj,nodeObj=value.children[1])=>{
        nodeObj.style.display="";
    })
})