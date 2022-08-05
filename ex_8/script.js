const row = document.querySelector('.row');
const col = document.querySelector('.col');
const toolTip = document.querySelector('.tooltip');
var imgContainer = document.querySelector('.image-container');
function changePosition(){
    const pattern = /[0-9]+$/
    console.log(pattern.test(col.value),pattern.test(row.value))
    if(!pattern.test(col.value)||!pattern.test(row.value)||isNaN(parseInt(col.value))||isNaN(parseInt(row.value))||parseInt(col.value)<=0||parseInt(col.value)>5||parseInt(row.value)<=0||parseInt(row.value)>3){
        toolTip.classList.add('vis');
        return;
    }
    toolTip.classList.remove('vis');
    console.log(`"${parseInt(col.value)*220} ${parseInt(row.value)*209}"`);
    let val=`${- (parseInt(col.value)-1)*220} ${- (parseInt(row.value)-1)*209}`;
    imgContainer.style.backgroundPosition=val;
    console.log(imgContainer.style.backgroundPosition);
}