var frog = document.getElementById("frog");
var butterfly = document.getElementById("butterfly");
var bee = document.getElementById("bee");

var frog_emoji = "🐸"
var butterfly_emoji = "🦋"
var bee_emoji = "🐝"


frog.onclick = function() {
    if(!(frog.innerHTML.includes(frog_emoji))){
        frog.innerHTML = frog.innerHTML + frog_emoji
    } else {
        frog.innerHTML = "frog"
    }
}

butterfly.onclick = function() {
    if(!butterfly.innerHTML.includes(butterfly_emoji)){
        butterfly.innerHTML = butterfly.innerHTML + butterfly_emoji
    } else {
        butterfly.innerHTML = "butterfly"
    }
}

bee.onclick = function() {
    if(!bee.innerHTML.includes(bee_emoji)){
        bee.innerHTML = bee.innerHTML + bee_emoji
    } else {
        bee.innerHTML = "bee"
    }
}
