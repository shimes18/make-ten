function rand(){
    return Math.floor(Math.random()*10);
}

let a=rand(),b=rand(),c=rand(),d=rand();

document.getElementById("no").innerText = "" + a + b + c + d;

document.getElementById("n1").innerText = a;
document.getElementById("n2").innerText = b;
document.getElementById("n3").innerText = c;
document.getElementById("n4").innerText = d;


const input=document.getElementById("o1");

function operator(){
    input.value= input.value.replace( /[^+\-(]/g , "");
}

input.addEventListener("input",operator);

const input2=document.getElementById("o2");

function operator1(){
    input2.value= input2.value.replace( /[^+\-*/%() ]/g , "");
}

input2.addEventListener("input2",operator1);

const input3=document.getElementById("o3");

function operator2(){
    input3.value= input3.value.replace( /[^+\-*/%() ]/g , "");
}

input3.addEventListener("input3",operator2);

const input4=document.getElementById("o4");

function operator3(){
    input4.value= input4.value.replace( /[^+\-*/%() ]/g , "");
}

input4.addEventListener("input4",operator3);

const button=document.getElementById("check");

button.addEventListener("click", function func(){
    const sum=0;
    alert("clicked");
});