let textElement = new Array("Nowoczesne Technologie", "Automatyka budynku", "Automatyka Przemysłowa");
let counter = 0;
document.getElementById("text").innerHTML = textElement[counter];

ChangeText();
ChangeText1();

function ChangeText1(){
    incrementIndex();
    document.getElementById("text1").innerHTML = textElement[counter];

    document.getElementById("text").style.opacity = 0;
 

    document.getElementById("text1").style.opacity = 1;
   
    
    setTimeout(ChangeText1, 2000);
}

function ChangeText(){
    incrementIndex();
    document.getElementById("text").innerHTML = textElement[counter];

    document.getElementById("text").style.opacity = 1;
   
  
    document.getElementById("text1").style.opacity = 0;
   
    
    setTimeout(ChangeText1, 2000);
}

function incrementIndex(){
    if(counter < textElement.length - 1){
        counter++;
    }else{
        counter = 0;
    }
}