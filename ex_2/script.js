var count;
var cookieObj=new Map();
function setCookie(){
   if (document.cookie.length==0){
    document.cookie="visited = 1; SameSite = None";
   }
   else{
    let str=document.cookie.split(";");
        for (let i in str){
                const curString=str[i].split("=");
                cookieObj.set(curString[0],parseInt(curString[1]));
        }

        cookieObj.set('visited',cookieObj.get('visited')+1);
        console.log(cookieObj.get('visited'));
    document.cookie="visited = "+cookieObj.get('visited')+"; SameSite = None";

   }
}
function view_count(){

        document.getElementById('number').innerHTML=cookieObj.get('visited').toString();
}

function resetCookieData(){
        if (document.cookie.length!=0){
                cookieObj.set('visited',1);
                document.cookie="visited=1; SameSite=None";
                count=1;
               } 
        view_count();
}
setCookie();
view_count();
