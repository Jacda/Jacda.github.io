
let random = document.querySelector (".random");
let a = document.querySelector (".a");
let victory = document.querySelector (".victory");
let input = document.querySelector("#input1").value
let container = document.querySelector(".container");
let chance = document.querySelector(".chance");
let tries = document.querySelector(".tries");
let try1 = document.querySelector(".try1");
let try2 = document.querySelector(".try2");
let try3 = document.querySelector(".try3");
let try4 = document.querySelector(".try4");
let try5 = document.querySelector(".try5");
let try6 = document.querySelector(".try6");
random.addEventListener("click", rnumber);
let sant = false;
let x = 0;
let y = 0;
let ix = 0;
console.log(y);
function rnumber()  {
    let randomgen = Math.floor((Math.random() * 10000) + 1);
    input = document.querySelector("#input1").value
    if(ix != input){
        x = 0;
        ix = input;
    }
    ix = input;
    x++;
    tries.innerHTML = "Tries: "+ x;
    y = (1-((1-(input/10000))**x))*100;
    y = (Math.round(y * 100) / 100).toFixed(2);
    victory.style.display = "none";
    a.innerHTML = randomgen;
    chance.innerHTML = "There's a " + y + "% that you would have gotten the item already";
    console.log(y);
    console.log(x);
    console.log(randomgen);
    console.log(input);
    a.style.display = "block";

    t1 = (1-((1-(input/10000))**10))*100;
    t1 = (Math.round(t1 * 100) / 100).toFixed(2);
    try1.innerHTML = t1 + "%"

    t2 = (1-((1-(input/10000))**50))*100;
    t2 = (Math.round(t2 * 100) / 100).toFixed(2);
    try2.innerHTML = t2 + "%"

    t3 = (1-((1-(input/10000))**250))*100;
    t3 = (Math.round(t3 * 100) / 100).toFixed(2);
    try3.innerHTML = t3 + "%"

    t4 = (1-((1-(input/10000))**1000))*100;
    t4 = (Math.round(t4 * 100) / 100).toFixed(2);
    try4.innerHTML = t4 + "%"

    t5 = (1-((1-(input/10000))**2000))*100;
    t5 = (Math.round(t5 * 100) / 100).toFixed(2);
    try5.innerHTML = t5 + "%"

    t6 = (1-((1-(input/10000))**5000))*100;
    t6 = (Math.round(t6 * 100) / 100).toFixed(2);
    try6.innerHTML = t6 + "%"


    if(input >= randomgen){
        victory.innerHTML = "You found the weapon after " + x +" tries!";
        x = 0
        container.style.backgroundColor = "chartreuse";
        random.style.cursor ="auto"
        victory.style.display = "block";
        buttontimeout()
    }
}
function buttontimeout(){
    document.querySelector(".random").disabled = true;
    setTimeout(function(){document.querySelector(".random").disabled = false}, 1500)
    setTimeout(function(){document.querySelector(".container").style.backgroundColor = "#543c2a"}, 1500)
    setTimeout(function(){document.querySelector(".random").style.cursor = "pointer"}, 1500)
}

