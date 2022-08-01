function integetToRoman(num){
    let roman="";
    let number=parseInt(num);
    if(number>3999){
        return "&#128517; Not Found!";
    }
    for(let index = 0;index<length;index++){
        if(arabicNumerals[index]>number){
            continue;
        }
        else{
            roman+=(romanNumerals[index].repeat(parseInt((number/arabicNumerals[index]).toString())));
            number=number%arabicNumerals[index];
        }
    }

    return roman;
}

function romanToInteger(num){
   let numbers=0;
    for(let index = 0;index<length;index++){
        if(numbers>3999) return "&#128517; Not Found!";
        while (true){
            if(numbers>3999) return "&#128517; Not Found!";
            if (num.startsWith(romanNumerals[index])){
                numbers +=arabicNumerals[index];
                num=num.slice((romanNumerals[index].length));
            }
            else{
                break;
            }
        }
    }
    
    return numbers;
    
}

function calc(){
    let obj=document.getElementById('int_input');
    if(isNaN(parseInt(obj.value))){
        doc.innerHTML=romanToInteger(obj.value);
        type.innerHTML="Roman > Integer";
    }
    else{
        doc.innerHTML=integetToRoman((obj.value));
        type.innerHTML="Integer > Roman";
    }
}
const doc=document.querySelector('.out');
const type=document.querySelector('.type');
const arabicNumerals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
const romanNumerals=['M',"CM",'D','CD','C','XC','L','XL','X','IX','V','IV','I'];
const length=arabicNumerals.length;