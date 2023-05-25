"use strict";

function computerPlay() {
  let zahlen = Math.floor(Math.random() * 3);
  let computerAuswahl;
  if (zahlen === 0) {
    computerAuswahl = "schere";
    ausgabeCom('schere');
  } else if (zahlen === 1) {
    computerAuswahl = "stein";
    ausgabeCom('stein');
  } else {
    computerAuswahl = "papier";
    ausgabeCom('papier');
  }

  return computerAuswahl;
}

function playRound(pChoice) {
  let spielerAuswahl = pChoice;
  let computerSelect = computerPlay();
  console.log(computerSelect);
  console.log("spieler", spielerAuswahl)
  let ergebnis;
  if (computerSelect === "schere" && spielerAuswahl === "schere") {
    ergebnis = 0;
  } else if (computerSelect === "schere" && spielerAuswahl === "stein") {
    ergebnis = 2;

  } else if (computerSelect === "schere" && spielerAuswahl === "papier") {
    ergebnis = 1;

  } else if (computerSelect === "stein" && spielerAuswahl === "stein") {
    ergebnis = 0;

  } else if (computerSelect === "stein" && spielerAuswahl === "schere") {
    ergebnis = 1;

  } else if (computerSelect === "stein" && spielerAuswahl === "papier") {
    ergebnis = 2;

  } else if (computerSelect === "papier" && spielerAuswahl === "papier") {
    ergebnis = 0;

  } else if (computerSelect === "papier" && spielerAuswahl === "schere") {
    ergebnis = 2;

  } else if (computerSelect === "papier" && spielerAuswahl == "stein") {
    ergebnis = 1;

  }
  rundensieg(ergebnis);
  points(ergebnis);
}

function rundensieg(sieger){
  let message = document.querySelector('#meldung');
  if(sieger == 2) {
    message.innerHTML = "Spieler gewinnt"
  } else if (sieger == 1) {
    message.innerHTML = "Computer gewinnt!"
  } else {
    message.innerHTML = "Unentschieden"
  }
}
function points(sieger){
  let comp = document.querySelector('#comP');
  let spieler = document.querySelector('#spielerP');
  if(sieger == 2){
    player++;
  }
  else if(sieger == 1){
    com++;
  }
  spieler.innerHTML = player;
  comp.innerHTML = com;
  sieg();

}

function sieg(){
  let message = document.querySelector('#meldung');
  if(player == 5){
    message.innerHTML = "Spieler gewinnt das Spiel"
  } else if(com == 5){
    message.innerHTML = "Computer gewinnt das Spiel!"
  }
}

function spiel() {
  const schere = document.querySelector('#schere')
  const papier = document.querySelector('#papier')
  const stein = document.querySelector('#stein')
  schere.addEventListener('click', () => {
    playRound('schere');
    ausgabe('schere');

  })
  papier.addEventListener('click', () => {
    playRound('papier');
    ausgabe('papier');

  })
  stein.addEventListener('click', () => {
    playRound('stein');
    ausgabe('stein');

  })
}

function ausgabe(zeichen) {
  let message = document.querySelector('#spielerA');

  if (zeichen == 'schere') {
    message.innerHTML = "Schere";
  }

  else if (zeichen == 'papier') {
    message.innerHTML = "Papier";
  }
  else {
    message.innerHTML = "Stein";
  }
}
function ausgabeCom(zeichencom) {
  let message = document.querySelector('#comA');
  if (zeichencom == 'schere') {
    message.innerHTML = "Schere";
  }

  else if (zeichencom == 'papier') {
    message.innerHTML = "Papier";
  }
  else {
    message.innerHTML = "Stein";
  }
}

function sieg(sieger) {
  if (sieger == 5) {
    console.log("Der Spieler hat gewonnen")
  }
  else if ( sieger == -5){
    console.log(("Der Computer hat gewonnen"));
  }
}
function meldung(){
  let message = document.querySelector('#meldung');

}

let player = 0;
let com = 0;
spiel();
