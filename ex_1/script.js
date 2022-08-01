var agentVariable;
var browserName;

nAgt= navigator.userAgent;
nAgt=nAgt.split(" ")
var browserNameVersion;
for(let index=0;index<nAgt.length;index++){
    if(nAgt[index].startsWith('Safari')){
        browserNameVersion=nAgt[index];
        break;
    }
    if(nAgt[index].startsWith('Chrome')){
        browserNameVersion=nAgt[index];
        break;
    }
    if(nAgt[index].startsWith('Firefox')){
        browserNameVersion=nAgt[index];
        break;
    }
    if(nAgt[index].startsWith('Opera')){
        browserNameVersion=nAgt[index];
        break;
    }
}
browserNameVersion=browserNameVersion.split('/');
function change_res(){
    document.getElementById('Browser').textContent=browserNameVersion[0];
    document.getElementById('Version').textContent=browserNameVersion[1];
    document.getElementById('Width').textContent=screen.width
    document.getElementById('Height').textContent=screen.height

}
change_res()
