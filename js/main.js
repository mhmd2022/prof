
// ==================cursor============
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",function(e){
    cursor.setAttribute("style","top:"+(e.pageY-15)+"px;left:"+(e.pageX-15)+"px;")
})
// =================navbar menu========
const backgroundmover1 = document.querySelector(".bc-nav-toggler.bg1");
const backgroundmover2 = document.querySelector(".bc-nav-toggler.bg2");
const navbarMenu = document.querySelector("header .menu")
const navToggler = document.querySelector(".navbar .iconfix .cd-nav-toggler");
navToggler.addEventListener("click",function(){
    navToggler.classList.toggle("cd-close");
    if(navToggler.classList.contains("cd-close")){
        setTimeout(() => {
            backgroundmover1.classList.add("move1");
        }, 0);
        setTimeout(() => {
            backgroundmover1.classList.remove("move1");
        }, 1000);
    }else{
        setTimeout(() => {
            backgroundmover2.classList.add("move1");
        }, 0);
        setTimeout(() => {
            backgroundmover2.classList.remove("move1");
        }, 1000);
    }
    navbarMenu.classList.toggle("active");
    
})
// ==================== toggle dark to light==============
const toggleDarkToLight = document.querySelector(".menu .toggle-dark-light");
const toggleIcon = document.querySelector(".menu .toggle-dark-light .fas");
toggleDarkToLight.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    toggleIcn();
})
function toggleIcn (){
    if(document.body.classList.contains("dark")){
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
        localStorage.setItem("darkMode","true");
    }else{
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
        localStorage.setItem("darkMode","false");
    }
  
}
if(localStorage.getItem("darkMode")!== null){
    themeMode();
}
function themeMode(){
    if(localStorage.getItem("darkMode")=="true"){
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
    }
    toggleIcn();

}
themeMode();

// ==========================theme colors==============
function themeColors(){
    const colorStyle = document.querySelector(".js-color-style"),themeColorsContainer = document.querySelector(".js-theme-colors");
    themeColorsContainer.addEventListener("click",({target})=>{
        if(target.classList.contains("js-theme-colors-item")){
            localStorage.setItem("color",target.getAttribute("data-js-theme-colors"));
            setColor();
        }
    })
    function setColor (){
        let path = colorStyle.getAttribute("href").split("/");
        path= path.slice(0,path.length-1);
        colorStyle.setAttribute("href",path.join("/") +"/"+localStorage.getItem("color")+".css");
        if(document.querySelector(".js-theme-colors-item.active")){
            document.querySelector(".js-theme-colors-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-theme-colors="+localStorage.getItem("color")+"]").classList.add("active");
    }
    if(localStorage.getItem("color") !== null){
        setColor();
    }else{
        const defaultcolor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-colors="+defaultcolor+"]");
    }
}
themeColors();
// =======================================================

const counter1 = document.querySelector(".fun-facts-section .fun-facts-item .conter1"),
counter2 = document.querySelector(".fun-facts-section .fun-facts-item .conter2"),
counter3 = document.querySelector(".fun-facts-section .fun-facts-item .conter3");
let i =1,x=1,y=1;
const funFactsSection= document.querySelector(".fun-facts-section");
if(window.scrollY>=funFactsSection.offsetTop){
    console.log("hi");
}
window.addEventListener("scroll",funFactsfunction);
function funFactsfunction(){
    if(window.scrollY >= (funFactsSection.offsetTop - window.innerHeight) ){
        
        funFactsCounter();
    }

}

function funFactsCounter(){
    window.removeEventListener("scroll",funFactsfunction);
        const interval1 = setInterval(function(){
            if(i>10){
                clearInterval(interval1);
                i=10;
            }
            counter1.innerText=i;
            i++;
        }, 400);
        const interval2 = setInterval(function () {
            x++;
            if(x>950){
                clearInterval(interval2);
                x=950;
            }
            counter2.innerText=x;
        }, 10);
        const interval3 = setInterval(function() {
            y++;
            if(y>40){
                clearInterval(interval3);
                y=40;
            }
            counter3.innerText=y;
        }, 100);
        
        
}