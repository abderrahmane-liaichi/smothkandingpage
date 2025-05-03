let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let abdo = document.querySelector(".abdo");


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value * 1.2 + 'px';
    boat.style.top = value * 1.2 + 'px';
    boat.style.left = value * 3 + 'px';
    abdo.style.fontSize = value + 'px';
    if(scrollY >= 57){
        abdo.style.fontSize = 57 + 'px';
        abdo.style.position = 'fixed';
    }
    if(scrollY >= 457){
        abdo.style.display = 'none';
    }else{
        abdo.style.display = 'block';
    }
    if(scrollY >= 200){
        document.querySelector('.main').style.background = 'linear-gradient(#fad8ff, #0a2664)'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200224, #0a2664)'
    }
}