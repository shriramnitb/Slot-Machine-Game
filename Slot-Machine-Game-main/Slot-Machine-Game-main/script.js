var value1=document.getElementById("value1")
var value2=document.getElementById("value2")
var value3=document.getElementById("value3")
var setSpeed=document.getElementById("setSpeed")
var speedinp=document.getElementById("speed")
var start=document.getElementById("start")
var stopbtn=document.getElementById("stopbtn")
console.log("shriram ");
var values=['😃', '😇', '😋', '😂', '😎', '😭', '😡']

function get(){
    return values[Math.floor(Math.random()*7)];
}

var myVar;
function getRandomVal(newSpeed){
    if(myVar) clearInterval(myVar)
    myVar=setInterval(function(){
        value1.innerText=get();
        value2.innerText=get();
        value3.innerText=get();
    }, 1000/newSpeed)
}

function check(){
    if(value1.innerText==value2.innerText){
        return true;
    }else if(value2.innerText==value3.innerText){
        return true;
    }else if(value1.innerText==value3.innerText){
        return true;
    }else{
        return false;
    }
}

setSpeed.onclick=function(){
    document.getElementById("result").innerHTML='';
    document.documentElement.style.setProperty('--speed',speedinp.value);
    getRandomVal(speedinp.val);
}

start.onclick=function(){
    document.getElementById("result").innerHTML='';
    document.documentElement.style.setProperty('--speed',1);
    getRandomVal(1);
}

stopbtn.onclick=function(){
    clearInterval(myVar);
    document.documentElement.style.setProperty('--speed',0);

    if(check()){
        document.getElementById("result").innerHTML='You have won';
    }else{
        document.getElementById("result").innerHTML='You have lost';
    }
}

