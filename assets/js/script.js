// TODO: Create a variable to hold the count
var count=0;
var contEl= document.querySelector("#count");
var Inccounter = document.getElementById("increment");
var Deccounter = document.getElementById("decrement");


// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.

var IncreaseCounter= function(event){
    count++;
    SetCountText();

}
var DecCounter= function(event){
    if (count>0){
        count--;
    }
    SetCountText();
}

// TODO: Create a function that displays the current count on the page
function SetCountText()
{
    contEl.textContent= count;
}

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count

Inccounter.addEventListener("click", IncreaseCounter);

// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count

Deccounter.addEventListener("click", DecCounter);

