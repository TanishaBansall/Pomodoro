var fun;
var count=1;
var timer;
var minutes=0,seconds=0;
var displaySeconds=0;
var flagforsessionandbreak=1;
var heading=document.getElementById("heading");
var minus=document.getElementById("minus");
var minusValue=document.getElementById("st");
var time;
var plus=document.getElementById("plus");
var displayTime=document.getElementById("time");
var start=document.getElementById("start");
var breakPlus=document.getElementById("breakPlus");
var breakMinus=document.getElementById("breakMinus");
var reset=document.getElementById("reset");
var sessionTime=20;



////break time
var breakTime=5;
var breakMinus=document.getElementById("breakMinus");
var breakPlus=document.getElementById("breakPlus");
var breakDisplayTime=document.getElementById("breakDisplayTime");





displayTime.textContent="00:00";

minus.addEventListener('click',function(){
   if(sessionTime>0)
   {
       sessionTime-=1;
   }

   minusValue.innerHTML = sessionTime ;
});
plus.addEventListener('click',function(){
   
       sessionTime+=1;
      
   minusValue.innerHTML = sessionTime ;
});
breakMinus.addEventListener('click',function(){
   if(breakTime>0)
   {
       breakTime-=1;
   }

   breakDisplayTime.innerHTML = breakTime ;
});
breakPlus.addEventListener('click',function(){
   
       breakTime+=1;
      
   breakDisplayTime.innerHTML = breakTime ;
});

start.addEventListener('click',function(){
    
    minus.disabled=true;
    plus.disabled=true;
    breakMinus.disabled=true;
    breakPlus.disabled=true;

    if(minutes===0&&seconds===0){
    timer=sessionTime*60;
    }
    start.innerHTML=((start.innerHTML==="start")||(start.innerHTML==="resume"))?"pause":"resume";
    
    if(start.innerHTML==="pause")
    {
        fun=setInterval(function(){
       
        minutes=parseInt((timer/60));
        seconds=parseInt((timer%60));
        minutes=minutes<10? "0"+minutes:minutes;
        seconds=seconds<10? "0"+seconds:seconds;
        displayTime.textContent=minutes+":"+seconds;
        
        if(--timer<0)
        {
            
            timer=(heading.innerHTML==="Break Time!")?sessionTime*60:breakTime*60;
           
            heading.innerHTML=(heading.innerHTML==="Session "+count)?"Break Time!":"Session "+count;
            if(heading.innerHTML==="Break Time!")
            {
                heading.style.color="Orange";
                displayTime.style.color="Orange";
            }
            count++;
            
        }
        
    
    },1000);
    }
    else
    clearInterval(fun);

    

});
reset.addEventListener('click',function(){
count=1;
minutes=0;
seconds=0;
sessionTime=20;
breakTime=5;
clearInterval(fun);
displayTime.textContent="00:00";
heading.innerHTML="Session "+count;
start.innerHTML="start";
minusValue.innerHTML = sessionTime ;
breakDisplayTime.innerHTML = breakTime ;
minus.disabled=false;
plus.disabled=false;
breakMinus.disabled=false;
breakPlus.disabled=false;

});

