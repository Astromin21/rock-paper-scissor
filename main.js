"use strict";

function computerPlay() {
  let zahlen = Math.floor(Math.random() * 3);
  let computerAuswahl;
  if (zahlen === 0) {
    computerAuswahl = "Schere";
  } else if (zahlen === 1) {
    computerAuswahl = "Stein";
  } else {
    computerAuswahl = "Papier";
  }

  return computerAuswahl;
}

function playRound() {
  let spielerAuswahl = prompt("Wählen Sie zwischen Schere, Stein oder Papier!");
  let computerSelect = computerPlay();
  let ergebnis;
  if (computerSelect === "Schere" && spielerAuswahl === "Schere") {
    ergebnis = 0;
    return ergebnis;
  } else if (computerSelect === "Schere" && spielerAuswahl === "Stein") {
    ergebnis = 2;
    return ergebnis;
  } else if (computerSelect === "Schere" && spielerAuswahl === "Papier") {
    ergebnis = 1;
    return ergebnis;
  } else if (computerSelect === "Stein" && spielerAuswahl === "Stein") {
    ergebnis = 0;
    return ergebnis;
  } else if (computerSelect === "Stein" && spielerAuswahl === "Schere") {
    ergebnis = 2;
    return ergebnis;
  } else if (computerSelect === "Stein" && spielerAuswahl === "Papier") {
    ergebnis = 1;
    return ergebnis;
  } else if (computerSelect === "Papier" && spielerAuswahl === "Papier") {
    ergebnis = 0;
    return ergebnis;
  } else if (computerSelect === "Papier" && spielerAuswahl === "Schere") {
    ergebnis = 2;
    return ergebnis;
  } else if (computerSelect === "Papier" && spielerAuswahl == "Stein") {
    ergebnis = 1;
    return ergebnis;
  }
}

function game() {
  let computer = 0;
  let spieler = 0;
  let unentschieden = 0;
  for (let i = 0; i < 5; i++) {
    let spiele = playRound();

    if (spiele === 1) {
      computer++;
      console.log("Der Computer hat dieses mal gewonnen!");
    } else if (spiele === 2) {
      spieler++;
      console.log("Der Spieler hat dieses mal gewonnen!");
    } else if (spiele === 0) {
      unentschieden++;
      console.log("Dieses Spiel ist unentschieden!");
    }
  }
  if (computer > spieler) {
    console.log("Der Computer gewinnt mit " + String(computer) + " Punkten!");
  } else if (spieler < computer) {
    console.log("Der Spieler gewinnt mit " + String(spieler) + " Punkten!");
  } else if (unentschieden > spieler && unentschieden > computer) {
    console.log("Das Spiel ist unentschieden!");
  }
}
