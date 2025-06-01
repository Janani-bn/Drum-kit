
var numberofdrumbuttons = document.querySelectorAll(".drum").length;

 for ( i = 0 ; i < numberofdrumbuttons ; i++){

 document.querySelectorAll(".drum")[i].addEventListener("click",function(){

                     var buttoninnerHTML = this.innerHTML;
                     makeSound(buttoninnerHTML);
                     buttonAnimation(buttoninnerHTML);
                    
                            
 });
 }

 document.addEventListener("keypress",function(event){

       makeSound(event.key);

   
      buttonAnimation(event.key);
 })


 function makeSound(key){

    switch(key){

        case "w":

            var crash = new Audio(src = "./sounds/crash.mp3");
            crash.play();
            break;

        case "a":

            var kick = new Audio(src = "./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":

            var snare = new Audio(src = "./sounds/snare.mp3");
            snare.play();
            break;

        case "d":

            var tom1 = new Audio(src = "./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":

            var tom2 = new Audio(src = "./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":

            var tom3 = new Audio(src = "./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            
            var tom4 = new Audio(src = "./sounds/tom-4.mp3");
            tom4.play();
            break;

            default: console.log(buttoninnerHTML);
     }
}
