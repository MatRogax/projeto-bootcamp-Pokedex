const botaoThemeMode = document.getElementById("theme-mode");


const body = document.querySelector("body");

const imgThemeChange = document.querySelector(".imagen-button")


botaoThemeMode.addEventListener("click",() =>{

    const activeThemeMode = body.classList.contains("night-mode");

    body.classList.toggle("night-mode")
    
    if(activeThemeMode){

        imgThemeChange.setAttribute("src", "./src/imagen/sun.png")

    }else{
       
        imgThemeChange.setAttribute("src", "./src/imagen/moon.png")
        
    }


})

