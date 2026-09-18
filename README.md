# felix-reidinger.de

Statische Website. Kein Build-Schritt, kein Node, keine Abhängigkeiten — Vercel lädt die Dateien nur hoch und liefert sie aus.

```
index.html      Seite (alle Unterseiten laufen darin, über #/…)
app.js          Komponenten + Screens, fertig übersetzt
styles.css      komplettes Design-System, eine Datei
assets/         Logos, Papier-Hintergründe, Fotos, fonts/ (Markenschriften)
vercel.json     Routing, Cache- und Security-Header
robots.txt      Suchmaschinen
sitemap.xml     Seitenliste
```

## Bei GitHub hochladen

```bash
git init
git add .
git commit -m "Website"
git branch -M main
git remote add origin https://github.com/DEIN-NAME/felix-reidinger.git
git push -u origin main
```

Wichtig: Der Inhalt dieses Ordners muss **im Wurzelverzeichnis** des Repositorys liegen — also `index.html` direkt oben, nicht in einem Unterordner.

## Bei Vercel veröffentlichen

1. [vercel.com](https://vercel.com) → **Add New… → Project** → das Repository auswählen
2. Framework Preset: **Other**
3. Build Command: **leer lassen**
4. Output Directory: **leer lassen** (bzw. `.`)
5. **Deploy**

Danach unter **Settings → Domains** `felix-reidinger.de` und `www.felix-reidinger.de` hinzufügen und die angezeigten DNS-Einträge beim Domain-Anbieter eintragen. Jeder weitere `git push` auf `main` veröffentlicht automatisch.

## Terminformular an ein Google Sheet anschließen

Das Formular unter „Termin vereinbaren" schreibt jede Anfrage als Zeile in ein Google Sheet. Dazwischen liegt ein Google Apps Script — kein Server, kein Zusatzdienst nötig.

**1. Sheet anlegen**, in Zeile 1 diese Spalten (Reihenfolge wichtig):

```
gesendet_am | name | email | unternehmen | telefon | thema | zeitfenster | nachricht | datenschutz | quelle
```

**2. Im Sheet: Erweiterungen → Apps Script.** Vorhandenen Code löschen, das hier einfügen und speichern:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var d = JSON.parse(e.postData.contents);
  sheet.appendRow([
    d.gesendet_am || new Date().toISOString(),
    d.name || '', d.email || '', d.unternehmen || '', d.telefon || '',
    d.thema || '', d.zeitfenster || '', d.nachricht || '',
    d.datenschutz ? 'ja' : 'nein', d.quelle || ''
  ]);
  // Optional: Mail-Benachrichtigung
  // MailApp.sendEmail('hallo@felix-reidinger.de', 'Neue Terminanfrage von ' + d.name, d.nachricht);
  return ContentService.createTextOutput('ok');
}
```

**3. Bereitstellen → Neue Bereitstellung → Web-App**

- Ausführen als: **Ich**
- Zugriff: **Alle** (nötig, damit die Website ohne Login senden kann)

Berechtigung bestätigen, dann die URL kopieren (`https://script.google.com/macros/s/…/exec`).

**4. URL in `index.html` eintragen**, in diese Zeile im `<head>`:

```html
<script>window.FR_SHEET_ENDPOINT='';</script>
```

Solange die Zeile leer ist, prüft das Formular alle Eingaben und zeigt die Danke-Ansicht, sendet aber nichts.

Nach jeder Änderung am Apps Script muss eine **neue Bereitstellung** erstellt werden, sonst läuft weiter die alte Version.

## Inhalte ändern

- **Texte und Bilder**: in `app.js` suchen und ersetzen. Bilder in `assets/` austauschen, Dateinamen beibehalten.
- **Farben, Schriftgrößen, Abstände**: in `styles.css` oben bei den `--fr-*`-Variablen.
- **Schriften**: die Originalschriften liegen in `assets/fonts/` (BN Super-Sized, Wolfgang Bold Italic, Museo Sans Bold) und werden in `styles.css` per `@font-face` geladen. Keine externen Schrift-Dienste mehr. Von Museo Sans liegt nur der Bold-Schnitt vor; kommen die Schnitte 300/500 dazu, in `styles.css` zwei weitere `@font-face`-Regeln mit `font-weight:300` bzw. `500` ergänzen.

## Vor dem Live-Gang prüfen

- Datenschutzerklärung um einen Abschnitt zum Kontaktformular ergänzen (Daten liegen bei Google).
- Impressums- und Datenschutztexte rechtlich prüfen lassen.
- Prüfen, ob die Schriftlizenzen die Einbindung als Webfont abdecken (die OTF-Dateien sind über `/assets/fonts/` öffentlich abrufbar). Falls nicht, in webfont-spezifische Lizenzen wechseln.
