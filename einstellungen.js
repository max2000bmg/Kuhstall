// 🐮 KUHSTALL-EINSTELLUNGEN – NUR DIE WERTE RECHTS ÄNDERN.
// Zeitangaben sind Minuten seit Spielbeginn; letzte Zahl ist das Spielende.
window.KUHSTALL_EINSTELLUNGEN = {
  spielname: "KUHSTALL: AUSBRUCH 2026",
  minSpieler: 5,
  maxSpieler: 10,
  phasen: [5, 15, 25, 30], // Missionen, Infektion, Olympiade, Finale
  rollen: {
    ab8Spielern: 2, // Patient Null UND Detektive, sonst je 1
    unter8Spielern: 1
  },
  olympiadePunkte: 50,
  infektionsLimit: 2,
  punkteKorrektur: 50, // Betrag für den optionalen -Punkte-Button
  startVerzoegerungen: [2, 5, 10, 15]
};
