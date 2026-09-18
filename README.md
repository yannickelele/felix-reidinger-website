# felix-reidinger.de

Statische Website. Kein Build-Schritt, kein Node, keine Abhängigkeiten — Vercel lädt die Dateien hoch und liefert sie aus.

```
index.html            Startseite
performance/          /performance
netzwerk/             /netzwerk
kontakt/              /kontakt  (Terminformular)
impressum/            /impressum
datenschutz/          /datenschutz
app.js                Komponenten + Screens, fertig übersetzt
styles.css            komplettes Design-System, eine Datei
assets/               Logos, Papier-Hintergründe, Fotos, fonts/
vercel.json           Routing, Cache- und Security-Header
robots.txt            Suchmaschinen
sitemap.xml           Seitenliste
```

Jede Seite ist eine **echte URL mit fertigem Inhalt im Quelltext**. Suchmaschinen und Link-Vorschauen sehen den Text auch ohne JavaScript; das JavaScript übernimmt danach Animationen, Menü und Formular.

## Bei GitHub hochladen

```bash
git init
git add .
git commit -m "Website"
git branch -M main
git remote add origin https://github.com/DEIN-NAME/felix-reidinger.git
git push -u origin main
```

Wichtig: Der Inhalt dieses Ordners muss **im Wurzelverzeichnis** des Repositorys liegen — `index.html` direkt oben, nicht in einem Unterordner.

## Bei Vercel veröffentlichen

1. [vercel.com](https://vercel.com) → **Add New… → Project** → Repository auswählen
2. Framework Preset: **Other**
3. Build Command: **leer lassen**
4. Output Directory: **leer lassen** (bzw. `.`)
5. **Deploy**

Danach unter **Settings → Domains** `felix-reidinger.de` und `www.felix-reidinger.de` hinzufügen und die angezeigten DNS-Einträge beim Domain-Anbieter eintragen. Jeder weitere `git push` auf `main` veröffentlicht automatisch.

## Nach dem Livegang

1. **Google Search Console** einrichten (search.google.com/search-console), Domain bestätigen, `https://www.felix-reidinger.de/sitemap.xml` einreichen.
2. Prüfen, dass nur **eine** Variante erreichbar ist — entweder `www.` oder ohne. Vercel leitet automatisch um, sobald beide Domains eingetragen sind; die `canonical`-Angaben im Quelltext zeigen auf die `www.`-Variante. Wer das ohne `www.` möchte, ersetzt `origin` in `ui_kits/website/pages.js` und baut neu.
3. **Google Unternehmensprofil** anlegen (Stuttgart) — für lokale Suchanfragen der wirksamste einzelne Schritt.
4. Mit [PageSpeed Insights](https://pagespeed.web.dev) messen. Größter offener Posten sind die Schriftdateien, siehe `BUILD.md`.

## Was für SEO drin ist

- Eine eigene URL, ein eigener Title und eine eigene Description pro Seite
- Inhalt im Quelltext vorgerendert (kein „leere Seite ohne JavaScript")
- `canonical`, `robots`, Open-Graph- und Twitter-Karten pro Seite
- Strukturierte Daten: `ProfessionalService` mit Adresse, Telefon, Leistungskatalog und Person, dazu `WebPage` und `BreadcrumbList`
- Genau eine H1 pro Seite, lückenlose Überschriftenstruktur
- Beschreibende Alt-Texte für alle Bilder
- `sitemap.xml`, `robots.txt`, „Zum Inhalt springen"-Link, `lang="de"`
- Weiterleitungen von den alten Wix-Adressen (`/kopie-von-start` → `/performance`)

## Terminformular an ein Google Sheet anschließen

Das Formular unter „Termin vereinbaren" schreibt jede Anfrage als Zeile in ein Google Sheet. Dazwischen liegt ein Google Apps Script — kein Server, kein Zusatzdienst nötig.

**1. Sheet anlegen**, in Zeile 1 diese Spalten (Reihenfolge wichtig):

```
gesendet_am | name | email | unternehmen | telefon | thema | zeitfenster | nachricht | datenschutz | quelle
```

**2. Im Sheet: Erweiterungen → Apps Script.** Vorhandenen Code löschen, das hier einfügen, speichern:

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

**4. URL eintragen** — in **jeder** der sechs `index.html`-Dateien steht diese Zeile im `<head>`:

```html
<script>window.FR_SHEET_ENDPOINT='';</script>
```

Solange sie leer ist, prüft das Formular alle Eingaben und zeigt die Danke-Ansicht, sendet aber nichts.

Nach jeder Änderung am Apps Script muss eine **neue Bereitstellung** erstellt werden, sonst läuft weiter die alte Version.

## Inhalte ändern

- **Texte und Bilder**: stehen sowohl im jeweiligen `index.html` (vorgerendert) als auch in `app.js`. Beide Stellen ändern — oder neu bauen lassen, siehe `BUILD.md`.
- **Titel und Beschreibungen** für Suchmaschinen: `ui_kits/website/pages.js` im Design-System-Projekt.
- **Farben, Schriftgrößen, Abstände**: in `styles.css` oben bei den `--fr-*`-Variablen.
- **Schriften**: die Originalschriften liegen in `assets/fonts/` (BN Super-Sized, Wolfgang Bold Italic, Museo Sans 300/500/700). Keine externen Schrift-Dienste.
- **Logo**: `assets/logo-lockup-*.svg` (Kopfzeile, Footer) und `assets/logo-signet-kreis-*.svg` (Favicon). Vektor, Farbe pro Datei.

## Vor dem Live-Gang prüfen

- Datenschutzerklärung um einen Abschnitt zum Kontaktformular ergänzen (Daten liegen bei Google).
- Impressums- und Datenschutztexte rechtlich prüfen lassen.
- Prüfen, ob die Schriftlizenzen die Einbindung als Webfont abdecken (die Dateien sind über `/assets/fonts/` öffentlich abrufbar).
