var numberButtonRun=document.querySelectorAll(".drum").length;
//Click events
for(var i=0;i<numberButtonRun;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(event){
        // alert("Clicked");
        // var audio=new Audio("sounds/crash.mp3");
        // audio.play()

        // console.log(this);
        // var key=event.key;
        // console.log(key);
        var key=this.innerHTML;
        makeSound(key);

        keyAnimation(key);
        // console.log(key);
        

    });
}


//Key press events
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    keyAnimation(event.key);
})


//Sound making function
function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
            break;
    }
}
//Animation function
function keyAnimation(key){
   var activeBtn=document.querySelector("."+key);
   activeBtn.classList.add("pressed");
   setTimeout(function(){
       activeBtn.classList.remove("pressed");
   },100);
}

