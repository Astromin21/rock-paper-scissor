"use strict";

function computerPlay() {
  let zahlen = Math.floor(Math.random() * 3);
  let computerAuswahl;
  if (zahlen === 0) {
    computerAuswahl = "schere";
  } else if (zahlen === 1) {
    computerAuswahl = "stein";
  } else {
    computerAuswahl = "papier";
  }

  return computerAuswahl;
}

function playRound() {
  let spielerEingabe = prompt("Wählen Sie zwischen Schere, Stein oder Papier!");
  let spielerAuswahl = spielerEingabe.toLocaleLowerCase();
  let computerSelect = computerPlay();
  let ergebnis;
  if (computerSelect === "schere" && spielerAuswahl === "schere") {
    ergebnis = 0;
    return ergebnis;
  } else if (computerSelect === "schere" && spielerAuswahl === "stein") {
    ergebnis = 2;
    return ergebnis;
  } else if (computerSelect === "schere" && spielerAuswahl === "papier") {
    ergebnis = 1;
    return ergebnis;
  } else if (computerSelect === "stein" && spielerAuswahl === "stein") {
    ergebnis = 0;
    return ergebnis;
  } else if (computerSelect === "stein" && spielerAuswahl === "schere") {
    ergebnis = 2;
    return ergebnis;
  } else if (computerSelect === "stein" && spielerAuswahl === "papier") {
    ergebnis = 1;
    return ergebnis;
  } else if (computerSelect === "papier" && spielerAuswahl === "papier") {
    ergebnis = 0;
    return ergebnis;
  } else if (computerSelect === "papier" && spielerAuswahl === "schere") {
    ergebnis = 2;
    return ergebnis;
  } else if (computerSelect === "papier" && spielerAuswahl == "stein") {
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
