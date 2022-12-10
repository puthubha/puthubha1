

var numberOfButton = document.querySelectorAll("button").length;



for ( var i = 0 ; i < numberOfButton  ; i++ ){
document.querySelectorAll(".drum")[i].addEventListener("click" , buttonClick);

}

document.addEventListener("keypress", pressedKey);

function pressedKey(nameOfkey){

    var name = nameOfkey.key;
    var capitalName = name.toUpperCase();

    makeSound(capitalName);

    doAnimation(capitalName);


}

function buttonClick(){
     var clickedKey = this.innerHTML;
     makeSound(clickedKey);
     doAnimation(clickedKey);
}



function makeSound(clickedKey){

   switch (clickedKey) {


            case "A" :

               var crash = new Audio("crash.mp3");
               crash.play();

               break;

            case "S" :

               var kick = new Audio("kick-bass.mp3");
               kick.play();

               break;

            case "D" :

               var snare = new Audio("snare.mp3");
               snare.play();

               break;

            case "F" :

               var tom1 = new Audio("tom-1.mp3");
               tom1.play();

               break;

            case "G" :

               var tom2 = new Audio("tom-2.mp3");
               tom2.play();

               break;

            case "H" :

               var tom3 = new Audio("tom-3.mp3");
               tom3.play();

               break;

            case "J" :

               var tom4 = new Audio("tom-4.mp3");
               tom4.play();

               break;

            default: console.log(clickedKey);

   }
}

function doAnimation(output){

  var classSelect = "."  + output ;

  document.querySelector(classSelect).classList.add("press");

   setTimeout( timeOut , 250 );

   function timeOut(){
     document.querySelector(classSelect).classList.remove("press");
   }

}
