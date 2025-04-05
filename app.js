let song = () => {
  let audio = new Audio();
  audio.src = "/assets/rings.mp3";
  audio.play();
};


let body = document.querySelector("body");
let btn = document.querySelectorAll("button");
let input = document.getElementById("result");

btn.forEach((item) => {
  item.addEventListener("click", () => {
    let valute = item.innerHTML.toLowerCase();

    if (valute === "clear") {
      input.value = ""; // Clear input
    } else if (valute === "del") {
      input.value = input.value.slice(0, -1); // Delete last character
    } else if (valute === "") {
      input.value += " "; // Add space
    } else if (valute === "entre") {
      alert("later......")
    }
    else if (valute === "maj") {
      input.value = input.value.toUpperCase(); // Convert to uppercase
      
    }
    
    else {
      input.value += valute; // Add character
    }

    song();
    confetti();
  });
});


document.getElementById("icone").addEventListener("click", function () {
  body.classList.toggle("corpus");
  let btn = document.querySelectorAll("button");
  btn.forEach((item) => {
    item.classList.toggle("buttons");
  });
});
