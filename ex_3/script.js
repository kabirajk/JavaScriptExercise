function alertText(meassage,alertid){
    let warning=document.getElementById('alertbox_'+alertid);
    warning.style.display="block";
    warning.textContent=meassage;
}
function reset(alertid){
    let warning=document.getElementById('alertbox_'+alertid);
    warning.style.display="none";
}
function validateDate()
{
    let date=document.getElementById('DOB').value;
    date=date.split('-');
    if(!(parseInt(date[0])>0 && parseInt(date[0])<=31)){
        alertText("!DD Format should be in DD-MM-YYYY","Date");
        return;
    }
    if(!(parseInt(date[1])>0 && parseInt(date[1])<=12)){
        alertText("!MM Format should be in DD-MM-YYYY","Date");
        return;
    }
    if(!(parseInt(date[2])>999 && parseInt(date[2])<=9999)){
        alertText("!YYYY Format should be in DD-MM-YYYY","Date");
        return;
    }
    reset("Date");
}

function validateNumber(){
    let number=document.getElementById('number').value;
    if(!(parseInt(number)>=1000000000 && parseInt(number)<=9999999999)){
        alertText("Enter Mobile number with 10 digits","Phone");
        return;
    }
    reset("Phone");
}

function validateName(){
    let name=document.getElementById('name').value;

    const pattern=/^[a-z A-Z]+$/;
    if (!(pattern.test(name))){
        alertText("Enter name aplhabets only","Name");
         return;
    }
    reset("Name");

}