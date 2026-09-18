# Felix Reidinger — Design System

Personal brand of **Felix Reidinger**, freier Kommunikationsberater (B2B communication, Munich-based, working for industry and Mittelstand clients). The brand covers one public product surface — the marketing website **felix-reidinger.de** (Start, Performance Marketing, Netzwerk) — plus print/OOH applications (billboards, packaging, sachets, folders) shown as mockups in the style guide. Sven Tomschin works as a freelance partner inside the brand and appears on the Performance page; the shared mail domain is `fr-kommunikation.de`.

Positioning line: **„B2B-Kommunikation messbar erfolgreich."**

## Sources used

| Source | What was taken from it |
| --- | --- |
| `uploads/00_Style Guide.pdf` (Personal Brand Style Guide, 24.05.2026, 16 pages, by Samy Löwe — kontakt@samy-loewe.de / www.samy-loewe.com) | Logo system (Name, Name zweizeilig, Signet, Signet + Kreis, Name + Signet), clear-space rules (1 R / 4 R, 2 R lock-up gap), signet construction (10,7° Neigung, Strichstärke 35 T), full colour palette incl. CMYK, paper/cardboard textures, mockup style, font list |
| https://www.felix-reidinger.de (Wix site — Start, `/kopie-von-start` = Performance Marketing, `/netzwerk`) | All body and headline copy (verbatim), logo PNGs, photography, background textures, LinkedIn glyph, navigation structure |

No codebase or Figma file was provided. The site is built in Wix, so component source was not available; the UI kit is rebuilt from the rendered page content plus the style guide, not from screenshots of a code base.

## Index

- `styles.css` — the single entry point consumers link (imports only)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css`, `fonts.css`
- `css/` — `base.css` (element resets) and `components.css` (class API used by the components)
- `assets/` — logos (4 forms × 4 tones), paper grounds (`bg-*.jpg`) + raw scans, photography, LinkedIn glyph
- `guidelines/` — 27 specimen cards (Colors, Type, Brand, Spacing, Motion)
- `ui_kits/website/GOOGLE-SHEET.md` — how the Terminanfrage form writes into a Google Sheet
- `components/` — `core/`, `layout/`, `content/`, `navigation/`
- `ui_kits/website/` — click-through recreation of felix-reidinger.de (6 screens)
- `site/` — **deploybare Website** für GitHub + Vercel (statisch, kein Build-Schritt). Siehe `site/README.md`.
- `SKILL.md` — Agent-Skill wrapper

### Components

| Group | Components |
| --- | --- |
| `components/core` | `Logo`, `LogoLockup`, `Button`, `Badge`, `Eyebrow`, `DuoHeading`, `ArrowLink` |
| `components/layout` | `Section`, `Reveal`, `Marquee` |
| `components/content` | `KompetenzCard`, `StatBlock`, `PrincipleItem`, `MediaSplit`, `CtaPanel` |
| `components/navigation` | `NavBar`, `Footer` |
| `components/forms` | `Field`, `Input`, `Textarea`, `Select`, `Checkbox` |

The style guide is brand-guidelines-only (no component inventory), so this set is derived strictly from what the live website actually uses. **Intentional additions:** `Reveal` and `Marquee` (motion primitives — the live site animates on scroll, but has no named component for it), `LogoLockup` (the style guide's "Name + Signet" form as a convenience wrapper) and the `forms/` group (`Field`, `Input`, `Textarea`, `Select`, `Checkbox` — the live site has no form; these were added for the Terminanfrage page and follow the brand's hairline/pill vocabulary).

### UI kits

- `ui_kits/website/index.html` — Start / Performance / Netzwerk / Termin vereinbaren / Impressum / Datenschutz, click-through via the nav and footer. See `ui_kits/website/README.md`, and `ui_kits/website/GOOGLE-SHEET.md` for wiring the form to a Google Sheet.

## CONTENT FUNDAMENTALS

- **Language:** German throughout. Never mix English sentences in; single English terms are normal and stay untranslated (Performance Marketing, Pipeline, Leads, Nurturing, Set-up, Testing, Reporting, Account Based Marketing, Thinking big?).
- **Address:** informal **„du"** to the reader, first-person **„ich"** for Felix, **„wir"** when the network or the team with Sven is meant. Third person only when introducing Sven („Sven Tomschin ist freier Berater im Team von Felix Reidinger…"). No „Sie" anywhere, even though the meta description slips into it.
- **Gendering:** colon form — „Kund:innen", „Partner:innen", „Fachexpert:innen", „Spezialist:innen".
- **Sentence shape:** a question that names the reader's pain, then the offer. „Deine Contents sind top, jedoch erreichen sie nicht die richtigen Menschen? Wir setzen gemeinsam mit dir die passenden Marketing-Kanäle auf." Paragraphs are 2–4 sentences; em dashes and hyphens are used freely for the turn.
- **Headlines:** two to four words, split over two lines, one line in condensed caps and one in serif mixed case — „MESSBAR erfolgreich", „Starke Inhalte, VOLLE PIPELINE", „BERATUNG Strategie", „Thinking big?", „Sag einfach mal Hallo!". Casing in the source copy is inconsistent on purpose (the type does the emphasis, not the capitals).
- **Tone:** confident and blunt, warm at the edges, a dry joke where it fits — the style guide's own specimen reads „WER nicht mit Felix ARBEITET, IST selbst schuld!", and the CTA offers a „virtuelles Kaffee-Date" and to „beschnuppern". Never corporate-neutral, never hype.
- **Proof, not adjectives:** „10+ Jahre Erfahrung", „Nur rund 5 % der Unternehmen sind aktiv auf der Suche". Numbers are set as display type, not buried in prose.
- **CTAs:** verb first, no exclamation mark — „Termin vereinbaren", „Referenzen", „Netzwerk", „Performance Marketing". Buttons are uppercased by CSS, not by the copy.
- **Emoji:** none. Not in the guide, not on the site. Do not introduce any.

## VISUAL FOUNDATIONS

**Colour.** Four brand colours plus one accent: Beige `#F4EEE6` as the paper ground, Blau `#170F44` for text and deep bands, Lila II `#7044E6` as the primary accent surface, Lila I `#633593` as its hover/depth partner, Gelb `#F2F73A` as a signal colour (one element per view — a badge, never a text colour). The Verlauf runs Lila II → Lila I → Blau at 120°, and is reserved for large surfaces. Body copy is always Blau on Beige or Beige on Blau/Lila — never mid-purple on purple. At most two ground colours per page section sequence: beige → deep → beige.

