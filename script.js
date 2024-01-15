
window.onload = function (){

  document.getElementById("ratingContainer").style.display = "flex";

}

//p>You selected</p> <p id="ratingNumber"></p><p>out of 5</p>


let userInput = document.querySelectorAll('.numberBtn');

userInput.forEach(input => input.addEventListener('click', (e) => {
  let choosenRating = e.target.value;

  console.log(choosenRating)

  document.getElementById("content").innerHTML = "You selected " + choosenRating + " out of 5";
}
))


function submitPressed(){
  document.getElementById("ratingContainer").style.display = "none";
  document.getElementById("thanksContainer").style.display = "flex";
}
