// 🐮 HIER KANNST DU DIE SPIELINHALTE ÄNDERN.
// Alles zwischen Anführungszeichen ist der Missionstext.
// Die Zahl dahinter sind die Kuhpunkte.
// Wichtig: Zwischen zwei Missionen steht ein Komma.
// Die letzte Mission einer Liste braucht kein Komma.
//
// Beispiel für eine zusätzliche Mission:
// ['Bringe jemanden dazu, laut MUH zu rufen.', 100],
//
// cow = Stallbewohner, detective = Detektiv, virus = Infizierte.

const tasks={cow:[['Erfinde mit jemandem einen neuen Kuhstall-Spitznamen.',75],['Bring jemanden dazu, freiwillig „Euter“ in einem Satz zu sagen.',100],['Überzeuge zwei Personen, für 30 Sekunden nur im Dialekt zu sprechen.',125],['Finde jemanden, der mit dir einen 10-Sekunden-Stallschlager singt.',100],['Erhalte von drei Leuten ein High Five.',75],['Lass dir einen absurden Kuhwitz erzählen.',75],['Sammle drei unterschiedliche Kuhstall-Geräusche.',100],['Bring eine Person dazu, einen Traktor pantomimisch darzustellen.',100]],detective:[['Frage drei Personen, wen sie für verdächtig halten.',100],['Notiere dir zwei auffällige Gesprächssituationen.',75],['Finde jemanden, der sich auffällig für QR-Codes interessiert.',75],['Lass dir von zwei Personen ein Alibi für die letzten Minuten geben.',100],['Bringe jemanden dazu, seine eigene Unschuld zu verteidigen.',100],['Sammle drei verschiedene Verdächtigungen.',100]],virus:[['Bringe eine Person dazu, mit dir „Auf den Kuhstall!“ zu sagen.',100],['Lass dir freiwillig einen neuen Kuhnamen geben.',100],['Überzeuge jemanden, mit dir einen Kuhstall-Handshake zu machen.',100],['Bring jemanden dazu, vor dir ein Kuhgeräusch nachzumachen.',100],['Lass jemanden mit dir gemeinsam einen 5-Sekunden-Schlachtruf rufen.',125],['Bringe jemanden dazu, dir ein High Five zu geben.',75]]};
const olympics=[['MUH-BATTLE','Fordere eine Person heraus. Wer macht das überzeugendste Kuhgeräusch? Die Umstehenden entscheiden.'],['STALL-PANTOMIME','Stelle einen Traktor dar, ohne zu sprechen. Jemand muss ihn erraten.'],['WERBESPOT','Erfindet zu zweit eine 15-Sekunden-Werbung für einen imaginären Kuhstall-Energydrink.'],['STALL-HYMNE','Komponiere mit zwei anderen einen 10-Sekunden-Schlachtruf.'],['KÜHE IN ZEITLUPE','Fordere jemanden zu einem 15-Sekunden-Zeitlupen-Kuhgang heraus.']];

// Diese Zeile nicht löschen: Sie macht die Inhalte für app.js verfügbar.
window.KUHSTALL_INHALTE = { tasks, olympics };
