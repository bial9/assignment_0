function bgcolors(){
    var bg = document.getElementById("colors")
    var bgColorName = prompt("background color name")
    bg.style.backgroundColor = bgColorName;
}
function txtcolors(){
    var txt = document.getElementById("colors")
    var txtColorName = prompt("Text color name")
    txt.style.color = txtColorName
}
function imghandler(condition){
    var img = document.getElementById("img")
    if(condition == "show"){
        img.style.display="block"
    }
    else if(condition == "hide"){
        img.style.display="none"
}
else if(condition == "small"){
    img.style.width = "50%"
}
else if(condition == "big"){
    img.style.width = "100%"
}
}

function imgChange(toggle){
    var a = document.getElementById("bulbToggle")
    if(toggle == 'on'){
    a.src="img/bulbOn.jpg"
    }
    else if(toggle == 'off'){
    a.src="img/bulbOff.jpg"
    }
}
function para(){
    var a = document.getElementById("para")
    var b = document.getElementsByTagName("p")
    var c = prompt("para color")
    b.style.color = c
    c = a

}