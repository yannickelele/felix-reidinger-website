# Neu bauen (nur nötig, wenn im Design-System-Projekt etwas geändert wurde)

Dieser Ordner ist die fertige Website. Er entsteht aus dem Design-System-Projekt:

| Ziel | Quelle |
| --- | --- |
| `styles.css` | `styles.css` + `tokens/*.css` + `css/*.css` (aneinandergehängt, Pfade auf `./assets/` umgeschrieben) |
| `app.js` | `components/**/*.jsx` + `ui_kits/website/{Start,Screens,Legal,Kontakt}.jsx` (nach JS übersetzt) |
| `assets/` | `assets/` (nur die verwendeten Dateien plus `assets/fonts/`; die drei Roh-Scans `texture-*` bleiben draußen) |
| `index.html` | `ui_kits/website/index.html`, ohne Babel-Laufzeit, mit React in der Produktionsversion |

Für kleine Text- oder Bildänderungen ist kein Neubau nötig — `app.js` und `assets/` lassen sich direkt bearbeiten.
