let inmin=document.querySelector(".inc");
let min=document.getElementById("minute");
let sec=document.getElementById("seconds");
let minutes=0;
let seconds=0;
var n=0;
inmin.addEventListener('click',()=>{
    minutes +=60000;
    n=minutes/(60000);
    min.textContent=n;
});

document.querySelector(".dec").addEventListener('click',()=>{
    minutes -=60000;
    n=minutes/(60000);
    min.textContent=n;
});
document.getElementById("start").addEventListener("click",()=>{
    const time=setTimeout(()=>{
        document.getElementById("txt").textContent="Time's up";
        clearInterval(intMin);
    },minutes);
    display_min();
    let intMin=setInterval(display_min,60000);
});
f
function display_min(){
    m=Number(min.textContent)-1;
    min.textContent=m;
    let count=60;
    sec.textContent=count;
    let intSec=setInterval(display_sec,1000);
   
    function display_sec(){
        count-=1;
        if(count == -1 ){
            clearInterval(intSec);
        }
       else{
        sec.textContent=count;
       }
    }
    
}