var frog = document.getElementById("frog");
var butterfly = document.getElementById("butterfly");
var bee = document.getElementById("bee");

var frog_emoji = "🐸"
var butterfly_emoji = "🦋"
var bee_emoji = "🐝"


frog.onclick = function() {
    if(frog.innerHTML.includes(frog_emoji)){
        frog.innerHTML = "frog"
    } else {
        frog.innerHTML = frog.innerHTML + frog_emoji
    }
}

butterfly.onclick = function() {
    if(butterfly.innerHTML.includes(butterfly_emoji)){
        butterfly.innerHTML = "butterfly"
    } else {
        butterfly.innerHTML = butterfly.innerHTML + butterfly_emoji
    }
}

bee.onclick = function() {
    if(bee.innerHTML.includes(bee_emoji)){
        bee.innerHTML = "bee"
    } else {
        bee.innerHTML = bee.innerHTML + bee_emoji
    }
}
