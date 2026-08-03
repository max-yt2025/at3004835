// ======================================
// AT3004835 LaunchPad - app.js
// ======================================


// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);


        }, 2000);

    }

});



// ===============================
// URL Redirect System
// ===============================

function openURL(){

    let input = document
        .getElementById("urlInput")
        .value
        .trim();


    if(!input){
        return;
    }


    // Common shortcuts

    const shortcuts = {

        "google":
        "https://google.com",

        "youtube":
        "https://youtube.com",

        "discord":
        "https://discord.com",

        "tiktok":
        "https://tiktok.com",

        "snapchat":
        "https://snapchat.com",

        "github":
        "https://github.com",

        "roblox":
        "https://roblox.com",

        "spotify":
        "https://spotify.com"

    };


    let lower =
    input.toLowerCase();



    if(shortcuts[lower]){

        window.location.href =
        shortcuts[lower];

        return;

    }



    // Add https automatically

    if(
        !input.startsWith("http://") &&
        !input.startsWith("https://")
    ){

        input =
        "https://" + input;

    }



    // Same tab redirect

    window.location.href = input;


}



// Enter key search

document.addEventListener(
"keydown",
(event)=>{


    const input =
    document.getElementById("urlInput");


    if(
        event.key === "Enter" &&
        document.activeElement === input
    ){

        openURL();

    }


});




// ===============================
// Clock + Date
// ===============================


function updateClock(){


    const now =
    new Date();



    const time =
    now.toLocaleTimeString(
        [],
        {
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit"
        }
    );



    const date =
    now.toLocaleDateString(
        [],
        {
            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"
        }
    );



    const clock =
    document.getElementById("clock");


    const dateElement =
    document.getElementById("date");



    if(clock){

        clock.innerHTML =
        time;

    }


    if(dateElement){

        dateElement.innerHTML =
        date;

    }


}



setInterval(
updateClock,
1000
);


updateClock();




// ===============================
// Dark / Light Mode
// ===============================


const themeButton =
document.getElementById(
"themeToggle"
);



function setTheme(theme){


    if(theme === "light"){


        document.body
        .classList
        .add("light");


        if(themeButton){

            themeButton.innerHTML =
            "☀️";

        }


    }else{


        document.body
        .classList
        .remove("light");


        if(themeButton){

            themeButton.innerHTML =
            "🌙";

        }


    }


}



// Button click

if(themeButton){


themeButton.onclick = ()=>{


    const isLight =
    document.body
    .classList
    .contains("light");



    if(isLight){

        setTheme("dark");

        localStorage
        .setItem(
            "theme",
            "dark"
        );


    }else{


        setTheme("light");

        localStorage
        .setItem(
            "theme",
            "light"
        );


    }


};


}




// Load saved theme


const savedTheme =
localStorage.getItem(
"theme"
);



if(savedTheme){

    setTheme(savedTheme);

}
