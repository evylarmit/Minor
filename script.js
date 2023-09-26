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

function popUp(place) {
  if(place == "plaza") {
    let popup = document.getElementById('plaza-popup');
    popup.classList.toggle("show");
  } else if(place == "airport") {
    let popup = document.getElementById('airport-popup');
    popup.classList.toggle("show");
  } else if(place == "market") {
    console.log("kk");
    let popup = document.getElementById('market-popup');
    popup.classList.toggle("show");
  } else if(place == "lake") {
    let popup = document.getElementById('lake-popup');
    popup.classList.toggle("show");
  } else if(place == "look-out") {
    let popup = document.getElementById('look-out-popup');
    popup.classList.toggle("show");
  } else if(place == "able-sisters") {
    let popup = document.getElementById('able-sisters-popup');
    popup.classList.toggle("show");
  } else if(place == "nooks-cranny") {
    let popup = document.getElementById('nooks-cranny-popup');
    popup.classList.toggle("show");
  } else if(place == "tree-sale") {
    let popup = document.getElementById('tree-sale-popup');
    popup.classList.toggle("show");
  } else if(place == "the-university") {
    let popup = document.getElementById('the-university-popup');
    popup.classList.toggle("show");
  } else if(place == "book-shop") {
    let popup = document.getElementById('book-shop-popup');
    popup.classList.toggle("show");
  } else if(place == "eko") {
    let popup = document.getElementById('eko-popup');
    popup.classList.toggle("show");
  } else if(place == "erik") {
    let popup = document.getElementById('erik-popup');
    popup.classList.toggle("show");
  } else if(place == "fauna") {
    let popup = document.getElementById('fauna-popup');
    popup.classList.toggle("show");
  } else if(place == "maple") {
    let popup = document.getElementById('maple-popup');
    popup.classList.toggle("show");
  } else if(place == "teddy") {
    let popup = document.getElementById('teddy-popup');
    popup.classList.toggle("show");
  } else if(place == "chevre") {
    let popup = document.getElementById('chevre-popup');
    popup.classList.toggle("show");
  } else if(place == "poppy") {
    let popup = document.getElementById('poppy-popup');
    popup.classList.toggle("show");
  } else if(place == "beau") {
    let popup = document.getElementById('beau-popup');
    popup.classList.toggle("show");
  } else if(place == "lolly") {
    let popup = document.getElementById('lolly-popup');
    popup.classList.toggle("show");
  } else if(place == "whitney") {
    let popup = document.getElementById('whitney-popup');
    popup.classList.toggle("show");
  } else if(place == "rudy") {
    let popup = document.getElementById('rudy-popup');
    popup.classList.toggle("show");
  } else if(place == "chocolate-milk-stand") {
    let popup = document.getElementById('chocolate-milk-stand-popup');
    popup.classList.toggle("show");
  } else if(place == "ice-rink") {
    let popup = document.getElementById('ice-rink-popup');
    popup.classList.toggle("show");
  }



  
}