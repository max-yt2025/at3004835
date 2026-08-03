// URL Redirect

function openURL(){

let input=document.getElementById("urlInput").value.trim();

if(!input) return;


if(!input.startsWith("http")){

input="https://"+input;

}


window.location.href=input;

}



document
.getElementById("urlInput")
.addEventListener("keydown",function(e){

if(e.key==="Enter"){

openURL();

}

});




// Clock

function updateClock(){

let now=new Date();


document.getElementById("clock").innerHTML =
now.toLocaleTimeString();


document.getElementById("date").innerHTML =
now.toDateString();

}


setInterval(updateClock,1000);

updateClock();




// Theme

let button=document.getElementById("themeToggle");


button.onclick=()=>{

document.body.classList.toggle("light");


if(document.body.classList.contains("light")){

button.innerHTML="☀️";

localStorage.theme="light";

}

else{

button.innerHTML="🌙";

localStorage.theme="dark";

}

}



if(localStorage.theme==="light"){

document.body.classList.add("light");

button.innerHTML="☀️";

}
