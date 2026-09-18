# Neu bauen

Dieser Ordner ist die fertige Website. Er entsteht aus dem Design-System-Projekt:

| Ziel | Quelle |
| --- | --- |
| `styles.css` | `styles.css` + `tokens/*.css` + `css/*.css` (aneinandergehängt, Pfade auf `/assets/` umgeschrieben) |
| `app.js` | `components/**/*.jsx` + `ui_kits/website/{Start,Screens,Legal,Kontakt}.jsx` plus der Boot-Block (nach JS übersetzt) |
| `<seite>/index.html` | vorgerendertes Markup + Metadaten aus `ui_kits/website/pages.js` |
| `assets/` | `assets/` (nur die verwendeten Dateien plus `assets/fonts/`) |
| `sitemap.xml` | erzeugt aus `ui_kits/website/pages.js` |

## Wichtig beim Bearbeiten

Die HTML-Dateien enthalten den **fertigen Seiteninhalt im Quelltext** — das ist die Grundlage der Suchmaschinen-Optimierung. Wer Texte ändert, muss sie an zwei Stellen ändern (im HTML **und** in `app.js`) oder neu bauen lassen. Bei größeren Änderungen deshalb lieber neu bauen.

Titel, Beschreibungen und URLs stehen gesammelt in `ui_kits/website/pages.js` — eine Zeile pro Seite.

## Noch offen: Schriften als WOFF2

Die drei OTF-Dateien sind zusammen rund 1 MB. Als WOFF2 wären es etwa 250 KB. Umwandeln (einmalig, lokal):

```bash
npm i -g ttf2woff2
for f in assets/fonts/*.otf; do ttf2woff2 < "$f" > "${f%.otf}.woff2"; done
```

Danach in `styles.css` die `src:`-Zeilen auf `url("/assets/fonts/NAME.woff2") format("woff2")` umstellen und in jeder `index.html` die drei `<link rel="preload">` auf `.woff2` / `type="font/woff2"`.
