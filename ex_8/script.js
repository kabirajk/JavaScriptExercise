const row = document.querySelector('.row');
const col = document.querySelector('.col');
var imgContainer = document.querySelector('.image-container');
function changePosition(){
    console.log(`"${parseInt(col.value)*220} ${parseInt(row.value)*209}"`)
    let val=`${- (parseInt(col.value)-1)*220} ${- (parseInt(row.value)-1)*209}`;
    imgContainer.style.backgroundPosition=val;
    console.log(imgContainer.style.backgroundPosition);
}