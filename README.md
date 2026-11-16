# KUHSTALL: AUSBRUCH 2026

Ein statisches Partyspiel für 5–10 Personen und 30 Minuten. Alle verwenden ihre eigenen Handys.

## GitHub Pages veröffentlichen

1. Neues öffentliches GitHub-Repository erstellen (z. B. `kuhstall-ausbruch-2026`).
2. `index.html` im Hauptverzeichnis hochladen.
3. Unter **Settings → Pages → Build and deployment** bei **Source** `Deploy from a branch` wählen, Branch `main`, Ordner `/ (root)`, speichern.
4. Die dort angezeigte HTTPS-Adresse aufrufen.
5. Auf der Webseite **Spielleitung: Runde vorbereiten** wählen, Spielerzahl und Startverzögerung festlegen.
6. Persönliche Links an Spieler verteilen, etwa per Nachricht oder über die angezeigten QR-Codes. Die Links enthalten die geheimen Rollen: nicht öffentlich posten.

## Spielregeln

- 0–5 Min.: geheime Rollen und Missionen
- 5–15 Min.: Infektionsübergaben per QR-Link
- 15–25 Min.: Olympiade + weitere Infektionen
- 25–30 Min.: Verdächtigungen und gemeinsames Finale

Die Rollen werden beim Erstellen der Runde gemischt. Bei 5–7 Spielern: 1 Patient Null, 1 Detektiv, Rest Stallbewohner. Bei 8–10: 2 Patient Null, 2 Detektive, Rest Stallbewohner.

## Technische Grenzen

- Keine Datenbank, kein zentraler Live-Spielstand, keine fälschungssicheren QR-Codes.
- Daten liegen nur im jeweiligen Browser (`localStorage`).
- QR-Code-Erstellung lädt `qrcodejs` über cdnjs. Bei fehlender Verbindung funktioniert weiterhin das Kopieren und Öffnen der Links.
- Für das Scannen genügt die normale Smartphone-Kamera, keine In-App-Kamera notwendig.
- Alle Geräte benötigen ungefähr korrekte Systemuhren.
- Die Spielleitung muss am Ende Punkte und Abstimmungen gemeinsam vergleichen.
- Persönliche Rollenlinks sind nicht kryptografisch geschützt. Fairplay ist Teil des Konzepts.

## Testen

Die Datei kann lokal geöffnet werden, aber die erzeugten Links funktionieren erst zuverlässig nach Veröffentlichung auf einer HTTPS-Webadresse. Mit zwei Browsern/Privatfenstern kann man mehrere Spieler simulieren.
