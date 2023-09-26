function openNav() {
    document.getElementById("myNav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

function flipflop() {
  if (document.getElementById("search-bar").style.display === "none") {
    document.getElementById("search-bar").style.display = "block";
    document.getElementById("weather-applicatie").style.display = "none";
  } else {
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("weather-applicatie").style.display = "block";
  }
}

function popUp() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}