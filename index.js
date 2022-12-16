var element =document.querySelectorAll("button");
console.log(element[0]);
var k=0;
for(var i=0;i<7;i++){
element[i].addEventListener('click',function (e){
   console.log(e);
// this.style.color="white";
util(this.innerHTML);
addAnimation(this.innerHTML);

});
}

document.addEventListener("keypress",function(e){
    console.log(e);
    util(e.key);
    addAnimation(e.key);
})
function util(key){
    switch (key) {
        case 'w':
            var audio= new Audio("/sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio= new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio= new Audio("/sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio= new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio= new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio= new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio= new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function addAnimation(key){

    var el=document.querySelector("."+key);
    console.log(el.classList);
    el.classList.add("pressed");

setTimeout(function(){el.classList.remove("pressed")},1000);

}