**Type.** Three faces, all shipped as original OTFs in `assets/fonts/`: **BN Super-Sized** (display condensed, caps only, line-height 0.94), **Wolfgang Bold Italic** (display serif, drawn italic — it is the „FELIX" of the wordmark; `font-style: italic` would add a second, synthetic slant, so the italic face is mapped to both styles), **Museo Sans** (all running text). Headlines are **always set in caps** per the CD — write copy in sentence case and let `text-transform` do it. Both display faces carry `--descender-guard` (0.2em) of bottom room so J and Q never clip against a reveal mask or a rounded box. The recurring move is the *Duo-Headline*: one condensed caps line against one serif caps line. Labels and buttons are 13px Museo Sans Bold, uppercase, `0.16em` tracking. Body 17px/1.65, lead 20–22px/1.55, measure ≤ 64ch.

**Layout.** 1240px container (820px for narrow prose), gutter `clamp(20px,5vw,72px)`, section rhythm `clamp(72px,10vw,160px)`. Two-column image/text splits alternate side down the page and collapse to one column (image first) under 900px; the nav folds into a burger panel under 820px. The header is the only fixed element; everything else scrolls. Card grids are `auto-fit minmax(240px,1fr)`. Long-form legal copy uses the `.fr-prose` column at ≤74ch.

**Backgrounds and texture.** Never flat gradients-for-decoration. Grounds are either a brand colour or a photograph, and both carry the scanned paper from the style guide. The scans (`texture-paper.jpg`, `texture-paper-beige.png`, `texture-paper-lila.jpg`) are the source material; what the CSS actually uses are seamless 1024px tiles with the fibre **baked onto each brand colour** — `bg-beige-paper.jpg`, `bg-beige-cardboard.jpg`, `bg-lila-paper.jpg`, `bg-lila1-paper.jpg`, `bg-blau-paper.jpg` (tokens `--bg-paper`, `--bg-cardboard`, `--bg-lila-paper`, `--bg-lila1-paper`, `--bg-blau-paper`). Each tile's average colour is the exact brand hex, so no blend mode is needed and the grain renders identically everywhere. Tile them at `--texture-tile` (460px; cardboard at 340px) — stretching the tile past ~600px smooths the fibre away, which is what makes a paper ground look like flat colour. Over photography use `.fr-grain` instead: the neutral mid-grey tile `grain-tile.jpg` at soft-light 55%. Heroes are full-bleed photography under a top-and-bottom Blau gradient scrim plus that grain layer.

**Imagery.** Warm, natural available-light photography of real people at work — Felix and Sven in offices, workshops, studios; screens and dashboards for the analytics topics. Slight warm cast, mid contrast, no heavy grain, no black & white, no stock-gloss. People are mid-gesture and smiling, framed loosely. Photos sit in 14px-radius rectangles, `object-fit: cover`, 306×259 for cards.

**Cards.** Beige surface, 14px radius, no border, soft long shadow `0 18px 48px -24px rgba(23,15,68,.35)`; image on top, then a small Duo-Headline, then 15px body at 85% opacity. On hover the card lifts 6px, the shadow deepens, and the photo scales to 1.06 over 640ms.

**Corner radii.** 0 for full-bleed bands, 6px for swatches and small blocks, 14px for cards and photos, 28px for the CTA panel, pill (999px) for every button and badge, circle for the signet.

**Borders and shadows.** 1.5px hairlines only: Blau at 12% on beige, Beige at 16% on deep grounds (used for the numbered-principle separators and outline buttons). No inner shadows except the optional deep vignette token. No coloured left-border cards.

**Transparency and blur.** Exactly one blur in the system: the header frosts to `rgba(23,15,68,.82)` with a 14px backdrop blur after 40px of scroll. Text is never set in a semi-transparent colour for decoration; paragraph de-emphasis uses opacity 0.85 on full-colour text.

**Motion.** Slow, single-property, never bouncy. `--ease-brand: cubic-bezier(.16,.84,.26,1)`. Entrances: 900ms fade + 28px rise, or a mask-wipe upward for headlines; siblings stagger by 90ms. Hero image scales 1.08 → 1.0 over 1.6s and parallaxes at 0.12× scroll. One looping element per page (the keyword Marquee, 26s linear). Route changes fade up 12px over 520ms. `prefers-reduced-motion` disables all of it.

**Hover / press.** Buttons: fill darkens Lila II → Lila I, lift 2px, shadow appears, arrow glyph slides 4px right; press scales to 0.98. Links: 1.5px rule wipes in from the left in `currentColor`. Nav links sit at 72% opacity and go to 100% when active. Cards: lift + photo zoom. No colour-only hovers, no opacity-fade-to-50% hovers.

## ICONOGRAPHY

The brand is almost icon-free and that is deliberate. There is no icon font, no sprite sheet and no icon set in the style guide or on the site.

- The only real glyph asset is the **LinkedIn mark** (`assets/icon-linkedin.png`, copied from the live site footer) — LinkedIn is the brand's only social channel.
- Directional affordance is a plain **Unicode arrow „→"** typeset in Museo Sans inside buttons and links. Use that, not an SVG chevron.
- Numerals do the work icons would elsewhere: „1." „2." „3." in condensed display type for principle lists, „10+" for the experience figure.
- The **FR signet in its circle** is the only mark that may be used as an icon (favicon, avatar, social profile) — always from `assets/logo-signet-kreis-*.svg`, never redrawn.
- No emoji, no decorative unicode dingbats, no line-icon sets. If a future surface genuinely needs UI icons, pick one CDN set with a 1.5px stroke (Lucide is the closest match to the type's weight) and flag it as an addition — nothing in the current sources justifies one.

## Substitutions and gaps — please confirm

- **Fonts are the originals, complete.** `assets/fonts/` holds `BNSuper-Sized.otf`, `Wolfgang-BoldItalic.otf` and Museo Sans in 300 / 500 / 700, loaded via `@font-face` in `tokens/fonts.css`. Body copy runs at 300, leads and links at 500, labels and buttons at 700. Worth checking that the licences cover webfont embedding, since the OTFs are served publicly from the deployed site.
- **Logo assets** — the official lock-up (`06_FR-Logo-Name-Zweizeilig-Signet`) is in as vector: `assets/logo-lockup-{beige,blau,lila,weiss}.svg` plus `assets/logo-signet-kreis-*.svg` (the same artwork cropped to the circle, used as favicon and avatar). Tones are the one artwork recoloured; no mark was redrawn. Still missing as vector: the single-line „01 Name" form, the wordmark alone and the bare signet without its circle — those remain PNGs (`logo-name-zweizeilig-*.png`, `logo-signet-*.png`).
- **Referenzen / Impressum / Datenschutz** pages were not recreated (the Referenzen button on the Start screen routes to the Performance screen in the mock).
