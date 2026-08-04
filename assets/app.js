// AT3004835 LaunchPad


// Loading Screen

window.addEventListener("load",()=>{

let loader=document.getElementById("loader");


if(loader){

setTimeout(()=>{

loader.style.opacity="0";


setTimeout(()=>{

loader.style.display="none";

},500);


},2000);

}

});




// URL Redirect

function openURL(){

let input=document
.getElementById("urlInput")
.value
.trim();


if(!input)return;


if(!input.startsWith("http")){

input="https://"+input;

}


window.location.href=input;


}




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

let themeButton =
document.getElementById("themeToggle");



function setTheme(theme){

if(theme==="light"){

document.body.classList.add("light");

themeButton.innerHTML="☀️";


}else{


document.body.classList.remove("light");

themeButton.innerHTML="🌙";


}

}



if(themeButton){

themeButton.onclick=()=>{


let light =
document.body.classList.contains("light");


if(light){

setTheme("dark");

localStorage.theme="dark";


}else{


setTheme("light");

localStorage.theme="light";


}


};


}




if(localStorage.theme){

setTheme(localStorage.theme);

}





// Cookies


function acceptCookies(){

localStorage.setItem(
"cookies",
"accepted"
);


document.getElementById(
"cookieBox"
).style.display="none";


}



if(
!localStorage.getItem("cookies")
){

let box=document.getElementById("cookieBox");


if(box){

box.style.display="block";

}

}
