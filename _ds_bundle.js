/* @ds-bundle: {"format":4,"namespace":"FelixReidingerDesignSystem_5335cf","components":[{"name":"CtaPanel","sourcePath":"components/content/CtaPanel.jsx"},{"name":"KompetenzCard","sourcePath":"components/content/KompetenzCard.jsx"},{"name":"MediaSplit","sourcePath":"components/content/MediaSplit.jsx"},{"name":"PrincipleItem","sourcePath":"components/content/PrincipleItem.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DuoHeading","sourcePath":"components/core/DuoHeading.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"LogoLockup","sourcePath":"components/core/Logo.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Field.jsx"},{"name":"Textarea","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Field.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Field.jsx"},{"name":"Marquee","sourcePath":"components/layout/Marquee.jsx"},{"name":"Reveal","sourcePath":"components/layout/Reveal.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/CtaPanel.jsx":"d75d47e5403e","components/content/KompetenzCard.jsx":"9303e405a4f9","components/content/MediaSplit.jsx":"e7ade8a7e031","components/content/PrincipleItem.jsx":"b6731afdd9a7","components/content/StatBlock.jsx":"640f6ae1f5d0","components/core/ArrowLink.jsx":"8d62819f7b9a","components/core/Badge.jsx":"a482d7369976","components/core/Button.jsx":"c195c8f79609","components/core/DuoHeading.jsx":"f59d2d53144a","components/core/Logo.jsx":"f789ec8a470b","components/forms/Field.jsx":"9bc09b47559b","components/layout/Marquee.jsx":"16d5f6acd816","components/layout/Reveal.jsx":"b31f15acabc6","components/layout/Section.jsx":"571340a00944","components/navigation/Footer.jsx":"c0f6775d4688","components/navigation/NavBar.jsx":"e1b1a0f9aaa7","site/app.js":"b7cd3240309e","ui_kits/website/Kontakt.jsx":"7b20318f15a8","ui_kits/website/Legal.jsx":"1cad7289f30e","ui_kits/website/Screens.jsx":"b32f01e7175c","ui_kits/website/Start.jsx":"fb9e2af24a2f","ui_kits/website/ds-dev-fallback.js":"82bba5110b16"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FelixReidingerDesignSystem_5335cf = window.FelixReidingerDesignSystem_5335cf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/MediaSplit.jsx
try { (() => {
/** Two-column band: photo on one side, heading + copy on the other. */
function MediaSplit({
  image,
  alt = '',
  reverse = false,
  children,
  media,
  gap = 'var(--space-8)',
  ratio = '1fr 1fr',
  style,
  className = ''
}) {
  const pic = media || (image ? React.createElement('img', {
    src: image,
    alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--radius-m)'
    }
  }) : null);
  const cols = [React.createElement('div', {
    key: 'm',
    className: 'fr-split__media',
    style: {
      order: reverse ? 2 : 1
    }
  }, pic), React.createElement('div', {
    key: 'c',
    className: 'fr-split__body',
    style: {
      order: reverse ? 1 : 2
    }
  }, children)];
  return React.createElement('div', {
    className: `fr-split ${className}`.trim(),
    style: {
      '--split-cols': ratio,
      '--split-gap': gap,
      ...style
    }
  }, cols);
}
Object.assign(__ds_scope, { MediaSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MediaSplit.jsx", error: String((e && e.message) || e) }); }

// components/content/PrincipleItem.jsx
try { (() => {
/** Numbered principle row: big condensed numeral, rule, statement. */
function PrincipleItem({
  number,
  children,
  size = 'lg',
  style,
  className = ''
}) {
  return React.createElement('div', {
    className: `fr-principle fr-principle--${size} ${className}`.trim(),
    style
  }, React.createElement('div', {
    key: 'n',
    className: 'fr-principle__num'
  }, number), React.createElement('p', {
    key: 'p',
    className: 'fr-principle__text'
  }, children));
}
Object.assign(__ds_scope, { PrincipleItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PrincipleItem.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
/** Oversized number with a condensed label above it (e.g. 10+ Jahre Erfahrung). */
function StatBlock({
  value,
  label,
  children,
  align = 'left',
  style,
  className = ''
}) {
  return React.createElement('div', {
    className,
    style: {
      textAlign: align,
      ...style
    }
  }, React.createElement('div', {
    key: 'l',
    className: 'fr-eyebrow',
    style: {
      display: 'block',
      marginBottom: 'var(--space-3)'
    }
  }, label), React.createElement('div', {
    key: 'v',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-display-l)',
      lineHeight: .95,
      textTransform: 'uppercase'
    }
  }, value), children ? React.createElement('p', {
    key: 'p',
    style: {
      maxWidth: '46ch',
      marginTop: 'var(--space-5)'
    }
  }, children) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function ArrowLink({
  children,
  href = '#',
  arrow = true,
  style,
  className = '',
  onClick
}) {
  return React.createElement('a', {
    href,
    onClick,
    className: `fr-link ${className}`.trim(),
    style
  }, children, arrow ? React.createElement('span', {
    key: 'a',
    'aria-hidden': true
  }, '→') : null);
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'dark',
  outline = false,
  style,
  className = ''
}) {
  return React.createElement('span', {
    className: `fr-badge fr-badge--${tone} ${outline ? 'fr-badge--outline' : ''} ${className}`.trim(),
    style
  }, children);
}
function Eyebrow({
  children,
  style,
  className = ''
}) {
  return React.createElement('span', {
    className: `fr-eyebrow ${className}`.trim(),
    style
  }, children);
}
Object.assign(__ds_scope, { Badge, Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  disabled,
  onClick,
  style,
  className = '',
  type = 'button'
}) {
  const cls = `fr-btn fr-btn--${variant} fr-btn--${size} ${className}`.trim();
  const kids = [children];
  if (arrow) kids.push(React.createElement('span', {
    className: 'fr-btn__arrow',
    key: 'a',
    'aria-hidden': true
  }, '→'));
  if (href && !disabled) return React.createElement('a', {
    href,
    className: cls,
    style,
    onClick
  }, kids);
  return React.createElement('button', {
    type,
    className: cls,
    style,
    disabled,
    onClick
  }, kids);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DuoHeading.jsx
try { (() => {
/** Registry of fitting headings per group element, so a row of cards can settle
 *  on one shared size instead of each heading shrinking on its own. */
const GROUPS = new WeakMap();
function measure(line) {
  const range = document.createRange();
  range.selectNodeContents(line);
  const w = range.getBoundingClientRect().width;
  if (range.detach) range.detach();
  return w;
}
function applyGroup(group) {
  const members = GROUPS.get(group);
  if (!members || !members.size) return;
  let scale = 1;
  members.forEach(el => {
    const avail = el.clientWidth;
    if (!avail) return;
    [...el.children].forEach(line => {
      const base = parseFloat(line.dataset.frBase || 0);
      if (!base) return;
      line.style.fontSize = base + 'px';
      const w = measure(line);
      if (w > avail) scale = Math.min(scale, avail / w * 0.985);
    });
  });
  scale = Math.max(scale, 0.5);
  members.forEach(el => {
    [...el.children].forEach(line => {
      const base = parseFloat(line.dataset.frBase || 0);
      if (base) line.style.fontSize = base * scale + 'px';
    });
  });
}

/** Shrinks headline lines just enough to sit on one line. Headings inside the
 *  same [data-fit-group] all take the smallest required size, so a card row
 *  stays typographically even. Only ever scales down. */
function useFitLines(ref, enabled, deps) {
  React.useLayoutEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    const group = el.closest('[data-fit-group]') || el;
    const readBase = () => {
      [...el.children].forEach(line => {
        line.style.fontSize = '';
        line.dataset.frBase = parseFloat(getComputedStyle(line).fontSize);
      });
    };
    const run = () => {
      readBase();
      applyGroup(group);
    };
    let members = GROUPS.get(group);
    if (!members) {
      members = new Set();
      GROUPS.set(group, members);
    }
    members.add(el);
    run();
    const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(run) : null;
    if (ro) ro.observe(group);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
    window.addEventListener('resize', run);
    return () => {
      members.delete(el);
      if (ro) ro.disconnect();
      window.removeEventListener('resize', run);
    };
  }, deps);
}

/** The brand's headline motif: one line condensed (BN Super-Sized),
 *  one line serif (Wolfgang). Either line may come first. */
function DuoHeading({
  top,
  bottom,
  order = 'cond-serif',
  size = 'l',
  italic = false,
  align = 'left',
  fit = false,
  as = 'h2',
  style,
  className = ''
}) {
  const ref = React.useRef(null);
  useFitLines(ref, fit, [fit, top, bottom, size, order]);
  const serif = React.createElement('span', {
    key: 's',
    className: `fr-duo__serif ${italic ? 'fr-duo__serif--italic' : ''}`.trim()
  }, order === 'cond-serif' ? bottom : top);
  const cond = React.createElement('span', {
    key: 'c',
    className: 'fr-duo__cond'
  }, order === 'cond-serif' ? top : bottom);
  return React.createElement(as, {
    ref,
    className: `fr-duo fr-duo--${size} ${fit ? 'fr-duo--fit' : ''} ${className}`.trim(),
    style: {
      textAlign: align,
      ...style
    }
  }, order === 'cond-serif' ? [cond, serif] : [serif, cond]);
}
Object.assign(__ds_scope, { DuoHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DuoHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/CtaPanel.jsx
try { (() => {
/** Closing call-to-action panel on a Lila II ground with paper texture. */
function CtaPanel({
  top = 'Erstgespräch',
  bottom = 'vereinbaren',
  children,
  cta = 'Termin vereinbaren',
  href = 'mailto:hallo@felix-reidinger.de',
  onCta,
  style,
  className = ''
}) {
  return React.createElement('div', {
    className,
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-l)',
      background: 'var(--fr-lila-2)',
      color: 'var(--text-on-accent)',
      padding: 'clamp(40px,6vw,88px)',
      ...style
    }
  }, React.createElement('div', {
    key: 't',
    className: 'fr-ground fr-ground--lila'
  }), React.createElement('div', {
    key: 'c',
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '62ch'
    }
  }, React.createElement(__ds_scope.DuoHeading, {
    key: 'h',
    top,
    bottom,
    size: 'l',
    order: 'cond-serif',
    fit: true,
    style: {
      marginBottom: 'var(--space-5)'
    }
  }), children ? React.createElement('p', {
    key: 'p',
    style: {
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--lh-lead)',
      maxWidth: '48ch'
    }
  }, children) : null, React.createElement(__ds_scope.Button, {
    key: 'b',
    href: onCta ? undefined : href,
    onClick: onCta ? e => {
      e.preventDefault();
      onCta(e);
    } : undefined,
    variant: 'light',
    size: 'lg',
    arrow: true,
    style: {
      marginTop: 'var(--space-6)'
    }
  }, cta)));
}
Object.assign(__ds_scope, { CtaPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CtaPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/KompetenzCard.jsx
try { (() => {
/** Image-topped competence card: photo, duo heading, short paragraph. */
function KompetenzCard({
  image,
  alt = '',
  top,
  bottom,
  children,
  tone = 'paper',
  href,
  style,
  className = ''
}) {
  const body = [React.createElement(__ds_scope.DuoHeading, {
    key: 'h',
    as: 'h3',
    size: 's',
    top,
    bottom,
    order: 'cond-serif',
    fit: true,
    style: {
      marginBottom: 'var(--space-3)'
    }
  }), React.createElement('p', {
    key: 'p',
    style: {
      margin: 0,
      fontSize: 'var(--size-small)',
      lineHeight: 'var(--lh-body)',
      opacity: .85
    }
  }, children)];
  const kids = [image ? React.createElement('div', {
    key: 'm',
    className: 'fr-card__media'
  }, React.createElement('img', {
    src: image,
    alt
  })) : null, React.createElement('div', {
    key: 'b',
    className: 'fr-card__body'
  }, body)];
  const cls = `fr-card ${tone === 'deep' ? 'fr-card--deep' : ''} ${className}`.trim();
  return href ? React.createElement('a', {
    href,
    className: cls,
    style: {
      display: 'block',
      color: 'inherit',
      ...style
    }
  }, kids) : React.createElement('div', {
    className: cls,
    style
  }, kids);
}
Object.assign(__ds_scope, { KompetenzCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/KompetenzCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
// Offizielle Logodateien. Lock-up und Signet liegen als Vektor vor (aus dem CD),
// die reine Wortmarke bislang nur als PNG.
const FILES = {
  lockup: t => `logo-lockup-${t}.svg`,
  kreis: t => `logo-signet-kreis-${t}.svg`,
  signet: t => `logo-signet-${t}.png`,
  wordmark: t => `logo-name-zweizeilig-${t}.png`
};
function Logo({
  variant = 'lockup',
  tone = 'beige',
  height = 40,
  alt = 'Felix Reidinger',
  style,
  className
}) {
  const base = typeof window !== 'undefined' && window.FR_ASSET_BASE || '../../assets';
  const file = (FILES[variant] || FILES.lockup)(tone);
  return React.createElement('img', {
    src: `${base}/${file}`,
    alt,
    className,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
function LogoLockup({
  tone = 'beige',
  height = 40,
  style
}) {
  return React.createElement(Logo, {
    variant: 'lockup',
    tone,
    height,
    style
  });
}
Object.assign(__ds_scope, { Logo, LogoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Label + control wrapper with error and hint slots. */
function Field({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  style,
  className = ''
}) {
  return React.createElement('div', {
    className: `fr-field ${error ? 'is-error' : ''} ${className}`.trim(),
    style
  }, label ? React.createElement('label', {
    key: 'l',
    className: 'fr-field__label',
    htmlFor
  }, label, required ? React.createElement('span', {
    key: 'r',
    'aria-hidden': true,
    style: {
      color: 'var(--fr-lila-2)'
    }
  }, ' *') : null) : null, children, error ? React.createElement('span', {
    key: 'e',
    className: 'fr-field__msg fr-field__msg--error'
  }, error) : hint ? React.createElement('span', {
    key: 'h',
    className: 'fr-field__msg'
  }, hint) : null);
}
function Input({
  type = 'text',
  invalid,
  style,
  className = '',
  ...rest
}) {
  return React.createElement('input', {
    type,
    className: `fr-input ${invalid ? 'is-invalid' : ''} ${className}`.trim(),
    style,
    ...rest
  });
}
function Textarea({
  rows = 5,
  invalid,
  style,
  className = '',
  ...rest
}) {
  return React.createElement('textarea', {
    rows,
    className: `fr-input fr-input--area ${invalid ? 'is-invalid' : ''} ${className}`.trim(),
    style,
    ...rest
  });
}
function Select({
  options = [],
  placeholder,
  invalid,
  style,
  className = '',
  ...rest
}) {
  return React.createElement('div', {
    className: 'fr-select'
  }, React.createElement('select', {
    className: `fr-input ${invalid ? 'is-invalid' : ''} ${className}`.trim(),
    style,
    ...rest
  }, placeholder ? React.createElement('option', {
    key: '_',
    value: ''
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return React.createElement('option', {
      key: value,
      value
    }, label);
  })), React.createElement('span', {
    className: 'fr-select__arrow',
    'aria-hidden': true
  }, '▾'));
}
function Checkbox({
  label,
  children,
  invalid,
  style,
  className = '',
  ...rest
}) {
  return React.createElement('label', {
    className: `fr-check ${invalid ? 'is-invalid' : ''} ${className}`.trim(),
    style
  }, React.createElement('input', {
    type: 'checkbox',
    ...rest
  }), React.createElement('span', {
    className: 'fr-check__box',
    'aria-hidden': true
  }), React.createElement('span', {
    className: 'fr-check__label'
  }, label || children));
}
Object.assign(__ds_scope, { Field, Input, Textarea, Select, Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/layout/Marquee.jsx
try { (() => {
/** Endless horizontal band — used for the competence keyword ticker.
 *  The item list is repeated until one track is at least as wide as the band,
 *  so the row never runs dry on wide screens. */
function Marquee({
  items = [],
  tone = 'deep',
  speed = 26,
  style,
  className = ''
}) {
  const hostRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const [reps, setReps] = React.useState(2);
  React.useEffect(() => {
    const fit = () => {
      const host = hostRef.current,
        track = trackRef.current;
      if (!host || !track) return;
      const one = track.scrollWidth / reps;
      if (!one) return;
      const needed = Math.max(2, Math.ceil(host.offsetWidth / one) + 1);
      if (needed !== reps) setReps(needed);
    };
    fit();
    const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(fit) : null;
    if (ro && hostRef.current) ro.observe(hostRef.current);
    window.addEventListener('resize', fit);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [reps, items.length]);
  const cells = [];
  for (let r = 0; r < reps; r++) {
    items.forEach((it, i) => cells.push(React.createElement('span', {
      key: r + '-' + i,
      style: {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        fontSize: 'var(--size-display-s)',
        lineHeight: 1.1,
        whiteSpace: 'nowrap',
        opacity: i % 2 ? .45 : 1
      }
    }, it)));
  }
  const track = key => React.createElement('div', {
    key,
    ref: key === 'a' ? trackRef : undefined,
    className: 'fr-marquee__track',
    style: {
      animationDuration: speed * reps / 2 + 's'
    },
    'aria-hidden': key === 'b'
  }, cells);
  return React.createElement('div', {
    ref: hostRef,
    className: `fr-marquee ${className}`.trim(),
    style: {
      background: tone === 'deep' ? 'var(--fr-blau)' : tone === 'accent' ? 'var(--fr-lila-2)' : 'var(--fr-beige)',
      color: tone === 'paper' ? 'var(--fr-blau)' : 'var(--fr-beige)',
      paddingBlock: 'var(--space-5)',
      ...style
    }
  }, [track('a'), track('b')]);
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/layout/Reveal.jsx
try { (() => {
/** Scroll-triggered reveal. Fades + lifts (or clip-path wipes) its children once. */
function Reveal({
  children,
  delay = 0,
  mode = 'lift',
  as = 'div',
  style,
  className = '',
  threshold = 0.18
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    // Anything already on screen reveals right away, and a safety timer guarantees
    // content appears even if IntersectionObserver never fires (hidden/background
    // documents, prerender, unsupported environments).
    const box = el.getBoundingClientRect();
    if (box.top < (window.innerHeight || 0) && box.bottom > 0) {
      setInView(true);
      return;
    }
    let io;
    const timer = setTimeout(() => {
      setInView(true);
      if (io) io.disconnect();
    }, 1600);
    const show = () => {
      clearTimeout(timer);
      setInView(true);
      if (io) io.disconnect();
    };
    if (typeof IntersectionObserver === 'function') {
      io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) show();
        });
      }, {
        threshold,
        rootMargin: '0px 0px -8% 0px'
      });
      io.observe(el);
    }
    const onVisible = () => {
      const b = el.getBoundingClientRect();
      if (document.visibilityState === 'visible' && b.top < window.innerHeight && b.bottom > 0) show();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearTimeout(timer);
      if (io) io.disconnect();
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [inView, threshold]);
  if (mode === 'mask') {
    return React.createElement(as, {
      ref,
      className: `fr-mask ${inView ? 'is-in' : ''} ${className}`.trim(),
      style: {
        ...style
      }
    }, React.createElement('div', {
      style: {
        transitionDelay: delay + 'ms'
      }
    }, children));
  }
  return React.createElement(as, {
    ref,
    className: `fr-reveal ${inView ? 'is-in' : ''} ${className}`.trim(),
    style: {
      transitionDelay: delay + 'ms',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
// Each ground is the real paper scan baked onto the brand colour (see tokens/effects.css).
const GROUNDS = {
  paper: 'paper',
  cardboard: 'cardboard',
  lila: 'lila',
  lila1: 'lila1',
  blau: 'blau'
};

/** Full-bleed band with optional brand paper texture and a centred container. */
function Section({
  children,
  tone = 'paper',
  texture,
  id,
  width = 'wide',
  style,
  innerStyle,
  className = ''
}) {
  const layers = [];
  // "lila" on a deep band means the blau paper ground — the live site's dark sections
  // are textured blau, not purple.
  const ground = texture === 'lila' && tone === 'deep' ? 'blau' : GROUNDS[texture];
  if (ground) layers.push(React.createElement('div', {
    key: 't',
    className: `fr-ground fr-ground--${ground}`
  }));
  layers.push(React.createElement('div', {
    key: 'i',
    className: 'fr-section__inner',
    style: {
      maxWidth: width === 'narrow' ? 'var(--container-narrow)' : 'var(--container)',
      ...innerStyle
    }
  }, children));
  return React.createElement('section', {
    id,
    className: `fr-section fr-section--${tone} ${className}`.trim(),
    style
  }, layers);
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/** Site footer on a Lila II texture strip: legal links, mail address, LinkedIn. */
function Footer({
  links = [{
    label: 'Impressum',
    href: '#'
  }, {
    label: 'Datenschutz',
    href: '#'
  }],
  onNavigate,
  mail = 'felix@fr-kommunikation.de',
  linkedin = 'https://www.linkedin.com/in/felix-reidinger/',
  copyright = '© 2026 Felix Reidinger-Tomschin',
  style,
  className = ''
}) {
  const base = typeof window !== 'undefined' && window.FR_ASSET_BASE || '../../assets';
  const item = s => ({
    fontSize: 'var(--size-small)',
    color: 'inherit',
    opacity: s ? 1 : .8
  });
  return React.createElement('footer', {
    className,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--fr-lila-2)',
      color: 'var(--fr-beige)',
      padding: 'var(--space-7) var(--gutter)',
      ...style
    }
  }, React.createElement('div', {
    key: 't',
    className: 'fr-ground fr-ground--lila'
  }), React.createElement('div', {
    key: 'i',
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-6)',
      justifyContent: 'space-between'
    }
  }, React.createElement(__ds_scope.LogoLockup, {
    key: 'l',
    tone: 'beige',
    height: 34
  }), React.createElement('div', {
    key: 'n',
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, links.map(l => React.createElement('a', {
    key: l.label,
    href: l.href || '#',
    style: item(false),
    onClick: e => {
      if (onNavigate && l.id) {
        e.preventDefault();
        onNavigate(l.id);
      }
    }
  }, l.label)), React.createElement('a', {
    key: 'm',
    href: 'mailto:' + mail,
    style: item(true)
  }, mail), React.createElement('a', {
    key: 'li',
    href: linkedin,
    'aria-label': 'LinkedIn'
  }, React.createElement('img', {
    src: base + '/icon-linkedin.png',
    alt: 'LinkedIn',
    width: 22,
    height: 22,
    style: {
      opacity: .9
    }
  }))), React.createElement('span', {
    key: 'c',
    style: {
      fontSize: 'var(--size-label)',
      opacity: .7,
      width: '100%'
    }
  }, copyright)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** Fixed top bar. Transparent over the hero, frosted Blau once scrolled. */
function NavBar({
  links = [],
  active,
  onNavigate,
  cta = 'Termin vereinbaren',
  ctaHref = 'mailto:hallo@felix-reidinger.de',
  ctaId,
  tone = 'beige',
  style,
  className = ''
}) {
  const [stuck, setStuck] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const el = typeof document !== 'undefined' ? document.scrollingElement || document.documentElement : null;
    const host = document.querySelector('[data-fr-scroll]') || window;
    const read = () => setStuck((host === window ? el.scrollTop : host.scrollTop) > 40);
    host.addEventListener('scroll', read, {
      passive: true
    });
    read();
    return () => host.removeEventListener('scroll', read);
  }, []);
  const nav = id => {
    setOpen(false);
    if (onNavigate) onNavigate(id);
  };
  return React.createElement('header', {
    className: `fr-nav ${stuck || open ? 'is-stuck' : ''} ${open ? 'is-open' : ''} ${className}`.trim(),
    style: {
      color: tone === 'beige' ? 'var(--fr-beige)' : 'var(--fr-blau)',
      ...style
    }
  }, React.createElement('a', {
    key: 'l',
    href: '#top',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate('start');
      }
    },
    style: {
      display: 'inline-flex'
    }
  }, React.createElement(__ds_scope.LogoLockup, {
    tone,
    height: stuck ? 26 : 32,
    style: {
      transition: 'all var(--dur-base) var(--ease-brand)'
    }
  })), React.createElement('button', {
    key: 'b',
    type: 'button',
    className: 'fr-nav__burger',
    'aria-label': open ? 'Menü schließen' : 'Menü öffnen',
    'aria-expanded': open,
    onClick: () => setOpen(!open)
  }, React.createElement('span', {
    className: 'fr-nav__burger-box'
  }, React.createElement('i', null), React.createElement('i', null), React.createElement('i', null))), React.createElement('nav', {
    key: 'n',
    className: 'fr-nav__links'
  }, links.map(l => React.createElement('a', {
    key: l.id || l.label,
    href: l.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        nav(l.id);
      } else {
        setOpen(false);
      }
    },
    className: 'fr-link',
    style: {
      color: 'inherit',
      opacity: active && l.id === active ? 1 : .72
    }
  }, l.label)), React.createElement(__ds_scope.Button, {
    key: 'c',
    href: ctaId && onNavigate ? undefined : ctaHref,
    onClick: ctaId && onNavigate ? e => {
      e.preventDefault();
      nav(ctaId);
    } : undefined,
    variant: tone === 'beige' ? 'light' : 'primary',
    size: 'sm'
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// site/app.js
try { (() => {
/* Felix Reidinger — felix-reidinger.de
   Generated from the design-system project (components/ + ui_kits/website/).
   Edit the sources there and rebuild; do not hand-edit this file. */
(function () {
  'use strict';

  var React = window.React,
    ReactDOM = window.ReactDOM;

  // Offizielle Logodateien. Lock-up und Signet liegen als Vektor vor (aus dem CD),
  // die reine Wortmarke bislang nur als PNG.
  const FILES = {
    lockup: t => `logo-lockup-${t}.svg`,
    kreis: t => `logo-signet-kreis-${t}.svg`,
    signet: t => `logo-signet-${t}.png`,
    wordmark: t => `logo-name-zweizeilig-${t}.png`
  };
  function Logo({
    variant = 'lockup',
    tone = 'beige',
    height = 40,
    alt = 'Felix Reidinger',
    style,
    className
  }) {
    const base = typeof window !== 'undefined' && window.FR_ASSET_BASE || '../../assets';
    const file = (FILES[variant] || FILES.lockup)(tone);
    return React.createElement('img', {
      src: `${base}/${file}`,
      alt,
      className,
      style: {
        height,
        width: 'auto',
        display: 'block',
        ...style
      }
    });
  }
  function LogoLockup({
    tone = 'beige',
    height = 40,
    style
  }) {
    return React.createElement(Logo, {
      variant: 'lockup',
      tone,
      height,
      style
    });
  }
  function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    arrow = false,
    disabled,
    onClick,
    style,
    className = '',
    type = 'button'
  }) {
    const cls = `fr-btn fr-btn--${variant} fr-btn--${size} ${className}`.trim();
    const kids = [children];
    if (arrow) kids.push(React.createElement('span', {
      className: 'fr-btn__arrow',
      key: 'a',
      'aria-hidden': true
    }, '→'));
    if (href && !disabled) return React.createElement('a', {
      href,
      className: cls,
      style,
      onClick
    }, kids);
    return React.createElement('button', {
      type,
      className: cls,
      style,
      disabled,
      onClick
    }, kids);
  }
  function Badge({
    children,
    tone = 'dark',
    outline = false,
    style,
    className = ''
  }) {
    return React.createElement('span', {
      className: `fr-badge fr-badge--${tone} ${outline ? 'fr-badge--outline' : ''} ${className}`.trim(),
      style
    }, children);
  }
  function Eyebrow({
    children,
    style,
    className = ''
  }) {
    return React.createElement('span', {
      className: `fr-eyebrow ${className}`.trim(),
      style
    }, children);
  }

  /** Registry of fitting headings per group element, so a row of cards can settle
   *  on one shared size instead of each heading shrinking on its own. */
  const GROUPS = new WeakMap();
  function measure(line) {
    const range = document.createRange();
    range.selectNodeContents(line);
    const w = range.getBoundingClientRect().width;
    if (range.detach) range.detach();
    return w;
  }
  function applyGroup(group) {
    const members = GROUPS.get(group);
    if (!members || !members.size) return;
    let scale = 1;
    members.forEach(el => {
      const avail = el.clientWidth;
      if (!avail) return;
      [...el.children].forEach(line => {
        const base = parseFloat(line.dataset.frBase || 0);
        if (!base) return;
        line.style.fontSize = base + 'px';
        const w = measure(line);
        if (w > avail) scale = Math.min(scale, avail / w * 0.985);
      });
    });
    scale = Math.max(scale, 0.5);
    members.forEach(el => {
      [...el.children].forEach(line => {
        const base = parseFloat(line.dataset.frBase || 0);
        if (base) line.style.fontSize = base * scale + 'px';
      });
    });
  }

  /** Shrinks headline lines just enough to sit on one line. Headings inside the
   *  same [data-fit-group] all take the smallest required size, so a card row
   *  stays typographically even. Only ever scales down. */
  function useFitLines(ref, enabled, deps) {
    React.useLayoutEffect(() => {
      if (!enabled) return;
      const el = ref.current;
      if (!el) return;
      const group = el.closest('[data-fit-group]') || el;
      const readBase = () => {
        [...el.children].forEach(line => {
          line.style.fontSize = '';
          line.dataset.frBase = parseFloat(getComputedStyle(line).fontSize);
        });
      };
      const run = () => {
        readBase();
        applyGroup(group);
      };
      let members = GROUPS.get(group);
      if (!members) {
        members = new Set();
        GROUPS.set(group, members);
      }
      members.add(el);
      run();
      const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(run) : null;
      if (ro) ro.observe(group);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
      window.addEventListener('resize', run);
      return () => {
        members.delete(el);
        if (ro) ro.disconnect();
        window.removeEventListener('resize', run);
      };
    }, deps);
  }

  /** The brand's headline motif: one line condensed (BN Super-Sized),
   *  one line serif (Wolfgang). Either line may come first. */
  function DuoHeading({
    top,
    bottom,
    order = 'cond-serif',
    size = 'l',
    italic = false,
    align = 'left',
    fit = false,
    as = 'h2',
    style,
    className = ''
  }) {
    const ref = React.useRef(null);
    useFitLines(ref, fit, [fit, top, bottom, size, order]);
    const serif = React.createElement('span', {
      key: 's',
      className: `fr-duo__serif ${italic ? 'fr-duo__serif--italic' : ''}`.trim()
    }, order === 'cond-serif' ? bottom : top);
    const cond = React.createElement('span', {
      key: 'c',
      className: 'fr-duo__cond'
    }, order === 'cond-serif' ? top : bottom);
    return React.createElement(as, {
      ref,
      className: `fr-duo fr-duo--${size} ${fit ? 'fr-duo--fit' : ''} ${className}`.trim(),
      style: {
        textAlign: align,
        ...style
      }
    }, order === 'cond-serif' ? [cond, serif] : [serif, cond]);
  }
  function ArrowLink({
    children,
    href = '#',
    arrow = true,
    style,
    className = '',
    onClick
  }) {
    return React.createElement('a', {
      href,
      onClick,
      className: `fr-link ${className}`.trim(),
      style
    }, children, arrow ? React.createElement('span', {
      key: 'a',
      'aria-hidden': true
    }, '→') : null);
  }

  /** Scroll-triggered reveal. Fades + lifts (or clip-path wipes) its children once. */
  function Reveal({
    children,
    delay = 0,
    mode = 'lift',
    as = 'div',
    style,
    className = '',
    threshold = 0.18
  }) {
    const ref = React.useRef(null);
    const [inView, setInView] = React.useState(false);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || inView) return;
      // Anything already on screen reveals right away, and a safety timer guarantees
      // content appears even if IntersectionObserver never fires (hidden/background
      // documents, prerender, unsupported environments).
      const box = el.getBoundingClientRect();
      if (box.top < (window.innerHeight || 0) && box.bottom > 0) {
        setInView(true);
        return;
      }
      let io;
      const timer = setTimeout(() => {
        setInView(true);
        if (io) io.disconnect();
      }, 1600);
      const show = () => {
        clearTimeout(timer);
        setInView(true);
        if (io) io.disconnect();
      };
      if (typeof IntersectionObserver === 'function') {
        io = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) show();
          });
        }, {
          threshold,
          rootMargin: '0px 0px -8% 0px'
        });
        io.observe(el);
      }
      const onVisible = () => {
        const b = el.getBoundingClientRect();
        if (document.visibilityState === 'visible' && b.top < window.innerHeight && b.bottom > 0) show();
      };
      document.addEventListener('visibilitychange', onVisible);
      return () => {
        clearTimeout(timer);
        if (io) io.disconnect();
        document.removeEventListener('visibilitychange', onVisible);
      };
    }, [inView, threshold]);
    if (mode === 'mask') {
      return React.createElement(as, {
        ref,
        className: `fr-mask ${inView ? 'is-in' : ''} ${className}`.trim(),
        style: {
          ...style
        }
      }, React.createElement('div', {
        style: {
          transitionDelay: delay + 'ms'
        }
      }, children));
    }
    return React.createElement(as, {
      ref,
      className: `fr-reveal ${inView ? 'is-in' : ''} ${className}`.trim(),
      style: {
        transitionDelay: delay + 'ms',
        ...style
      }
    }, children);
  }

  // Each ground is the real paper scan baked onto the brand colour (see tokens/effects.css).
  const GROUNDS = {
    paper: 'paper',
    cardboard: 'cardboard',
    lila: 'lila',
    lila1: 'lila1',
    blau: 'blau'
  };

  /** Full-bleed band with optional brand paper texture and a centred container. */
  function Section({
    children,
    tone = 'paper',
    texture,
    id,
    width = 'wide',
    style,
    innerStyle,
    className = ''
  }) {
    const layers = [];
    // "lila" on a deep band means the blau paper ground — the live site's dark sections
    // are textured blau, not purple.
    const ground = texture === 'lila' && tone === 'deep' ? 'blau' : GROUNDS[texture];
    if (ground) layers.push(React.createElement('div', {
      key: 't',
      className: `fr-ground fr-ground--${ground}`
    }));
    layers.push(React.createElement('div', {
      key: 'i',
      className: 'fr-section__inner',
      style: {
        maxWidth: width === 'narrow' ? 'var(--container-narrow)' : 'var(--container)',
        ...innerStyle
      }
    }, children));
    return React.createElement('section', {
      id,
      className: `fr-section fr-section--${tone} ${className}`.trim(),
      style
    }, layers);
  }

  /** Endless horizontal band — used for the competence keyword ticker.
   *  The item list is repeated until one track is at least as wide as the band,
   *  so the row never runs dry on wide screens. */
  function Marquee({
    items = [],
    tone = 'deep',
    speed = 26,
    style,
    className = ''
  }) {
    const hostRef = React.useRef(null);
    const trackRef = React.useRef(null);
    const [reps, setReps] = React.useState(2);
    React.useEffect(() => {
      const fit = () => {
        const host = hostRef.current,
          track = trackRef.current;
        if (!host || !track) return;
        const one = track.scrollWidth / reps;
        if (!one) return;
        const needed = Math.max(2, Math.ceil(host.offsetWidth / one) + 1);
        if (needed !== reps) setReps(needed);
      };
      fit();
      const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(fit) : null;
      if (ro && hostRef.current) ro.observe(hostRef.current);
      window.addEventListener('resize', fit);
      return () => {
        if (ro) ro.disconnect();
        window.removeEventListener('resize', fit);
      };
    }, [reps, items.length]);
    const cells = [];
    for (let r = 0; r < reps; r++) {
      items.forEach((it, i) => cells.push(React.createElement('span', {
        key: r + '-' + i,
        style: {
          fontFamily: 'var(--font-display)',
          textTransform: 'uppercase',
          fontSize: 'var(--size-display-s)',
          lineHeight: 1.1,
          whiteSpace: 'nowrap',
          opacity: i % 2 ? .45 : 1
        }
      }, it)));
    }
    const track = key => React.createElement('div', {
      key,
      ref: key === 'a' ? trackRef : undefined,
      className: 'fr-marquee__track',
      style: {
        animationDuration: speed * reps / 2 + 's'
      },
      'aria-hidden': key === 'b'
    }, cells);
    return React.createElement('div', {
      ref: hostRef,
      className: `fr-marquee ${className}`.trim(),
      style: {
        background: tone === 'deep' ? 'var(--fr-blau)' : tone === 'accent' ? 'var(--fr-lila-2)' : 'var(--fr-beige)',
        color: tone === 'paper' ? 'var(--fr-blau)' : 'var(--fr-beige)',
        paddingBlock: 'var(--space-5)',
        ...style
      }
    }, [track('a'), track('b')]);
  }

  /** Image-topped competence card: photo, duo heading, short paragraph. */
  function KompetenzCard({
    image,
    alt = '',
    top,
    bottom,
    children,
    tone = 'paper',
    href,
    style,
    className = ''
  }) {
    const body = [React.createElement(DuoHeading, {
      key: 'h',
      as: 'h3',
      size: 's',
      top,
      bottom,
      order: 'cond-serif',
      fit: true,
      style: {
        marginBottom: 'var(--space-3)'
      }
    }), React.createElement('p', {
      key: 'p',
      style: {
        margin: 0,
        fontSize: 'var(--size-small)',
        lineHeight: 'var(--lh-body)',
        opacity: .85
      }
    }, children)];
    const kids = [image ? React.createElement('div', {
      key: 'm',
      className: 'fr-card__media'
    }, React.createElement('img', {
      src: image,
      alt
    })) : null, React.createElement('div', {
      key: 'b',
      className: 'fr-card__body'
    }, body)];
    const cls = `fr-card ${tone === 'deep' ? 'fr-card--deep' : ''} ${className}`.trim();
    return href ? React.createElement('a', {
      href,
      className: cls,
      style: {
        display: 'block',
        color: 'inherit',
        ...style
      }
    }, kids) : React.createElement('div', {
      className: cls,
      style
    }, kids);
  }

  /** Oversized number with a condensed label above it (e.g. 10+ Jahre Erfahrung). */
  function StatBlock({
    value,
    label,
    children,
    align = 'left',
    style,
    className = ''
  }) {
    return React.createElement('div', {
      className,
      style: {
        textAlign: align,
        ...style
      }
    }, React.createElement('div', {
      key: 'l',
      className: 'fr-eyebrow',
      style: {
        display: 'block',
        marginBottom: 'var(--space-3)'
      }
    }, label), React.createElement('div', {
      key: 'v',
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--size-display-l)',
        lineHeight: .95,
        textTransform: 'uppercase'
      }
    }, value), children ? React.createElement('p', {
      key: 'p',
      style: {
        maxWidth: '46ch',
        marginTop: 'var(--space-5)'
      }
    }, children) : null);
  }

  /** Numbered principle row: big condensed numeral, rule, statement. */
  function PrincipleItem({
    number,
    children,
    size = 'lg',
    style,
    className = ''
  }) {
    return React.createElement('div', {
      className: `fr-principle fr-principle--${size} ${className}`.trim(),
      style
    }, React.createElement('div', {
      key: 'n',
      className: 'fr-principle__num'
    }, number), React.createElement('p', {
      key: 'p',
      className: 'fr-principle__text'
    }, children));
  }

  /** Two-column band: photo on one side, heading + copy on the other. */
  function MediaSplit({
    image,
    alt = '',
    reverse = false,
    children,
    media,
    gap = 'var(--space-8)',
    ratio = '1fr 1fr',
    style,
    className = ''
  }) {
    const pic = media || (image ? React.createElement('img', {
      src: image,
      alt,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 'var(--radius-m)'
      }
    }) : null);
    const cols = [React.createElement('div', {
      key: 'm',
      className: 'fr-split__media',
      style: {
        order: reverse ? 2 : 1
      }
    }, pic), React.createElement('div', {
      key: 'c',
      className: 'fr-split__body',
      style: {
        order: reverse ? 1 : 2
      }
    }, children)];
    return React.createElement('div', {
      className: `fr-split ${className}`.trim(),
      style: {
        '--split-cols': ratio,
        '--split-gap': gap,
        ...style
      }
    }, cols);
  }

  /** Closing call-to-action panel on a Lila II ground with paper texture. */
  function CtaPanel({
    top = 'Erstgespräch',
    bottom = 'vereinbaren',
    children,
    cta = 'Termin vereinbaren',
    href = 'mailto:hallo@felix-reidinger.de',
    onCta,
    style,
    className = ''
  }) {
    return React.createElement('div', {
      className,
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-l)',
        background: 'var(--fr-lila-2)',
        color: 'var(--text-on-accent)',
        padding: 'clamp(40px,6vw,88px)',
        ...style
      }
    }, React.createElement('div', {
      key: 't',
      className: 'fr-ground fr-ground--lila'
    }), React.createElement('div', {
      key: 'c',
      style: {
        position: 'relative',
        zIndex: 1,
        maxWidth: '62ch'
      }
    }, React.createElement(DuoHeading, {
      key: 'h',
      top,
      bottom,
      size: 'l',
      order: 'cond-serif',
      fit: true,
      style: {
        marginBottom: 'var(--space-5)'
      }
    }), children ? React.createElement('p', {
      key: 'p',
      style: {
        fontSize: 'var(--size-lead)',
        lineHeight: 'var(--lh-lead)',
        maxWidth: '48ch'
      }
    }, children) : null, React.createElement(Button, {
      key: 'b',
      href: onCta ? undefined : href,
      onClick: onCta ? e => {
        e.preventDefault();
        onCta(e);
      } : undefined,
      variant: 'light',
      size: 'lg',
      arrow: true,
      style: {
        marginTop: 'var(--space-6)'
      }
    }, cta)));
  }

  /** Fixed top bar. Transparent over the hero, frosted Blau once scrolled. */
  function NavBar({
    links = [],
    active,
    onNavigate,
    cta = 'Termin vereinbaren',
    ctaHref = 'mailto:hallo@felix-reidinger.de',
    ctaId,
    tone = 'beige',
    style,
    className = ''
  }) {
    const [stuck, setStuck] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const el = typeof document !== 'undefined' ? document.scrollingElement || document.documentElement : null;
      const host = document.querySelector('[data-fr-scroll]') || window;
      const read = () => setStuck((host === window ? el.scrollTop : host.scrollTop) > 40);
      host.addEventListener('scroll', read, {
        passive: true
      });
      read();
      return () => host.removeEventListener('scroll', read);
    }, []);
    const nav = id => {
      setOpen(false);
      if (onNavigate) onNavigate(id);
    };
    return React.createElement('header', {
      className: `fr-nav ${stuck || open ? 'is-stuck' : ''} ${open ? 'is-open' : ''} ${className}`.trim(),
      style: {
        color: tone === 'beige' ? 'var(--fr-beige)' : 'var(--fr-blau)',
        ...style
      }
    }, React.createElement('a', {
      key: 'l',
      href: '#top',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate('start');
        }
      },
      style: {
        display: 'inline-flex'
      }
    }, React.createElement(LogoLockup, {
      tone,
      height: stuck ? 26 : 32,
      style: {
        transition: 'all var(--dur-base) var(--ease-brand)'
      }
    })), React.createElement('button', {
      key: 'b',
      type: 'button',
      className: 'fr-nav__burger',
      'aria-label': open ? 'Menü schließen' : 'Menü öffnen',
      'aria-expanded': open,
      onClick: () => setOpen(!open)
    }, React.createElement('span', {
      className: 'fr-nav__burger-box'
    }, React.createElement('i', null), React.createElement('i', null), React.createElement('i', null))), React.createElement('nav', {
      key: 'n',
      className: 'fr-nav__links'
    }, links.map(l => React.createElement('a', {
      key: l.id || l.label,
      href: l.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          nav(l.id);
        } else {
          setOpen(false);
        }
      },
      className: 'fr-link',
      style: {
        color: 'inherit',
        opacity: active && l.id === active ? 1 : .72
      }
    }, l.label)), React.createElement(Button, {
      key: 'c',
      href: ctaId && onNavigate ? undefined : ctaHref,
      onClick: ctaId && onNavigate ? e => {
        e.preventDefault();
        nav(ctaId);
      } : undefined,
      variant: tone === 'beige' ? 'light' : 'primary',
      size: 'sm'
    }, cta)));
  }

  /** Site footer on a Lila II texture strip: legal links, mail address, LinkedIn. */
  function Footer({
    links = [{
      label: 'Impressum',
      href: '#'
    }, {
      label: 'Datenschutz',
      href: '#'
    }],
    onNavigate,
    mail = 'felix@fr-kommunikation.de',
    linkedin = 'https://www.linkedin.com/in/felix-reidinger/',
    copyright = '© 2026 Felix Reidinger-Tomschin',
    style,
    className = ''
  }) {
    const base = typeof window !== 'undefined' && window.FR_ASSET_BASE || '../../assets';
    const item = s => ({
      fontSize: 'var(--size-small)',
      color: 'inherit',
      opacity: s ? 1 : .8
    });
    return React.createElement('footer', {
      className,
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--fr-lila-2)',
        color: 'var(--fr-beige)',
        padding: 'var(--space-7) var(--gutter)',
        ...style
      }
    }, React.createElement('div', {
      key: 't',
      className: 'fr-ground fr-ground--lila'
    }), React.createElement('div', {
      key: 'i',
      style: {
        position: 'relative',
        zIndex: 1,
        maxWidth: 'var(--container)',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--space-6)',
        justifyContent: 'space-between'
      }
    }, React.createElement(LogoLockup, {
      key: 'l',
      tone: 'beige',
      height: 34
    }), React.createElement('div', {
      key: 'n',
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-5)',
        alignItems: 'center'
      }
    }, links.map(l => React.createElement('a', {
      key: l.label,
      href: l.href || '#',
      style: item(false),
      onClick: e => {
        if (onNavigate && l.id) {
          e.preventDefault();
          onNavigate(l.id);
        }
      }
    }, l.label)), React.createElement('a', {
      key: 'm',
      href: 'mailto:' + mail,
      style: item(true)
    }, mail), React.createElement('a', {
      key: 'li',
      href: linkedin,
      'aria-label': 'LinkedIn'
    }, React.createElement('img', {
      src: base + '/icon-linkedin.png',
      alt: 'LinkedIn',
      width: 22,
      height: 22,
      style: {
        opacity: .9
      }
    }))), React.createElement('span', {
      key: 'c',
      style: {
        fontSize: 'var(--size-label)',
        opacity: .7,
        width: '100%'
      }
    }, copyright)));
  }

  /** Label + control wrapper with error and hint slots. */
  function Field({
    label,
    htmlFor,
    required,
    hint,
    error,
    children,
    style,
    className = ''
  }) {
    return React.createElement('div', {
      className: `fr-field ${error ? 'is-error' : ''} ${className}`.trim(),
      style
    }, label ? React.createElement('label', {
      key: 'l',
      className: 'fr-field__label',
      htmlFor
    }, label, required ? React.createElement('span', {
      key: 'r',
      'aria-hidden': true,
      style: {
        color: 'var(--fr-lila-2)'
      }
    }, ' *') : null) : null, children, error ? React.createElement('span', {
      key: 'e',
      className: 'fr-field__msg fr-field__msg--error'
    }, error) : hint ? React.createElement('span', {
      key: 'h',
      className: 'fr-field__msg'
    }, hint) : null);
  }
  function Input({
    type = 'text',
    invalid,
    style,
    className = '',
    ...rest
  }) {
    return React.createElement('input', {
      type,
      className: `fr-input ${invalid ? 'is-invalid' : ''} ${className}`.trim(),
      style,
      ...rest
    });
  }
  function Textarea({
    rows = 5,
    invalid,
    style,
    className = '',
    ...rest
  }) {
    return React.createElement('textarea', {
      rows,
      className: `fr-input fr-input--area ${invalid ? 'is-invalid' : ''} ${className}`.trim(),
      style,
      ...rest
    });
  }
  function Select({
    options = [],
    placeholder,
    invalid,
    style,
    className = '',
    ...rest
  }) {
    return React.createElement('div', {
      className: 'fr-select'
    }, React.createElement('select', {
      className: `fr-input ${invalid ? 'is-invalid' : ''} ${className}`.trim(),
      style,
      ...rest
    }, placeholder ? React.createElement('option', {
      key: '_',
      value: ''
    }, placeholder) : null, options.map(o => {
      const value = typeof o === 'string' ? o : o.value;
      const label = typeof o === 'string' ? o : o.label;
      return React.createElement('option', {
        key: value,
        value
      }, label);
    })), React.createElement('span', {
      className: 'fr-select__arrow',
      'aria-hidden': true
    }, '▾'));
  }
  function Checkbox({
    label,
    children,
    invalid,
    style,
    className = '',
    ...rest
  }) {
    return React.createElement('label', {
      className: `fr-check ${invalid ? 'is-invalid' : ''} ${className}`.trim(),
      style
    }, React.createElement('input', {
      type: 'checkbox',
      ...rest
    }), React.createElement('span', {
      className: 'fr-check__box',
      'aria-hidden': true
    }), React.createElement('span', {
      className: 'fr-check__label'
    }, label || children));
  }
  window.FelixReidingerDesignSystem_5335cf = {
    Logo,
    LogoLockup,
    Button,
    Badge,
    Eyebrow,
    DuoHeading,
    ArrowLink,
    Reveal,
    Section,
    Marquee,
    KompetenzCard,
    StatBlock,
    PrincipleItem,
    MediaSplit,
    CtaPanel,
    NavBar,
    Footer,
    Field,
    Input,
    Textarea,
    Select,
    Checkbox
  };
})();

/* ---- Start.jsx ---- */
(function () {
  const NS = window.FelixReidingerDesignSystem_5335cf;
  const {
    Section,
    Reveal,
    Marquee,
    DuoHeading,
    Badge,
    Eyebrow,
    Button,
    ArrowLink,
    KompetenzCard,
    StatBlock,
    MediaSplit,
    CtaPanel
  } = NS;
  const A = './assets';
  function useScrollY() {
    const [y, setY] = React.useState(0);
    React.useEffect(() => {
      const host = document.querySelector('[data-fr-scroll]') || window;
      const read = () => setY(host === window ? window.scrollY : host.scrollTop);
      host.addEventListener('scroll', read, {
        passive: true
      });
      read();
      return () => host.removeEventListener('scroll', read);
    }, []);
    return y;
  }
  function CountUp({
    to = 10,
    suffix = '+',
    duration = 1200
  }) {
    const ref = React.useRef(null);
    const [n, setN] = React.useState(0);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      let raf,
        started = false;
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          io.disconnect();
          const t0 = performance.now();
          const tick = t => {
            const p = Math.min(1, (t - t0) / duration);
            setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      }), {
        threshold: .5
      });
      io.observe(el);
      return () => {
        io.disconnect();
        cancelAnimationFrame(raf);
      };
    }, [to, duration]);
    return /*#__PURE__*/React.createElement("span", {
      ref: ref
    }, n, suffix);
  }
  function Hero({
    image,
    badge,
    top,
    bottom,
    kicker,
    onNavigate
  }) {
    const y = useScrollY();
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        position: 'relative',
        minHeight: 'min(100svh,880px)',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        background: 'var(--fr-blau)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        width: '100%',
        height: '118%',
        objectFit: 'cover',
        transform: `translate3d(0,${y * -0.12}px,0)`,
        animation: 'fr-hero-in 1600ms var(--ease-out) both'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg,rgba(23,15,68,.66) 0%,rgba(23,15,68,.30) 34%,rgba(23,15,68,.62) 72%,rgba(23,15,68,.92) 100%)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--gutter) clamp(48px,8vw,110px)',
        color: 'var(--fr-beige)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      delay: 200
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "dark",
      style: {
        marginBottom: 'var(--space-5)'
      }
    }, badge)), /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask",
      delay: 320
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      as: "h1",
      size: "xl",
      top: top,
      bottom: bottom
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 620,
      style: {
        display: 'flex',
        gap: 'var(--space-5)',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      size: "lg",
      arrow: true,
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate('kontakt');
        }
      },
      href: onNavigate ? undefined : 'mailto:hallo@felix-reidinger.de'
    }, "Termin vereinbaren"), kicker ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--size-small)',
        opacity: .75,
        maxWidth: '34ch'
      }
    }, kicker) : null)));
  }
  function StartScreen({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
      image: `${A}/img-hero.jpg`,
      badge: "B2B-Kommunikation",
      top: "Messbar",
      bottom: "erfolgreich",
      kicker: "Unternehmenskommunikation, Social Media, Web, Performance Marketing.",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper"
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${A}/img-felix-portrait.jpg`,
      alt: "Felix Reidinger",
      ratio: "0.85fr 1fr",
      gap: "clamp(32px,6vw,88px)"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        display: 'block',
        marginBottom: 'var(--space-4)'
      }
    }, "Jahre Erfahrung in B2B-Kommunikation"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--size-display-l)',
        lineHeight: .95
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: 10
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '52ch',
        marginTop: 'var(--space-5)'
      }
    }, "Egal ob technisch anspruchsvolle Themen oder komplexe und vielschichtige Customer Journey - ich bin seit mehr als zehn Jahren f\xFCr Kund:innen in Industrie und Mittelstand als Kommunikationsberater t\xE4tig. Als Freiberufler arbeite ich f\xFCr Industrieunternehmen, Mittelst\xE4ndler oder Agenturen mit einem Fokus auf Multichannel-Kommunikation."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        marginTop: 'var(--space-6)'
      },
      onClick: () => onNavigate('performance'),
      arrow: true
    }, "Referenzen")))), /*#__PURE__*/React.createElement(Marquee, {
      items: ["Strategie", "Konzeption", "Performance", "Erfolgsmessung", "Multichannel", "Redaktion", "Analyse"],
      tone: "accent"
    }), /*#__PURE__*/React.createElement(Section, {
      tone: "deep",
      texture: "lila"
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${A}/img-sven.jpg`,
      alt: "Sven Tomschin",
      reverse: true,
      ratio: "1fr 0.95fr",
      gap: "clamp(32px,6vw,88px)"
    }, /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask"
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "m",
      order: "serif-cond",
      top: "Performance",
      bottom: "Leads und Abschl\xFCsse"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '54ch',
        marginTop: 'var(--space-5)',
        opacity: .88
      }
    }, "Sven Tomschin ist freier Berater im Team von Felix Reidinger und bringt \xFCber zehn Jahre Erfahrung im Bereich Social & Digital Marketing mit. Er hat Unternehmen aus Banking & Finance, Handel, SaaS und Industrie dabei unterst\xFCtzt, ihre Kampagnen erfolgreich aufzubauen \u2013 von der Strategie bis zum messbaren Erfolg. Sven ist dein Ansprechpartner, wenn es darum geht, digitale Kampagnen im B2B so aufzusetzen, dass sie nicht nur Reichweite erzeugen, sondern echte Pipeline."), /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      style: {
        marginTop: 'var(--space-6)'
      },
      onClick: () => onNavigate('performance'),
      arrow: true
    }, "Performance Marketing")))), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "cardboard"
    }, /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask",
      style: {
        marginBottom: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "m",
      top: "Kompetenzen",
      bottom: "im \xDCberblick"
    })), /*#__PURE__*/React.createElement("div", {
      "data-fit-group": true,
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
        gap: 'var(--space-5)'
      }
    }, [{
      img: 'img-kompetenz-beratung.jpg',
      top: 'Beratung',
      bottom: 'Strategie',
      text: 'Du bist auf der Suche nach einem Strategie-Sparringspartner mit einem unabhängigen Blick von Außen? Wir unterstützen dich gerne bei der Entwicklung, Bewertung oder Umsetzung von Strategien und Konzepten.'
    }, {
      img: 'img-kompetenz-kreation.jpg',
      top: 'Kreation',
      bottom: 'Konzeption',
      text: 'Knappe Timings, zusätzliche Aufgaben und komplexe Themen lassen die Umsetzung in die ferne Zukunft rücken? Dann unterstützen wir dich und dein Team als zusätzliche Kapa+ in der Planung. Projektsteuerung oder Redaktion.'
    }, {
      img: 'img-kompetenz-performance.jpg',
      top: 'Performance',
      bottom: 'Digital',
      text: 'Deine Contents sind top, jedoch erreichen sie nicht die richtigen Menschen? Wir setzen gemeinsam mit dir die passenden Marketing-Kanäle auf und spielen deine Inhalte zielgerichtet aus.'
    }, {
      img: 'img-kompetenz-analyse.jpg',
      top: 'Analyse',
      bottom: 'Erfolgsmessung',
      text: 'Du möchtest herausfinden, was deine Kommunikation wirklich bringt? Egal ob Benchmark, Performance Report oder Inhaltsanalysen - die Erfolgsmessung über verschiedene Kanäle hinweg ist unser Steckenpferd.'
    }].map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: c.top,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(KompetenzCard, {
      image: `${A}/${c.img}`,
      top: c.top,
      bottom: c.bottom
    }, c.text))))), /*#__PURE__*/React.createElement(Section, {
      tone: "deep",
      texture: "lila"
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${A}/img-netzwerk-team.jpg`,
      alt: "Netzwerk",
      ratio: "1fr 1fr",
      gap: "clamp(32px,6vw,88px)"
    }, /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask"
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "l",
      order: "serif-cond",
      top: "Thinking",
      bottom: "big?",
      italic: true
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '50ch',
        marginTop: 'var(--space-5)',
        opacity: .88
      }
    }, "Dein Projekt ist vielschichtig und komplex? Ich treibe Kommunikationsprojekte gerne verantwortlich voran, kann Aufw\xE4nde realistisch einsch\xE4tzen und planen und stelle dir bei Bedarf ein passendes Team von Fachexpert:innen aus meinem interdisziplin\xE4ren Netzwerk zusammen."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(ArrowLink, {
      onClick: e => {
        e.preventDefault();
        onNavigate('netzwerk');
      }
    }, "Netzwerk"))))), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CtaPanel, {
      onCta: () => onNavigate('kontakt')
    }, "Lust auf ein virtuelles Kaffee-Date? Bei einem ersten Kennenlern-Termin k\xF6nnen wir uns beschnuppern und schauen, was wir gemeinsam erreichen k\xF6nnen.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 160,
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${A}/img-felix-wide.jpg`,
      alt: "Felix Reidinger",
      ratio: "1.1fr 1fr",
      gap: "clamp(32px,6vw,72px)"
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "m",
      order: "serif-cond",
      top: "Sag einfach",
      bottom: "mal Hallo!",
      italic: true
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)'
      }
    }, "gerne per Mail an: ", /*#__PURE__*/React.createElement("a", {
      href: "mailto:hallo@felix-reidinger.de"
    }, "hallo@felix-reidinger.de"))))));
  }
  Object.assign(window, {
    StartScreen,
    Hero,
    Reveal,
    CountUp,
    useScrollY
  });
})();

/* ---- Screens.jsx ---- */
(function () {
  const NSP = window.FelixReidingerDesignSystem_5335cf;
  const AP = './assets';
  function PerformanceScreen({
    onNavigate
  }) {
    const {
      Section,
      Reveal,
      DuoHeading,
      Badge,
      Button,
      KompetenzCard,
      MediaSplit,
      PrincipleItem,
      CtaPanel,
      Marquee
    } = NSP;
    const Hero = window.Hero;
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
      image: `${AP}/img-hero-performance.jpg`,
      badge: "Performance Marketing",
      top: "Messbar",
      bottom: "erfolgreich",
      kicker: "Relevanz statt Reichweite ins Leere.",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper"
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${AP}/img-pipeline.jpg`,
      alt: "",
      ratio: "0.9fr 1fr",
      gap: "clamp(32px,6vw,80px)"
    }, /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask"
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "m",
      order: "serif-cond",
      top: "Starke Inhalte,",
      bottom: "volle Pipeline"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--size-lead)',
        lineHeight: 'var(--lh-lead)',
        maxWidth: '52ch',
        marginTop: 'var(--space-5)'
      }
    }, "So sorgen wir f\xFCr Leads und Abschl\xFCsse"), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '56ch',
        opacity: .85
      }
    }, "Deine Inhalte sind stark \u2013 wir sorgen daf\xFCr, dass sie die richtigen Entscheider erreichen und aus Reichweite relevante Leads und neue Gesch\xE4ftschancen in deiner Pipeline entstehen. Im B2B reicht es nicht, Anzeigen zu schalten und auf die richtigen Leads zu hoffen. Nur rund 5 % der Unternehmen sind aktiv auf der Suche nach einer neuen L\xF6sung \u2013 die restlichen 95 % entscheiden sich f\xFCr Anbieter, die sie schon vorher kennen."), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '56ch',
        opacity: .85
      }
    }, "Deshalb geht Performance Marketing \xFCber Klicks und Leads hinaus: Es schafft Aufmerksamkeit mit Mehrwert, baut Beziehungen auf und sorgt f\xFCr messbare Ergebnisse in deiner Pipeline \u2013 ob Antr\xE4ge, Bewerbungen oder konkrete Deals.")))), /*#__PURE__*/React.createElement(Section, {
      tone: "deep",
      texture: "lila"
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${AP}/img-sven.jpg`,
      alt: "Sven Tomschin",
      reverse: true,
      ratio: "1fr 0.9fr",
      gap: "clamp(32px,6vw,80px)"
    }, /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask"
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "m",
      order: "serif-cond",
      top: "Relevanz statt",
      bottom: "Reichweite ins Leere"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '54ch',
        marginTop: 'var(--space-5)',
        opacity: .88
      }
    }, "Sven Tomschin ist freier Berater im Team von Felix Reidinger und bringt \xFCber zehn Jahre Erfahrung im Bereich Social & Digital Marketing mit. Er hat Unternehmen aus Banking & Finance, Handel, SaaS und Industrie dabei unterst\xFCtzt, ihre Kampagnen erfolgreich aufzubauen \u2013 von der Strategie bis zum messbaren Erfolg."))), /*#__PURE__*/React.createElement("div", {
      className: "fr-principles",
      style: {
        marginTop: 'clamp(48px,7vw,104px)',
        maxWidth: 900
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "beige",
      style: {
        marginBottom: 'var(--space-5)'
      }
    }, "Die Grunds\xE4tze seiner Arbeit")), ['Marketing und Sales zusammen denken – statt Leads ins Leere laufen zu lassen.', 'Den Faktor Mensch in den Mittelpunkt rücken: authentisch, nahbar, wirksam.', 'Um Performance sicherzustellen, müssen Kampagnen datengetrieben aufgesetzt werden.'].map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 120
    }, /*#__PURE__*/React.createElement(PrincipleItem, {
      number: `${i + 1}.`
    }, t))))), /*#__PURE__*/React.createElement(Marquee, {
      items: ["LinkedIn Ads", "Meta Ads", "Account Based Marketing", "Nurturing", "Reporting"],
      tone: "deep"
    }), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "cardboard"
    }, /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask",
      style: {
        marginBottom: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "m",
      order: "serif-cond",
      top: "So setzen wir",
      bottom: "Performance Marketing um"
    })), /*#__PURE__*/React.createElement("div", {
      "data-fit-group": true,
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
        gap: 'var(--space-5)'
      }
    }, [{
      img: 'img-workshops.jpg',
      top: 'Workshops',
      bottom: 'Audits',
      text: 'Wir klären gemeinsam die optimale Positionierung eures Angebots, definieren den Lead-to-Sales-Prozess und sichern frühzeitig das Buy-in vom Vertrieb.'
    }, {
      img: 'img-setup.jpg',
      top: 'Set-up',
      bottom: 'Testing',
      text: 'Wir setzen eure Kampagne auf den passenden Kanälen um – mit Fokus auf LinkedIn Ads, Meta Ads und Account Based Marketing.'
    }, {
      img: 'img-nurturing.jpg',
      top: 'Nurturing',
      bottom: 'Pipeline',
      text: 'Leads werden aktiv entwickelt: Mit Frameworks für Nurturing, E-Mail-Strecken und Social Selling wandeln wir Kontakte in Geschäft.'
    }, {
      img: 'img-kompetenz-analyse.jpg',
      top: 'Reporting',
      bottom: 'Learning',
      text: 'Klare Auswertungen zeigen, was funktioniert – und wo wir optimieren können.'
    }].map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: c.top,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(KompetenzCard, {
      image: `${AP}/${c.img}`,
      top: c.top,
      bottom: c.bottom
    }, c.text))))), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CtaPanel, {
      onCta: () => onNavigate('kontakt')
    }, "Lust auf ein virtuelles Kaffee-Date? Bei einem ersten Kennenlern-Termin k\xF6nnen wir uns beschnuppern und schauen, was wir gemeinsam erreichen k\xF6nnen.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 160,
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${AP}/img-sven-portrait.jpg`,
      alt: "Sven Tomschin",
      ratio: "1.1fr 1fr",
      gap: "clamp(32px,6vw,72px)"
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "m",
      order: "serif-cond",
      top: "Sag einfach",
      bottom: "mal Hallo!",
      italic: true
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)'
      }
    }, "gerne per Mail an: ", /*#__PURE__*/React.createElement("a", {
      href: "mailto:sven@fr-kommunikation.de"
    }, "sven@fr-kommunikation.de")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        marginTop: 'var(--space-5)'
      },
      onClick: () => onNavigate('start'),
      arrow: true
    }, "Zur Startseite")))));
  }
  function NetzwerkScreen({
    onNavigate
  }) {
    const {
      Section,
      Reveal,
      DuoHeading,
      Badge,
      Button,
      MediaSplit,
      CtaPanel
    } = NSP;
    const Hero = window.Hero;
    const kompetenzen = [['Art Direction', 'Illustration'], ['Fotografie', 'Bildbearbeitung'], ['Filmproduktion', 'Motion Design'], ['SEO', 'GEO'], ['Google Ads', 'Analytics'], ['Programmierung', 'Coding']];
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
      image: `${AP}/img-netzwerk-klimawerk.jpg`,
      badge: "Netzwerk",
      top: "Thinking big?",
      bottom: "Arbeiten im Netzwerk",
      kicker: "Ein passendes Team f\xFCr jedes Projekt.",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper",
      width: "narrow"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--size-lead)',
        lineHeight: 'var(--lh-lead)',
        maxWidth: '60ch'
      }
    }, "In einer sich st\xE4ndig ver\xE4ndernden Kommunikationslandschaft ist eine Idee oft erst dann richtig stark, wenn verschiedene Perspektiven und Expertisen sie gemeinsam formen. Deshalb arbeite ich in einem Netzwerk erfahrener Spezialist:innen und stelle je nach Bedarf ein passendes Team zusammen.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140,
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "s",
      order: "serif-cond",
      top: "Das Netzwerk als",
      bottom: "Versprechen f\xFCr Qualit\xE4t"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '62ch',
        marginTop: 'var(--space-5)',
        opacity: .85
      }
    }, "Mein Netzwerk mach die Zusammenarbeit mit mir vielf\xE4ltig und flexibel. Wenn ein Projekt besondere Anforderungen hat, binde ich gezielt die passenden Partner:innen ein. Mein Netzwerk umfasst Freelancer und Agenturen mit unterschiedlichen Schwerpunkten: Von der Redaktion \xFCber Art Direktion, Gestaltung, Motion Design, Schnitt und Kamera, Fotografie, Programmierung bis SEO arbeite ich mich Menschen zusammen, die einen hohen Anspruch an Qualit\xE4t, Erfahrung und Wirksamkeit von Kommunikation haben. Das bedeutet f\xFCr dich: Zugriff auf exzellente, geb\xFCndelte Kompetenzen ohne Umwege und ohne unn\xF6tigen Verwaltungsaufwand."))), /*#__PURE__*/React.createElement(Section, {
      tone: "deep",
      texture: "lila"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "beige",
      style: {
        marginBottom: 'var(--space-6)'
      }
    }, "Kompetenzen im Netzwerk")), /*#__PURE__*/React.createElement("div", {
      "data-fit-group": true,
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
        gap: 'var(--space-5) var(--space-6)'
      }
    }, kompetenzen.map(([a, b], i) => /*#__PURE__*/React.createElement(Reveal, {
      key: a,
      delay: i * 80
    }, /*#__PURE__*/React.createElement("div", {
      className: "fr-duo-fit",
      style: {
        padding: 'var(--space-6) var(--space-5)',
        borderTop: 'var(--border-width) solid var(--border-on-deep)'
      }
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      as: "h3",
      size: "s",
      order: "serif-cond",
      top: a,
      bottom: b,
      fit: true
    })))))), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "cardboard"
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${AP}/img-netzwerk-team.jpg`,
      alt: "Netzwerk",
      reverse: true,
      ratio: "1fr 1fr",
      gap: "clamp(32px,6vw,80px)"
    }, /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask"
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "l",
      order: "serif-cond",
      top: "Thinking",
      bottom: "big?",
      italic: true
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '50ch',
        marginTop: 'var(--space-5)'
      }
    }, "Dein Projekt ist vielschichtig und komplex?"), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '54ch',
        opacity: .85
      }
    }, "Ich treibe Kommunikationsprojekte gerne verantwortlich voran, kann Aufw\xE4nde realistisch einsch\xE4tzen und planen und stelle dir bei Bedarf ein passendes Team von Fachexpert:innen aus meinem interdisziplin\xE4ren Netzwerk zusammen."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      style: {
        marginTop: 'var(--space-6)'
      },
      onClick: () => onNavigate('start'),
      arrow: true
    }, "Zur Startseite")))), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CtaPanel, {
      onCta: () => onNavigate('kontakt')
    }, "Lust auf ein virtuelles Kaffee-Date? Bei einem ersten Kennenlern-Termin k\xF6nnen wir uns beschnuppern und schauen, was wir gemeinsam erreichen k\xF6nnen."))));
  }
  Object.assign(window, {
    PerformanceScreen,
    NetzwerkScreen
  });
})();

/* ---- Legal.jsx ---- */
(function () {
  const NSL = window.FelixReidingerDesignSystem_5335cf;
  const AL = './assets';
  function LegalHero({
    badge,
    top,
    bottom
  }) {
    const {
      Reveal,
      DuoHeading,
      Badge
    } = NSL;
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--fr-blau)',
        color: 'var(--fr-beige)',
        padding: 'clamp(120px,16vw,200px) var(--gutter) clamp(48px,7vw,88px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fr-ground fr-ground--blau"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1,
        maxWidth: 'var(--container)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      delay: 80
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "lila",
      style: {
        marginBottom: 'var(--space-5)'
      }
    }, badge)), /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask",
      delay: 180
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      as: "h1",
      size: "l",
      top: top,
      bottom: bottom
    }))));
  }
  function LegalBlock({
    block,
    i
  }) {
    const {
      Reveal
    } = NSL;
    return /*#__PURE__*/React.createElement(Reveal, {
      delay: Math.min(i, 4) * 60
    }, block.h3 ? /*#__PURE__*/React.createElement("h3", null, block.h3) : null, block.h4 ? /*#__PURE__*/React.createElement("h4", null, block.h4) : null, (block.p || []).map((t, n) => /*#__PURE__*/React.createElement("p", {
      key: n,
      dangerouslySetInnerHTML: {
        __html: t
      }
    })), block.ul ? /*#__PURE__*/React.createElement("ul", null, block.ul.map((t, n) => /*#__PURE__*/React.createElement("li", {
      key: n,
      dangerouslySetInnerHTML: {
        __html: t
      }
    }))) : null);
  }
  function ImpressumScreen({
    onNavigate
  }) {
    const {
      Section,
      Reveal,
      DuoHeading,
      Button,
      MediaSplit
    } = NSL;
    const blocks = [{
      h3: 'Streitschlichtung',
      p: ['Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.']
    }, {
      h3: 'Haftungsausschluss (Disclaimer)'
    }, {
      h4: 'Haftung für Inhalte',
      p: ['Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.']
    }, {
      h4: 'Haftung für Links',
      p: ['Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.']
    }, {
      h4: 'Urheberrecht',
      p: ['Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.']
    }];
    const facts = [['Anschrift', ['Felix Reidinger', 'Ludwigstraße 128', '70197 Stuttgart']], ['Kontakt', ['Telefon +49 176 722 972 90', 'E-Mail: <a href="mailto:hallo@felix-reidinger.de">hallo@felix-reidinger.de</a>', 'Internet: <a href="https://www.felix-reidinger.de">www.felix-reidinger.de</a>']], ['Vertretungsberechtigte Geschäftsführer', ['Felix Reidinger-Tomschin']], ['Steuernummer', ['gemäß § 27a Umsatzsteuergesetz: 95458/14232']], ['Inhaltlich Verantwortlicher i.S.d. § 18 Abs. 2 MStV', ['Felix Reidinger-Tomschin', 'Ludwigstraße 128', '70197 Stuttgart']]];
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LegalHero, {
      badge: "Rechtliches",
      top: "Impressum",
      bottom: "Angaben gem\xE4\xDF TMG"
    }), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper"
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      ratio: "1fr 1.15fr",
      gap: "clamp(32px,6vw,80px)",
      style: {
        alignItems: 'start'
      },
      media: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gap: 'var(--space-5)'
        }
      }, facts.map(([label, lines]) => /*#__PURE__*/React.createElement(Reveal, {
        key: label
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          borderTop: 'var(--border-width) solid var(--border-hairline)',
          paddingTop: 'var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "fr-eyebrow",
        style: {
          display: 'block',
          marginBottom: 'var(--space-2)'
        }
      }, label), lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          fontSize: 'var(--size-body)'
        },
        dangerouslySetInnerHTML: {
          __html: l
        }
      }))))))
    }, /*#__PURE__*/React.createElement("div", {
      className: "fr-prose"
    }, blocks.map((b, i) => /*#__PURE__*/React.createElement(LegalBlock, {
      key: i,
      block: b,
      i: i
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        marginTop: 'var(--space-6)'
      },
      onClick: () => onNavigate('start'),
      arrow: true
    }, "Zur Startseite"))))));
  }
  const DATENSCHUTZ = [{
    p: ['Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als „Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als „Onlineangebot").']
  }, {
    h3: 'Verantwortlicher — Übersicht der Verarbeitungen',
    p: ['Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.']
  }, {
    h4: 'Arten der verarbeiteten Daten',
    ul: ['Kontaktdaten.', 'Inhaltsdaten.', 'Nutzungsdaten.', 'Meta-, Kommunikations- und Verfahrensdaten.']
  }, {
    h4: 'Kategorien betroffener Personen',
    ul: ['Kommunikationspartner.', 'Nutzer.']
  }, {
    h4: 'Zwecke der Verarbeitung',
    ul: ['Kontaktanfragen und Kommunikation.', 'Sicherheitsmaßnahmen.', 'Verwaltung und Beantwortung von Anfragen.', 'Feedback.', 'Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.', 'Informationstechnische Infrastruktur.']
  }, {
    h3: 'Maßgebliche Rechtsgrundlagen',
    p: ['Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.'],
    ul: ['<strong>Einwilligung</strong> (Art. 6 Abs. 1 S. 1 lit. a) DSGVO) - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.', '<strong>Vertragserfüllung und vorvertragliche Anfragen</strong> (Art. 6 Abs. 1 S. 1 lit. b) DSGVO) - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.', '<strong>Berechtigte Interessen</strong> (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.']
  }, {
    p: ['Nationale Datenschutzregelungen in Deutschland: Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.']
  }, {
    h3: 'Sicherheitsmaßnahmen',
    p: ['Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.', 'Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.', 'TLS/SSL-Verschlüsselung (https): Um die Daten der Benutzer, die über unsere Online-Dienste übertragen werden, zu schützen, verwenden wir TLS/SSL-Verschlüsselung. Secure Sockets Layer (SSL) ist die Standardtechnologie zur Sicherung von Internetverbindungen durch Verschlüsselung der zwischen einer Website oder App und einem Browser (oder zwischen zwei Servern) übertragenen Daten. Transport Layer Security (TLS) ist eine aktualisierte und sicherere Version von SSL. Hyper Text Transfer Protocol Secure (HTTPS) wird in der URL angezeigt, wenn eine Website durch ein SSL/TLS-Zertifikat gesichert ist.']
  }, {
    h3: 'Übermittlung von personenbezogenen Daten',
    p: ['Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.']
  }, {
    h3: 'Internationale Datentransfers',
    p: ['Datenverarbeitung in Drittländern: Sofern wir Daten in einem Drittland (d. h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben. Sofern das Datenschutzniveau in dem Drittland mittels eines Angemessenheitsbeschlusses anerkannt wurde (Art. 45 DSGVO), dient dieser als Grundlage des Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn das Datenschutzniveau anderweitig gesichert ist, insbesondere durch Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) DSGVO), ausdrückliche Einwilligung oder im Fall vertraglicher oder gesetzlich erforderlicher Übermittlung (Art. 49 Abs. 1 DSGVO). Im Übrigen teilen wir Ihnen die Grundlagen der Drittlandübermittlung bei den einzelnen Anbietern aus dem Drittland mit, wobei die Angemessenheitsbeschlüsse als Grundlagen vorrangig gelten. Informationen zu Drittlandtransfers und vorliegenden Angemessenheitsbeschlüssen können dem Informationsangebot der EU-Kommission entnommen werden: <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de">ec.europa.eu</a>.', 'EU-US Trans-Atlantic Data Privacy Framework: Im Rahmen des sogenannten „Data Privacy Framework" (DPF) hat die EU-Kommission das Datenschutzniveau ebenfalls für bestimmte Unternehmen aus den USA im Rahmen der Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Die Liste der zertifizierten Unternehmen als auch weitere Informationen zu dem DPF können Sie der Webseite des Handelsministeriums der USA unter <a href="https://www.dataprivacyframework.gov/">dataprivacyframework.gov</a> (in Englisch) entnehmen. Wir informieren Sie im Rahmen der Datenschutzhinweise, welche von uns eingesetzten Diensteanbieter unter dem Data Privacy Framework zertifiziert sind.']
  }, {
    h3: 'Löschung von Daten',
    p: ['Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z. B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D. h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z. B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist. Im Rahmen unserer Datenschutzhinweise können wir den Nutzern weitere Informationen zu der Löschung sowie zu der Aufbewahrung von Daten mitteilen, die speziell für die jeweiligen Verarbeitungsprozesses gelten.']
  }, {
    h3: 'Rechte der betroffenen Personen',
    p: ['Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:'],
    ul: ['<strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.', '<strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.', '<strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.', '<strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.', '<strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.', '<strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.', '<strong>Beschwerde bei Aufsichtsbehörde:</strong> Entsprechend den gesetzlichen Vorgaben und unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, haben Sie ferner das Recht, bei einer Datenschutzaufsichtsbehörde, insbesondere einer Aufsichtsbehörde im Mitgliedstaat, in dem Sie sich gewöhnlich aufhalten, der Aufsichtsbehörde Ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes, eine Beschwerde einzulegen, wenn Sie der Ansicht sei sollten, dass die Verarbeitung der Ihre Person betreffenden personenbezogenen Daten gegen die DSGVO verstößt.']
  }, {
    h3: 'Einsatz von Cookies',
    p: ['Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die Informationen auf Endgeräten speichern und Informationen aus den Endgeräten auslesen. Z. B. um den Login-Status in einem Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete Funktionen eines Onlineangebotes speichern. Cookies können ferner zu unterschiedlichen Zwecken eingesetzt werden, z. B. zu Zwecken der Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme.', 'Hinweise zur Einwilligung: Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer wenn diese gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn das Speichern und das Auslesen der Informationen, also auch von Cookies, unbedingt erforderlich sind, um dem den Nutzern einen von ihnen ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) zur Verfügung zu stellen. Zu den unbedingt erforderlichen Cookies gehören in der Regel Cookies mit Funktionen, die der Anzeige und Lauffähigkeit des Onlineangebotes, dem Lastausgleich, der Sicherheit, der Speicherung der Präferenzen und Auswahlmöglichkeiten der Nutzer oder ähnlichen mit der Bereitstellung der Haupt- und Nebenfunktionen des von den Nutzern angeforderten Onlineangebotes zusammenhängenden Zwecken dienen. Die widerrufliche Einwilligung wird gegenüber den Nutzern deutlich kommuniziert und enthält die Informationen zu der jeweiligen Cookie-Nutzung.', 'Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: Auf welcher datenschutzrechtlichen Rechtsgrundlage wir die personenbezogenen Daten der Nutzer mit Hilfe von Cookies verarbeiten, hängt davon ab, ob wir Nutzer um eine Einwilligung bitten. Falls die Nutzer einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten Interessen (z. B. an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und Verbesserung seiner Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen der Erfüllung unserer vertraglichen Pflichten erfolgt, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu erfüllen. Zu welchen Zwecken die Cookies von uns verarbeitet werden, darüber klären wir im Laufe dieser Datenschutzerklärung oder im Rahmen von unseren Einwilligungs- und Verarbeitungsprozessen auf.', 'Speicherdauer: Im Hinblick auf die Speicherdauer werden die folgenden Arten von Cookies unterschieden:'],
    ul: ['<strong>Temporäre Cookies</strong> (auch: Session- oder Sitzungs-Cookies): Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und sein Endgerät (z. B. Browser oder mobile Applikation) geschlossen hat.', '<strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Endgerätes gespeichert. So können beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die mit Hilfe von Cookies erhobenen Daten der Nutzer zur Reichweitenmessung verwendet werden. Sofern wir Nutzern keine expliziten Angaben zur Art und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten Nutzer davon ausgehen, dass Cookies permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.']
  }, {
    p: ['Allgemeine Hinweise zum Widerruf und Widerspruch (sog. „Opt-Out"): Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und der Verarbeitung entsprechend den gesetzlichen Vorgaben widersprechen. Hierzu können Nutzer unter anderem die Verwendung von Cookies in den Einstellungen ihres Browsers einschränken (wobei dadurch auch die Funktionalität unseres Onlineangebotes eingeschränkt sein kann). Ein Widerspruch gegen die Verwendung von Cookies zu Online-Marketing-Zwecken kann auch über die Websites <a href="https://optout.aboutads.info">optout.aboutads.info</a> und <a href="https://www.youronlinechoices.com/">youronlinechoices.com</a> erklärt werden.', 'Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).', 'Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies, bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen werden können. Hierbei wird die Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut wiederholen zu müssen und die Einwilligung entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu können. Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten, gelten die folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren betragen. Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem Browser, System und verwendeten Endgerät gespeichert; Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).']
  }, {
    h3: 'Bereitstellung des Onlineangebotes und Webhosting',
    p: ['Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.'],
    ul: ['Verarbeitete Datenarten: Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).', 'Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).', 'Zwecke der Verarbeitung: Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.', 'Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).', 'Bereitstellung Onlineangebot auf gemietetem Speicherplatz: Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter (auch „Webhoster" genannt) mieten oder anderweitig beziehen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).', 'Erhebung von Zugriffsdaten und Logfiles: Der Zugriff auf unser Onlineangebot wird in Form von so genannten „Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z. B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Löschung von Daten: Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.']
  }, {
    h3: 'Kontakt- und Anfragenverwaltung',
    p: ['Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.'],
    ul: ['Verarbeitete Datenarten: Kontaktdaten (z. B. E-Mail, Telefonnummern); Inhaltsdaten (z. B. Eingaben in Onlineformularen); Nutzungsdaten; Meta-, Kommunikations- und Verfahrensdaten.', 'Betroffene Personen: Kommunikationspartner.', 'Zwecke der Verarbeitung: Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.', 'Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).', 'Kontaktformular: Wenn Nutzer über unser Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens; Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).']
  }, {
    h3: 'Änderung und Aktualisierung der Datenschutzerklärung',
    p: ['Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.', 'Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.']
  }, {
    h3: 'Begriffsdefinitionen',
    p: ['In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich definiert sind, gelten deren gesetzliche Definitionen. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen.'],
    ul: ['<strong>Personenbezogene Daten:</strong> „Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z. B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.', '<strong>Verantwortlicher:</strong> Als „Verantwortlicher" wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.', '<strong>Verarbeitung:</strong> „Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.']
  }];
  function DatenschutzScreen({
    onNavigate
  }) {
    const {
      Section,
      Reveal,
      Button
    } = NSL;
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LegalHero, {
      badge: "Rechtliches",
      top: "Datenschutz",
      bottom: "erkl\xE4rung"
    }), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper",
      width: "narrow"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fr-prose"
    }, DATENSCHUTZ.map((b, i) => /*#__PURE__*/React.createElement(LegalBlock, {
      key: i,
      block: b,
      i: i
    })), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        marginTop: 'var(--space-7)'
      },
      onClick: () => onNavigate('start'),
      arrow: true
    }, "Zur Startseite")))));
  }
  Object.assign(window, {
    ImpressumScreen,
    DatenschutzScreen
  });
})();

/* ---- Kontakt.jsx ---- */
(function () {
  // Kontakt / Terminanfrage — posts into a Google Sheet via a Google Apps Script
  // web app. Set the endpoint once, in one place:
  //
  //   window.FR_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfy…/exec';
  //
  // Setup instructions live in ui_kits/website/GOOGLE-SHEET.md.
  // Without an endpoint the form validates and shows the success state, but sends nothing.

  const NSK = window.FelixReidingerDesignSystem_5335cf;
  const THEMEN = ['Beratung / Strategie', 'Kreation / Konzeption', 'Performance / Digital', 'Analyse / Erfolgsmessung', 'Netzwerk / Projektteam', 'Etwas anderes'];
  const ZEITFENSTER = ['Vormittags (9–12 Uhr)', 'Mittags (12–14 Uhr)', 'Nachmittags (14–17 Uhr)', 'Flexibel'];
  const EMPTY = {
    name: '',
    email: '',
    unternehmen: '',
    telefon: '',
    thema: '',
    zeitfenster: '',
    nachricht: '',
    datenschutz: false
  };
  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = 'Bitte deinen Namen angeben.';
    if (!v.email.trim()) e.email = 'Bitte eine E-Mail-Adresse angeben.';else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Diese E-Mail-Adresse sieht nicht richtig aus.';
    if (!v.thema) e.thema = 'Bitte ein Thema wählen.';
    if (!v.nachricht.trim()) e.nachricht = 'Ein Satz zum Anliegen reicht.';
    if (!v.datenschutz) e.datenschutz = 'Ohne Einverständnis können wir die Anfrage nicht verarbeiten.';
    return e;
  }
  function KontaktFormular() {
    const {
      Field,
      Input,
      Textarea,
      Select,
      Checkbox,
      Button,
      DuoHeading,
      Reveal
    } = NSK;
    const [v, setV] = React.useState(EMPTY);
    const [errors, setErrors] = React.useState({});
    const [status, setStatus] = React.useState('idle'); // idle | sending | done | error
    const set = k => ev => {
      const val = k === 'datenschutz' ? ev.target.checked : ev.target.value;
      setV(s => ({
        ...s,
        [k]: val
      }));
      if (errors[k]) setErrors(e => {
        const n = {
          ...e
        };
        delete n[k];
        return n;
      });
    };
    const submit = async ev => {
      ev.preventDefault();
      const e = validate(v);
      setErrors(e);
      if (Object.keys(e).length) {
        const first = document.querySelector('.fr-field.is-error input, .fr-field.is-error select, .fr-field.is-error textarea');
        if (first) first.focus();
        return;
      }
      setStatus('sending');
      const endpoint = window.FR_SHEET_ENDPOINT;
      if (!endpoint) {
        setStatus('done');
        return;
      }
      try {
        // text/plain avoids the CORS preflight that Apps Script does not answer
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify({
            ...v,
            gesendet_am: new Date().toISOString(),
            quelle: 'felix-reidinger.de'
          })
        });
        setStatus('done');
      } catch (err) {
        console.error(err);
        setStatus('error');
      }
    };
    if (status === 'done') return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'clamp(32px,5vw,56px)',
        borderRadius: 'var(--radius-l)',
        background: 'var(--fr-beige)',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "s",
      order: "serif-cond",
      top: "Danke,",
      bottom: "ist angekommen!",
      italic: true
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        maxWidth: '44ch'
      }
    }, "Ich melde mich innerhalb von zwei Werktagen bei dir und schicke dir zwei Terminvorschl\xE4ge."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        marginTop: 'var(--space-5)'
      },
      onClick: () => {
        setV(EMPTY);
        setStatus('idle');
      }
    }, "Weitere Anfrage"));
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      noValidate: true,
      className: "fr-form",
      style: {
        padding: 'clamp(28px,4vw,48px)',
        borderRadius: 'var(--radius-l)',
        background: 'var(--fr-beige)',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fr-form-grid"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Name",
      htmlFor: "k-name",
      required: true,
      error: errors.name
    }, /*#__PURE__*/React.createElement(Input, {
      id: "k-name",
      name: "name",
      autoComplete: "name",
      placeholder: "Vor- und Nachname",
      value: v.name,
      onChange: set('name'),
      invalid: !!errors.name
    })), /*#__PURE__*/React.createElement(Field, {
      label: "E-Mail",
      htmlFor: "k-mail",
      required: true,
      error: errors.email
    }, /*#__PURE__*/React.createElement(Input, {
      id: "k-mail",
      name: "email",
      type: "email",
      autoComplete: "email",
      placeholder: "name@unternehmen.de",
      value: v.email,
      onChange: set('email'),
      invalid: !!errors.email
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Unternehmen",
      htmlFor: "k-firma",
      hint: "optional"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "k-firma",
      name: "unternehmen",
      autoComplete: "organization",
      placeholder: "Firma",
      value: v.unternehmen,
      onChange: set('unternehmen')
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Telefon",
      htmlFor: "k-tel",
      hint: "optional, falls ein R\xFCckruf einfacher ist"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "k-tel",
      name: "telefon",
      type: "tel",
      autoComplete: "tel",
      placeholder: "+49 \u2026",
      value: v.telefon,
      onChange: set('telefon')
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Thema",
      htmlFor: "k-thema",
      required: true,
      error: errors.thema
    }, /*#__PURE__*/React.createElement(Select, {
      id: "k-thema",
      name: "thema",
      placeholder: "Bitte w\xE4hlen",
      options: THEMEN,
      value: v.thema,
      onChange: set('thema'),
      invalid: !!errors.thema
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Wunsch-Zeitfenster",
      htmlFor: "k-zeit",
      hint: "optional"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "k-zeit",
      name: "zeitfenster",
      placeholder: "Egal",
      options: ZEITFENSTER,
      value: v.zeitfenster,
      onChange: set('zeitfenster')
    })), /*#__PURE__*/React.createElement(Field, {
      className: "fr-col-2",
      label: "Worum geht es?",
      htmlFor: "k-msg",
      required: true,
      error: errors.nachricht
    }, /*#__PURE__*/React.createElement(Textarea, {
      id: "k-msg",
      name: "nachricht",
      rows: 5,
      placeholder: "Ein paar S\xE4tze zum Projekt, Zeitraum und was du dir vorstellst.",
      value: v.nachricht,
      onChange: set('nachricht'),
      invalid: !!errors.nachricht
    })), /*#__PURE__*/React.createElement("div", {
      className: "fr-col-2"
    }, /*#__PURE__*/React.createElement(Checkbox, {
      name: "datenschutz",
      checked: v.datenschutz,
      onChange: set('datenschutz'),
      invalid: !!errors.datenschutz,
      label: "Ich habe die Datenschutzerkl\xE4rung gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden."
    }), errors.datenschutz ? /*#__PURE__*/React.createElement("span", {
      className: "fr-field__msg fr-field__msg--error",
      style: {
        display: 'block',
        marginTop: 'var(--space-2)'
      }
    }, errors.datenschutz) : null), /*#__PURE__*/React.createElement("div", {
      className: "fr-col-2",
      style: {
        display: 'flex',
        gap: 'var(--space-5)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "primary",
      size: "lg",
      arrow: true,
      disabled: status === 'sending'
    }, status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--size-label)',
        opacity: .7
      }
    }, "Antwort innerhalb von zwei Werktagen.")), status === 'error' ? /*#__PURE__*/React.createElement("p", {
      className: "fr-col-2 fr-field__msg fr-field__msg--error",
      style: {
        margin: 0
      }
    }, "Das Senden hat nicht funktioniert. Schreib mir gerne direkt an ", /*#__PURE__*/React.createElement("a", {
      href: "mailto:hallo@felix-reidinger.de"
    }, "hallo@felix-reidinger.de"), ".") : null));
  }
  function KontaktScreen({
    onNavigate
  }) {
    const {
      Section,
      Reveal,
      DuoHeading,
      Badge,
      MediaSplit,
      PrincipleItem
    } = NSK;
    const A = './assets';
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--fr-blau)',
        color: 'var(--fr-beige)',
        padding: 'clamp(120px,15vw,190px) var(--gutter) clamp(44px,6vw,80px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fr-ground fr-ground--blau"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1,
        maxWidth: 'var(--container)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      delay: 80
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "lila",
      style: {
        marginBottom: 'var(--space-5)'
      }
    }, "Erstgespr\xE4ch")), /*#__PURE__*/React.createElement(Reveal, {
      mode: "mask",
      delay: 180
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      as: "h1",
      size: "l",
      top: "Termin",
      bottom: "vereinbaren"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 360
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--size-lead)',
        lineHeight: 'var(--lh-lead)',
        maxWidth: '46ch',
        marginTop: 'var(--space-5)',
        opacity: .88
      }
    }, "Lust auf ein virtuelles Kaffee-Date? Beim ersten Kennenlern-Termin k\xF6nnen wir uns beschnuppern und schauen, was wir gemeinsam erreichen k\xF6nnen.")))), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "paper",
      className: "fr-kontakt"
    }, /*#__PURE__*/React.createElement(MediaSplit, {
      ratio: "1.5fr 0.7fr",
      gap: "clamp(32px,4vw,56px)",
      style: {
        alignItems: 'start'
      },
      media: /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(KontaktFormular, null))
    }, /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "s",
      order: "serif-cond",
      top: "So l\xE4uft",
      bottom: "das ab"
    }), /*#__PURE__*/React.createElement("div", {
      className: "fr-principles",
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(PrincipleItem, {
      size: "sm",
      number: "1."
    }, "Du schickst die Anfrage \u2014 ein paar S\xE4tze reichen."), /*#__PURE__*/React.createElement(PrincipleItem, {
      size: "sm",
      number: "2."
    }, "Ich melde mich mit zwei Terminvorschl\xE4gen."), /*#__PURE__*/React.createElement(PrincipleItem, {
      size: "sm",
      number: "3."
    }, "30 Minuten Video-Call, unverbindlich.")), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-6)',
        fontSize: 'var(--size-small)',
        opacity: .85
      }
    }, "Lieber direkt? ", /*#__PURE__*/React.createElement("a", {
      href: "mailto:hallo@felix-reidinger.de"
    }, "hallo@felix-reidinger.de"), /*#__PURE__*/React.createElement("br", null), "oder telefonisch unter +49 176 722 972 90")))), /*#__PURE__*/React.createElement(Section, {
      tone: "paper",
      texture: "cardboard",
      width: "narrow"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MediaSplit, {
      image: `${A}/img-felix-wide.jpg`,
      alt: "Felix Reidinger",
      ratio: "1fr 1fr",
      gap: "clamp(28px,5vw,56px)"
    }, /*#__PURE__*/React.createElement(DuoHeading, {
      size: "s",
      order: "serif-cond",
      top: "Sag einfach",
      bottom: "mal Hallo!",
      italic: true
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        fontSize: 'var(--size-small)',
        opacity: .85
      }
    }, "Kein Sales-Pitch, kein Vertragsgespr\xE4ch. Erst kl\xE4ren wir, ob es passt.")))));
  }
  Object.assign(window, {
    KontaktScreen,
    KontaktFormular
  });
})();

/* ---- boot ---- */
(function () {
  var DS = window.FelixReidingerDesignSystem_5335cf;
  var NavBar = DS.NavBar,
    Footer = DS.Footer;
  var LINKS = [{
    id: 'start',
    label: 'Start'
  }, {
    id: 'performance',
    label: 'Performance'
  }, {
    id: 'netzwerk',
    label: 'Netzwerk'
  }];
  var PAGES = ['start', 'performance', 'netzwerk', 'kontakt', 'impressum', 'datenschutz'];
  function pageFromHash() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    return PAGES.indexOf(h) > -1 ? h : 'start';
  }
  function Site() {
    var s = React.useState(pageFromHash());
    var page = s[0],
      setPage = s[1];
    React.useEffect(function () {
      var onHash = function () {
        setPage(pageFromHash());
      };
      window.addEventListener('hashchange', onHash);
      return function () {
        window.removeEventListener('hashchange', onHash);
      };
    }, []);
    var go = function (id) {
      if (!id || PAGES.indexOf(id) === -1) return;
      if (location.hash !== '#/' + id) location.hash = '#/' + id;
      setPage(id);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          window.scrollTo(0, 0);
        });
      });
    };
    var SCREENS = {
      start: window.StartScreen,
      performance: window.PerformanceScreen,
      netzwerk: window.NetzwerkScreen,
      kontakt: window.KontaktScreen,
      impressum: window.ImpressumScreen,
      datenschutz: window.DatenschutzScreen
    };
    var Screen = SCREENS[page] || window.StartScreen;
    return React.createElement(React.Fragment, null, React.createElement(NavBar, {
      links: LINKS,
      active: page,
      onNavigate: go,
      tone: 'beige',
      ctaId: 'kontakt'
    }), React.createElement('div', {
      className: 'fr-page',
      key: page
    }, React.createElement(Screen, {
      onNavigate: go
    })), React.createElement(Footer, {
      onNavigate: go,
      links: [{
        id: 'impressum',
        label: 'Impressum'
      }, {
        id: 'datenschutz',
        label: 'Datenschutz'
      }]
    }));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Site));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Kontakt.jsx
try { (() => {
// Kontakt / Terminanfrage — posts into a Google Sheet via a Google Apps Script
// web app. Set the endpoint once, in one place:
//
//   window.FR_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfy…/exec';
//
// Setup instructions live in ui_kits/website/GOOGLE-SHEET.md.
// Without an endpoint the form validates and shows the success state, but sends nothing.

const NSK = window.FelixReidingerDesignSystem_5335cf;
const THEMEN = ['Beratung / Strategie', 'Kreation / Konzeption', 'Performance / Digital', 'Analyse / Erfolgsmessung', 'Netzwerk / Projektteam', 'Etwas anderes'];
const ZEITFENSTER = ['Vormittags (9–12 Uhr)', 'Mittags (12–14 Uhr)', 'Nachmittags (14–17 Uhr)', 'Flexibel'];
const EMPTY = {
  name: '',
  email: '',
  unternehmen: '',
  telefon: '',
  thema: '',
  zeitfenster: '',
  nachricht: '',
  datenschutz: false
};
function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Bitte deinen Namen angeben.';
  if (!v.email.trim()) e.email = 'Bitte eine E-Mail-Adresse angeben.';else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Diese E-Mail-Adresse sieht nicht richtig aus.';
  if (!v.thema) e.thema = 'Bitte ein Thema wählen.';
  if (!v.nachricht.trim()) e.nachricht = 'Ein Satz zum Anliegen reicht.';
  if (!v.datenschutz) e.datenschutz = 'Ohne Einverständnis können wir die Anfrage nicht verarbeiten.';
  return e;
}
function KontaktFormular() {
  const {
    Field,
    Input,
    Textarea,
    Select,
    Checkbox,
    Button,
    DuoHeading,
    Reveal
  } = NSK;
  const [v, setV] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle'); // idle | sending | done | error
  const set = k => ev => {
    const val = k === 'datenschutz' ? ev.target.checked : ev.target.value;
    setV(s => ({
      ...s,
      [k]: val
    }));
    if (errors[k]) setErrors(e => {
      const n = {
        ...e
      };
      delete n[k];
      return n;
    });
  };
  const submit = async ev => {
    ev.preventDefault();
    const e = validate(v);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector('.fr-field.is-error input, .fr-field.is-error select, .fr-field.is-error textarea');
      if (first) first.focus();
      return;
    }
    setStatus('sending');
    const endpoint = window.FR_SHEET_ENDPOINT;
    if (!endpoint) {
      setStatus('done');
      return;
    }
    try {
      // text/plain avoids the CORS preflight that Apps Script does not answer
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          ...v,
          gesendet_am: new Date().toISOString(),
          quelle: 'felix-reidinger.de'
        })
      });
      setStatus('done');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };
  if (status === 'done') return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(32px,5vw,56px)',
      borderRadius: 'var(--radius-l)',
      background: 'var(--fr-beige)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "s",
    order: "serif-cond",
    top: "Danke,",
    bottom: "ist angekommen!",
    italic: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      maxWidth: '44ch'
    }
  }, "Ich melde mich innerhalb von zwei Werktagen bei dir und schicke dir zwei Terminvorschl\xE4ge."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      marginTop: 'var(--space-5)'
    },
    onClick: () => {
      setV(EMPTY);
      setStatus('idle');
    }
  }, "Weitere Anfrage"));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    className: "fr-form",
    style: {
      padding: 'clamp(28px,4vw,48px)',
      borderRadius: 'var(--radius-l)',
      background: 'var(--fr-beige)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-form-grid"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    htmlFor: "k-name",
    required: true,
    error: errors.name
  }, /*#__PURE__*/React.createElement(Input, {
    id: "k-name",
    name: "name",
    autoComplete: "name",
    placeholder: "Vor- und Nachname",
    value: v.name,
    onChange: set('name'),
    invalid: !!errors.name
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-Mail",
    htmlFor: "k-mail",
    required: true,
    error: errors.email
  }, /*#__PURE__*/React.createElement(Input, {
    id: "k-mail",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "name@unternehmen.de",
    value: v.email,
    onChange: set('email'),
    invalid: !!errors.email
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Unternehmen",
    htmlFor: "k-firma",
    hint: "optional"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "k-firma",
    name: "unternehmen",
    autoComplete: "organization",
    placeholder: "Firma",
    value: v.unternehmen,
    onChange: set('unternehmen')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefon",
    htmlFor: "k-tel",
    hint: "optional, falls ein R\xFCckruf einfacher ist"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "k-tel",
    name: "telefon",
    type: "tel",
    autoComplete: "tel",
    placeholder: "+49 \u2026",
    value: v.telefon,
    onChange: set('telefon')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Thema",
    htmlFor: "k-thema",
    required: true,
    error: errors.thema
  }, /*#__PURE__*/React.createElement(Select, {
    id: "k-thema",
    name: "thema",
    placeholder: "Bitte w\xE4hlen",
    options: THEMEN,
    value: v.thema,
    onChange: set('thema'),
    invalid: !!errors.thema
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Wunsch-Zeitfenster",
    htmlFor: "k-zeit",
    hint: "optional"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "k-zeit",
    name: "zeitfenster",
    placeholder: "Egal",
    options: ZEITFENSTER,
    value: v.zeitfenster,
    onChange: set('zeitfenster')
  })), /*#__PURE__*/React.createElement(Field, {
    className: "fr-col-2",
    label: "Worum geht es?",
    htmlFor: "k-msg",
    required: true,
    error: errors.nachricht
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "k-msg",
    name: "nachricht",
    rows: 5,
    placeholder: "Ein paar S\xE4tze zum Projekt, Zeitraum und was du dir vorstellst.",
    value: v.nachricht,
    onChange: set('nachricht'),
    invalid: !!errors.nachricht
  })), /*#__PURE__*/React.createElement("div", {
    className: "fr-col-2"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    name: "datenschutz",
    checked: v.datenschutz,
    onChange: set('datenschutz'),
    invalid: !!errors.datenschutz,
    label: "Ich habe die Datenschutzerkl\xE4rung gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden."
  }), errors.datenschutz ? /*#__PURE__*/React.createElement("span", {
    className: "fr-field__msg fr-field__msg--error",
    style: {
      display: 'block',
      marginTop: 'var(--space-2)'
    }
  }, errors.datenschutz) : null), /*#__PURE__*/React.createElement("div", {
    className: "fr-col-2",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    arrow: true,
    disabled: status === 'sending'
  }, status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-label)',
      opacity: .7
    }
  }, "Antwort innerhalb von zwei Werktagen.")), status === 'error' ? /*#__PURE__*/React.createElement("p", {
    className: "fr-col-2 fr-field__msg fr-field__msg--error",
    style: {
      margin: 0
    }
  }, "Das Senden hat nicht funktioniert. Schreib mir gerne direkt an ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:hallo@felix-reidinger.de"
  }, "hallo@felix-reidinger.de"), ".") : null));
}
function KontaktScreen({
  onNavigate
}) {
  const {
    Section,
    Reveal,
    DuoHeading,
    Badge,
    MediaSplit,
    PrincipleItem
  } = NSK;
  const A = '../../assets';
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--fr-blau)',
      color: 'var(--fr-beige)',
      padding: 'clamp(120px,15vw,190px) var(--gutter) clamp(44px,6vw,80px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-ground fr-ground--blau"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "lila",
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Erstgespr\xE4ch")), /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask",
    delay: 180
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    as: "h1",
    size: "l",
    top: "Termin",
    bottom: "vereinbaren"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 360
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--lh-lead)',
      maxWidth: '46ch',
      marginTop: 'var(--space-5)',
      opacity: .88
    }
  }, "Lust auf ein virtuelles Kaffee-Date? Beim ersten Kennenlern-Termin k\xF6nnen wir uns beschnuppern und schauen, was wir gemeinsam erreichen k\xF6nnen.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper",
    className: "fr-kontakt"
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    ratio: "1.5fr 0.7fr",
    gap: "clamp(32px,4vw,56px)",
    style: {
      alignItems: 'start'
    },
    media: /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(KontaktFormular, null))
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "s",
    order: "serif-cond",
    top: "So l\xE4uft",
    bottom: "das ab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fr-principles",
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(PrincipleItem, {
    size: "sm",
    number: "1."
  }, "Du schickst die Anfrage \u2014 ein paar S\xE4tze reichen."), /*#__PURE__*/React.createElement(PrincipleItem, {
    size: "sm",
    number: "2."
  }, "Ich melde mich mit zwei Terminvorschl\xE4gen."), /*#__PURE__*/React.createElement(PrincipleItem, {
    size: "sm",
    number: "3."
  }, "30 Minuten Video-Call, unverbindlich.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--size-small)',
      opacity: .85
    }
  }, "Lieber direkt? ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:hallo@felix-reidinger.de"
  }, "hallo@felix-reidinger.de"), /*#__PURE__*/React.createElement("br", null), "oder telefonisch unter +49 176 722 972 90")))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "cardboard",
    width: "narrow"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${A}/img-felix-wide.jpg`,
    alt: "Felix Reidinger",
    ratio: "1fr 1fr",
    gap: "clamp(28px,5vw,56px)"
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "s",
    order: "serif-cond",
    top: "Sag einfach",
    bottom: "mal Hallo!",
    italic: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--size-small)',
      opacity: .85
    }
  }, "Kein Sales-Pitch, kein Vertragsgespr\xE4ch. Erst kl\xE4ren wir, ob es passt.")))));
}
Object.assign(window, {
  KontaktScreen,
  KontaktFormular
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Kontakt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Legal.jsx
try { (() => {
const NSL = window.FelixReidingerDesignSystem_5335cf;
const AL = '../../assets';
function LegalHero({
  badge,
  top,
  bottom
}) {
  const {
    Reveal,
    DuoHeading,
    Badge
  } = NSL;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--fr-blau)',
      color: 'var(--fr-beige)',
      padding: 'clamp(120px,16vw,200px) var(--gutter) clamp(48px,7vw,88px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-ground fr-ground--blau"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "lila",
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, badge)), /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask",
    delay: 180
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    as: "h1",
    size: "l",
    top: top,
    bottom: bottom
  }))));
}
function LegalBlock({
  block,
  i
}) {
  const {
    Reveal
  } = NSL;
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: Math.min(i, 4) * 60
  }, block.h3 ? /*#__PURE__*/React.createElement("h3", null, block.h3) : null, block.h4 ? /*#__PURE__*/React.createElement("h4", null, block.h4) : null, (block.p || []).map((t, n) => /*#__PURE__*/React.createElement("p", {
    key: n,
    dangerouslySetInnerHTML: {
      __html: t
    }
  })), block.ul ? /*#__PURE__*/React.createElement("ul", null, block.ul.map((t, n) => /*#__PURE__*/React.createElement("li", {
    key: n,
    dangerouslySetInnerHTML: {
      __html: t
    }
  }))) : null);
}
function ImpressumScreen({
  onNavigate
}) {
  const {
    Section,
    Reveal,
    DuoHeading,
    Button,
    MediaSplit
  } = NSL;
  const blocks = [{
    h3: 'Streitschlichtung',
    p: ['Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.']
  }, {
    h3: 'Haftungsausschluss (Disclaimer)'
  }, {
    h4: 'Haftung für Inhalte',
    p: ['Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.']
  }, {
    h4: 'Haftung für Links',
    p: ['Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.']
  }, {
    h4: 'Urheberrecht',
    p: ['Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.']
  }];
  const facts = [['Anschrift', ['Felix Reidinger', 'Ludwigstraße 128', '70197 Stuttgart']], ['Kontakt', ['Telefon +49 176 722 972 90', 'E-Mail: <a href="mailto:hallo@felix-reidinger.de">hallo@felix-reidinger.de</a>', 'Internet: <a href="https://www.felix-reidinger.de">www.felix-reidinger.de</a>']], ['Vertretungsberechtigte Geschäftsführer', ['Felix Reidinger-Tomschin']], ['Steuernummer', ['gemäß § 27a Umsatzsteuergesetz: 95458/14232']], ['Inhaltlich Verantwortlicher i.S.d. § 18 Abs. 2 MStV', ['Felix Reidinger-Tomschin', 'Ludwigstraße 128', '70197 Stuttgart']]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LegalHero, {
    badge: "Rechtliches",
    top: "Impressum",
    bottom: "Angaben gem\xE4\xDF TMG"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper"
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    ratio: "1fr 1.15fr",
    gap: "clamp(32px,6vw,80px)",
    style: {
      alignItems: 'start'
    },
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-5)'
      }
    }, facts.map(([label, lines]) => /*#__PURE__*/React.createElement(Reveal, {
      key: label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: 'var(--border-width) solid var(--border-hairline)',
        paddingTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fr-eyebrow",
      style: {
        display: 'block',
        marginBottom: 'var(--space-2)'
      }
    }, label), lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontSize: 'var(--size-body)'
      },
      dangerouslySetInnerHTML: {
        __html: l
      }
    }))))))
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-prose"
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement(LegalBlock, {
    key: i,
    block: b,
    i: i
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      marginTop: 'var(--space-6)'
    },
    onClick: () => onNavigate('start'),
    arrow: true
  }, "Zur Startseite"))))));
}
const DATENSCHUTZ = [{
  p: ['Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als „Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als „Onlineangebot").']
}, {
  h3: 'Verantwortlicher — Übersicht der Verarbeitungen',
  p: ['Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.']
}, {
  h4: 'Arten der verarbeiteten Daten',
  ul: ['Kontaktdaten.', 'Inhaltsdaten.', 'Nutzungsdaten.', 'Meta-, Kommunikations- und Verfahrensdaten.']
}, {
  h4: 'Kategorien betroffener Personen',
  ul: ['Kommunikationspartner.', 'Nutzer.']
}, {
  h4: 'Zwecke der Verarbeitung',
  ul: ['Kontaktanfragen und Kommunikation.', 'Sicherheitsmaßnahmen.', 'Verwaltung und Beantwortung von Anfragen.', 'Feedback.', 'Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.', 'Informationstechnische Infrastruktur.']
}, {
  h3: 'Maßgebliche Rechtsgrundlagen',
  p: ['Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.'],
  ul: ['<strong>Einwilligung</strong> (Art. 6 Abs. 1 S. 1 lit. a) DSGVO) - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.', '<strong>Vertragserfüllung und vorvertragliche Anfragen</strong> (Art. 6 Abs. 1 S. 1 lit. b) DSGVO) - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.', '<strong>Berechtigte Interessen</strong> (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.']
}, {
  p: ['Nationale Datenschutzregelungen in Deutschland: Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.']
}, {
  h3: 'Sicherheitsmaßnahmen',
  p: ['Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.', 'Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.', 'TLS/SSL-Verschlüsselung (https): Um die Daten der Benutzer, die über unsere Online-Dienste übertragen werden, zu schützen, verwenden wir TLS/SSL-Verschlüsselung. Secure Sockets Layer (SSL) ist die Standardtechnologie zur Sicherung von Internetverbindungen durch Verschlüsselung der zwischen einer Website oder App und einem Browser (oder zwischen zwei Servern) übertragenen Daten. Transport Layer Security (TLS) ist eine aktualisierte und sicherere Version von SSL. Hyper Text Transfer Protocol Secure (HTTPS) wird in der URL angezeigt, wenn eine Website durch ein SSL/TLS-Zertifikat gesichert ist.']
}, {
  h3: 'Übermittlung von personenbezogenen Daten',
  p: ['Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.']
}, {
  h3: 'Internationale Datentransfers',
  p: ['Datenverarbeitung in Drittländern: Sofern wir Daten in einem Drittland (d. h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben. Sofern das Datenschutzniveau in dem Drittland mittels eines Angemessenheitsbeschlusses anerkannt wurde (Art. 45 DSGVO), dient dieser als Grundlage des Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn das Datenschutzniveau anderweitig gesichert ist, insbesondere durch Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) DSGVO), ausdrückliche Einwilligung oder im Fall vertraglicher oder gesetzlich erforderlicher Übermittlung (Art. 49 Abs. 1 DSGVO). Im Übrigen teilen wir Ihnen die Grundlagen der Drittlandübermittlung bei den einzelnen Anbietern aus dem Drittland mit, wobei die Angemessenheitsbeschlüsse als Grundlagen vorrangig gelten. Informationen zu Drittlandtransfers und vorliegenden Angemessenheitsbeschlüssen können dem Informationsangebot der EU-Kommission entnommen werden: <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de">ec.europa.eu</a>.', 'EU-US Trans-Atlantic Data Privacy Framework: Im Rahmen des sogenannten „Data Privacy Framework" (DPF) hat die EU-Kommission das Datenschutzniveau ebenfalls für bestimmte Unternehmen aus den USA im Rahmen der Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Die Liste der zertifizierten Unternehmen als auch weitere Informationen zu dem DPF können Sie der Webseite des Handelsministeriums der USA unter <a href="https://www.dataprivacyframework.gov/">dataprivacyframework.gov</a> (in Englisch) entnehmen. Wir informieren Sie im Rahmen der Datenschutzhinweise, welche von uns eingesetzten Diensteanbieter unter dem Data Privacy Framework zertifiziert sind.']
}, {
  h3: 'Löschung von Daten',
  p: ['Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z. B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D. h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z. B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist. Im Rahmen unserer Datenschutzhinweise können wir den Nutzern weitere Informationen zu der Löschung sowie zu der Aufbewahrung von Daten mitteilen, die speziell für die jeweiligen Verarbeitungsprozesses gelten.']
}, {
  h3: 'Rechte der betroffenen Personen',
  p: ['Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:'],
  ul: ['<strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.', '<strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.', '<strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.', '<strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.', '<strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.', '<strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.', '<strong>Beschwerde bei Aufsichtsbehörde:</strong> Entsprechend den gesetzlichen Vorgaben und unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, haben Sie ferner das Recht, bei einer Datenschutzaufsichtsbehörde, insbesondere einer Aufsichtsbehörde im Mitgliedstaat, in dem Sie sich gewöhnlich aufhalten, der Aufsichtsbehörde Ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes, eine Beschwerde einzulegen, wenn Sie der Ansicht sei sollten, dass die Verarbeitung der Ihre Person betreffenden personenbezogenen Daten gegen die DSGVO verstößt.']
}, {
  h3: 'Einsatz von Cookies',
  p: ['Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die Informationen auf Endgeräten speichern und Informationen aus den Endgeräten auslesen. Z. B. um den Login-Status in einem Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete Funktionen eines Onlineangebotes speichern. Cookies können ferner zu unterschiedlichen Zwecken eingesetzt werden, z. B. zu Zwecken der Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme.', 'Hinweise zur Einwilligung: Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer wenn diese gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn das Speichern und das Auslesen der Informationen, also auch von Cookies, unbedingt erforderlich sind, um dem den Nutzern einen von ihnen ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) zur Verfügung zu stellen. Zu den unbedingt erforderlichen Cookies gehören in der Regel Cookies mit Funktionen, die der Anzeige und Lauffähigkeit des Onlineangebotes, dem Lastausgleich, der Sicherheit, der Speicherung der Präferenzen und Auswahlmöglichkeiten der Nutzer oder ähnlichen mit der Bereitstellung der Haupt- und Nebenfunktionen des von den Nutzern angeforderten Onlineangebotes zusammenhängenden Zwecken dienen. Die widerrufliche Einwilligung wird gegenüber den Nutzern deutlich kommuniziert und enthält die Informationen zu der jeweiligen Cookie-Nutzung.', 'Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: Auf welcher datenschutzrechtlichen Rechtsgrundlage wir die personenbezogenen Daten der Nutzer mit Hilfe von Cookies verarbeiten, hängt davon ab, ob wir Nutzer um eine Einwilligung bitten. Falls die Nutzer einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten Interessen (z. B. an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und Verbesserung seiner Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen der Erfüllung unserer vertraglichen Pflichten erfolgt, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu erfüllen. Zu welchen Zwecken die Cookies von uns verarbeitet werden, darüber klären wir im Laufe dieser Datenschutzerklärung oder im Rahmen von unseren Einwilligungs- und Verarbeitungsprozessen auf.', 'Speicherdauer: Im Hinblick auf die Speicherdauer werden die folgenden Arten von Cookies unterschieden:'],
  ul: ['<strong>Temporäre Cookies</strong> (auch: Session- oder Sitzungs-Cookies): Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und sein Endgerät (z. B. Browser oder mobile Applikation) geschlossen hat.', '<strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Endgerätes gespeichert. So können beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die mit Hilfe von Cookies erhobenen Daten der Nutzer zur Reichweitenmessung verwendet werden. Sofern wir Nutzern keine expliziten Angaben zur Art und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten Nutzer davon ausgehen, dass Cookies permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.']
}, {
  p: ['Allgemeine Hinweise zum Widerruf und Widerspruch (sog. „Opt-Out"): Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und der Verarbeitung entsprechend den gesetzlichen Vorgaben widersprechen. Hierzu können Nutzer unter anderem die Verwendung von Cookies in den Einstellungen ihres Browsers einschränken (wobei dadurch auch die Funktionalität unseres Onlineangebotes eingeschränkt sein kann). Ein Widerspruch gegen die Verwendung von Cookies zu Online-Marketing-Zwecken kann auch über die Websites <a href="https://optout.aboutads.info">optout.aboutads.info</a> und <a href="https://www.youronlinechoices.com/">youronlinechoices.com</a> erklärt werden.', 'Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).', 'Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies, bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen werden können. Hierbei wird die Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut wiederholen zu müssen und die Einwilligung entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu können. Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten, gelten die folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren betragen. Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem Browser, System und verwendeten Endgerät gespeichert; Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).']
}, {
  h3: 'Bereitstellung des Onlineangebotes und Webhosting',
  p: ['Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.'],
  ul: ['Verarbeitete Datenarten: Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).', 'Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).', 'Zwecke der Verarbeitung: Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.', 'Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).', 'Bereitstellung Onlineangebot auf gemietetem Speicherplatz: Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter (auch „Webhoster" genannt) mieten oder anderweitig beziehen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).', 'Erhebung von Zugriffsdaten und Logfiles: Der Zugriff auf unser Onlineangebot wird in Form von so genannten „Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z. B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Löschung von Daten: Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.']
}, {
  h3: 'Kontakt- und Anfragenverwaltung',
  p: ['Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.'],
  ul: ['Verarbeitete Datenarten: Kontaktdaten (z. B. E-Mail, Telefonnummern); Inhaltsdaten (z. B. Eingaben in Onlineformularen); Nutzungsdaten; Meta-, Kommunikations- und Verfahrensdaten.', 'Betroffene Personen: Kommunikationspartner.', 'Zwecke der Verarbeitung: Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.', 'Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).', 'Kontaktformular: Wenn Nutzer über unser Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens; Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).']
}, {
  h3: 'Änderung und Aktualisierung der Datenschutzerklärung',
  p: ['Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.', 'Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.']
}, {
  h3: 'Begriffsdefinitionen',
  p: ['In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich definiert sind, gelten deren gesetzliche Definitionen. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen.'],
  ul: ['<strong>Personenbezogene Daten:</strong> „Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z. B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.', '<strong>Verantwortlicher:</strong> Als „Verantwortlicher" wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.', '<strong>Verarbeitung:</strong> „Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.']
}];
function DatenschutzScreen({
  onNavigate
}) {
  const {
    Section,
    Reveal,
    Button
  } = NSL;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LegalHero, {
    badge: "Rechtliches",
    top: "Datenschutz",
    bottom: "erkl\xE4rung"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper",
    width: "narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-prose"
  }, DATENSCHUTZ.map((b, i) => /*#__PURE__*/React.createElement(LegalBlock, {
    key: i,
    block: b,
    i: i
  })), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      marginTop: 'var(--space-7)'
    },
    onClick: () => onNavigate('start'),
    arrow: true
  }, "Zur Startseite")))));
}
Object.assign(window, {
  ImpressumScreen,
  DatenschutzScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Legal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
const NSP = window.FelixReidingerDesignSystem_5335cf;
const AP = '../../assets';
function PerformanceScreen({
  onNavigate
}) {
  const {
    Section,
    Reveal,
    DuoHeading,
    Badge,
    Button,
    KompetenzCard,
    MediaSplit,
    PrincipleItem,
    CtaPanel,
    Marquee
  } = NSP;
  const Hero = window.Hero;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    image: `${AP}/img-hero-performance.jpg`,
    badge: "Performance Marketing",
    top: "Messbar",
    bottom: "erfolgreich",
    kicker: "Relevanz statt Reichweite ins Leere.",
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper"
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${AP}/img-pipeline.jpg`,
    alt: "",
    ratio: "0.9fr 1fr",
    gap: "clamp(32px,6vw,80px)"
  }, /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask"
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "m",
    order: "serif-cond",
    top: "Starke Inhalte,",
    bottom: "volle Pipeline"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--lh-lead)',
      maxWidth: '52ch',
      marginTop: 'var(--space-5)'
    }
  }, "So sorgen wir f\xFCr Leads und Abschl\xFCsse"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '56ch',
      opacity: .85
    }
  }, "Deine Inhalte sind stark \u2013 wir sorgen daf\xFCr, dass sie die richtigen Entscheider erreichen und aus Reichweite relevante Leads und neue Gesch\xE4ftschancen in deiner Pipeline entstehen. Im B2B reicht es nicht, Anzeigen zu schalten und auf die richtigen Leads zu hoffen. Nur rund 5 % der Unternehmen sind aktiv auf der Suche nach einer neuen L\xF6sung \u2013 die restlichen 95 % entscheiden sich f\xFCr Anbieter, die sie schon vorher kennen."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '56ch',
      opacity: .85
    }
  }, "Deshalb geht Performance Marketing \xFCber Klicks und Leads hinaus: Es schafft Aufmerksamkeit mit Mehrwert, baut Beziehungen auf und sorgt f\xFCr messbare Ergebnisse in deiner Pipeline \u2013 ob Antr\xE4ge, Bewerbungen oder konkrete Deals.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    texture: "lila"
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${AP}/img-sven.jpg`,
    alt: "Sven Tomschin",
    reverse: true,
    ratio: "1fr 0.9fr",
    gap: "clamp(32px,6vw,80px)"
  }, /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask"
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "m",
    order: "serif-cond",
    top: "Relevanz statt",
    bottom: "Reichweite ins Leere"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '54ch',
      marginTop: 'var(--space-5)',
      opacity: .88
    }
  }, "Sven Tomschin ist freier Berater im Team von Felix Reidinger und bringt \xFCber zehn Jahre Erfahrung im Bereich Social & Digital Marketing mit. Er hat Unternehmen aus Banking & Finance, Handel, SaaS und Industrie dabei unterst\xFCtzt, ihre Kampagnen erfolgreich aufzubauen \u2013 von der Strategie bis zum messbaren Erfolg."))), /*#__PURE__*/React.createElement("div", {
    className: "fr-principles",
    style: {
      marginTop: 'clamp(48px,7vw,104px)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "beige",
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Die Grunds\xE4tze seiner Arbeit")), ['Marketing und Sales zusammen denken – statt Leads ins Leere laufen zu lassen.', 'Den Faktor Mensch in den Mittelpunkt rücken: authentisch, nahbar, wirksam.', 'Um Performance sicherzustellen, müssen Kampagnen datengetrieben aufgesetzt werden.'].map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 120
  }, /*#__PURE__*/React.createElement(PrincipleItem, {
    number: `${i + 1}.`
  }, t))))), /*#__PURE__*/React.createElement(Marquee, {
    items: ["LinkedIn Ads", "Meta Ads", "Account Based Marketing", "Nurturing", "Reporting"],
    tone: "deep"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "cardboard"
  }, /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "m",
    order: "serif-cond",
    top: "So setzen wir",
    bottom: "Performance Marketing um"
  })), /*#__PURE__*/React.createElement("div", {
    "data-fit-group": true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-5)'
    }
  }, [{
    img: 'img-workshops.jpg',
    top: 'Workshops',
    bottom: 'Audits',
    text: 'Wir klären gemeinsam die optimale Positionierung eures Angebots, definieren den Lead-to-Sales-Prozess und sichern frühzeitig das Buy-in vom Vertrieb.'
  }, {
    img: 'img-setup.jpg',
    top: 'Set-up',
    bottom: 'Testing',
    text: 'Wir setzen eure Kampagne auf den passenden Kanälen um – mit Fokus auf LinkedIn Ads, Meta Ads und Account Based Marketing.'
  }, {
    img: 'img-nurturing.jpg',
    top: 'Nurturing',
    bottom: 'Pipeline',
    text: 'Leads werden aktiv entwickelt: Mit Frameworks für Nurturing, E-Mail-Strecken und Social Selling wandeln wir Kontakte in Geschäft.'
  }, {
    img: 'img-kompetenz-analyse.jpg',
    top: 'Reporting',
    bottom: 'Learning',
    text: 'Klare Auswertungen zeigen, was funktioniert – und wo wir optimieren können.'
  }].map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.top,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(KompetenzCard, {
    image: `${AP}/${c.img}`,
    top: c.top,
    bottom: c.bottom
  }, c.text))))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CtaPanel, {
    onCta: () => onNavigate('kontakt')
  }, "Lust auf ein virtuelles Kaffee-Date? Bei einem ersten Kennenlern-Termin k\xF6nnen wir uns beschnuppern und schauen, was wir gemeinsam erreichen k\xF6nnen.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${AP}/img-sven-portrait.jpg`,
    alt: "Sven Tomschin",
    ratio: "1.1fr 1fr",
    gap: "clamp(32px,6vw,72px)"
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "m",
    order: "serif-cond",
    top: "Sag einfach",
    bottom: "mal Hallo!",
    italic: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "gerne per Mail an: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:sven@fr-kommunikation.de"
  }, "sven@fr-kommunikation.de")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      marginTop: 'var(--space-5)'
    },
    onClick: () => onNavigate('start'),
    arrow: true
  }, "Zur Startseite")))));
}
function NetzwerkScreen({
  onNavigate
}) {
  const {
    Section,
    Reveal,
    DuoHeading,
    Badge,
    Button,
    MediaSplit,
    CtaPanel
  } = NSP;
  const Hero = window.Hero;
  const kompetenzen = [['Art Direction', 'Illustration'], ['Fotografie', 'Bildbearbeitung'], ['Filmproduktion', 'Motion Design'], ['SEO', 'GEO'], ['Google Ads', 'Analytics'], ['Programmierung', 'Coding']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    image: `${AP}/img-netzwerk-klimawerk.jpg`,
    badge: "Netzwerk",
    top: "Thinking big?",
    bottom: "Arbeiten im Netzwerk",
    kicker: "Ein passendes Team f\xFCr jedes Projekt.",
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper",
    width: "narrow"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--lh-lead)',
      maxWidth: '60ch'
    }
  }, "In einer sich st\xE4ndig ver\xE4ndernden Kommunikationslandschaft ist eine Idee oft erst dann richtig stark, wenn verschiedene Perspektiven und Expertisen sie gemeinsam formen. Deshalb arbeite ich in einem Netzwerk erfahrener Spezialist:innen und stelle je nach Bedarf ein passendes Team zusammen.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140,
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "s",
    order: "serif-cond",
    top: "Das Netzwerk als",
    bottom: "Versprechen f\xFCr Qualit\xE4t"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '62ch',
      marginTop: 'var(--space-5)',
      opacity: .85
    }
  }, "Mein Netzwerk mach die Zusammenarbeit mit mir vielf\xE4ltig und flexibel. Wenn ein Projekt besondere Anforderungen hat, binde ich gezielt die passenden Partner:innen ein. Mein Netzwerk umfasst Freelancer und Agenturen mit unterschiedlichen Schwerpunkten: Von der Redaktion \xFCber Art Direktion, Gestaltung, Motion Design, Schnitt und Kamera, Fotografie, Programmierung bis SEO arbeite ich mich Menschen zusammen, die einen hohen Anspruch an Qualit\xE4t, Erfahrung und Wirksamkeit von Kommunikation haben. Das bedeutet f\xFCr dich: Zugriff auf exzellente, geb\xFCndelte Kompetenzen ohne Umwege und ohne unn\xF6tigen Verwaltungsaufwand."))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    texture: "lila"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "beige",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "Kompetenzen im Netzwerk")), /*#__PURE__*/React.createElement("div", {
    "data-fit-group": true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'var(--space-5) var(--space-6)'
    }
  }, kompetenzen.map(([a, b], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: a,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-duo-fit",
    style: {
      padding: 'var(--space-6) var(--space-5)',
      borderTop: 'var(--border-width) solid var(--border-on-deep)'
    }
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    as: "h3",
    size: "s",
    order: "serif-cond",
    top: a,
    bottom: b,
    fit: true
  })))))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "cardboard"
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${AP}/img-netzwerk-team.jpg`,
    alt: "Netzwerk",
    reverse: true,
    ratio: "1fr 1fr",
    gap: "clamp(32px,6vw,80px)"
  }, /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask"
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "l",
    order: "serif-cond",
    top: "Thinking",
    bottom: "big?",
    italic: true
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '50ch',
      marginTop: 'var(--space-5)'
    }
  }, "Dein Projekt ist vielschichtig und komplex?"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '54ch',
      opacity: .85
    }
  }, "Ich treibe Kommunikationsprojekte gerne verantwortlich voran, kann Aufw\xE4nde realistisch einsch\xE4tzen und planen und stelle dir bei Bedarf ein passendes Team von Fachexpert:innen aus meinem interdisziplin\xE4ren Netzwerk zusammen."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      marginTop: 'var(--space-6)'
    },
    onClick: () => onNavigate('start'),
    arrow: true
  }, "Zur Startseite")))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CtaPanel, {
    onCta: () => onNavigate('kontakt')
  }, "Lust auf ein virtuelles Kaffee-Date? Bei einem ersten Kennenlern-Termin k\xF6nnen wir uns beschnuppern und schauen, was wir gemeinsam erreichen k\xF6nnen."))));
}
Object.assign(window, {
  PerformanceScreen,
  NetzwerkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Start.jsx
try { (() => {
const NS = window.FelixReidingerDesignSystem_5335cf;
const {
  Section,
  Reveal,
  Marquee,
  DuoHeading,
  Badge,
  Eyebrow,
  Button,
  ArrowLink,
  KompetenzCard,
  StatBlock,
  MediaSplit,
  CtaPanel
} = NS;
const A = '../../assets';
function useScrollY() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const host = document.querySelector('[data-fr-scroll]') || window;
    const read = () => setY(host === window ? window.scrollY : host.scrollTop);
    host.addEventListener('scroll', read, {
      passive: true
    });
    read();
    return () => host.removeEventListener('scroll', read);
  }, []);
  return y;
}
function CountUp({
  to = 10,
  suffix = '+',
  duration = 1200
}) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf,
      started = false;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = t => {
          const p = Math.min(1, (t - t0) / duration);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }), {
      threshold: .5
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, n, suffix);
}
function Hero({
  image,
  badge,
  top,
  bottom,
  kicker,
  onNavigate
}) {
  const y = useScrollY();
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: 'min(100svh,880px)',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: 'var(--fr-blau)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '118%',
      objectFit: 'cover',
      transform: `translate3d(0,${y * -0.12}px,0)`,
      animation: 'fr-hero-in 1600ms var(--ease-out) both'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(23,15,68,.66) 0%,rgba(23,15,68,.30) 34%,rgba(23,15,68,.62) 72%,rgba(23,15,68,.92) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter) clamp(48px,8vw,110px)',
      color: 'var(--fr-beige)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "dark",
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, badge)), /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask",
    delay: 320
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    as: "h1",
    size: "xl",
    top: top,
    bottom: bottom
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 620,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    arrow: true,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate('kontakt');
      }
    },
    href: onNavigate ? undefined : 'mailto:hallo@felix-reidinger.de'
  }, "Termin vereinbaren"), kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      opacity: .75,
      maxWidth: '34ch'
    }
  }, kicker) : null)));
}
function StartScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    image: `${A}/img-hero.jpg`,
    badge: "B2B-Kommunikation",
    top: "Messbar",
    bottom: "erfolgreich",
    kicker: "Unternehmenskommunikation, Social Media, Web, Performance Marketing.",
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper"
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${A}/img-felix-portrait.jpg`,
    alt: "Felix Reidinger",
    ratio: "0.85fr 1fr",
    gap: "clamp(32px,6vw,88px)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: 'block',
      marginBottom: 'var(--space-4)'
    }
  }, "Jahre Erfahrung in B2B-Kommunikation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-display-l)',
      lineHeight: .95
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: 10
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '52ch',
      marginTop: 'var(--space-5)'
    }
  }, "Egal ob technisch anspruchsvolle Themen oder komplexe und vielschichtige Customer Journey - ich bin seit mehr als zehn Jahren f\xFCr Kund:innen in Industrie und Mittelstand als Kommunikationsberater t\xE4tig. Als Freiberufler arbeite ich f\xFCr Industrieunternehmen, Mittelst\xE4ndler oder Agenturen mit einem Fokus auf Multichannel-Kommunikation."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      marginTop: 'var(--space-6)'
    },
    onClick: () => onNavigate('performance'),
    arrow: true
  }, "Referenzen")))), /*#__PURE__*/React.createElement(Marquee, {
    items: ["Strategie", "Konzeption", "Performance", "Erfolgsmessung", "Multichannel", "Redaktion", "Analyse"],
    tone: "accent"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    texture: "lila"
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${A}/img-sven.jpg`,
    alt: "Sven Tomschin",
    reverse: true,
    ratio: "1fr 0.95fr",
    gap: "clamp(32px,6vw,88px)"
  }, /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask"
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "m",
    order: "serif-cond",
    top: "Performance",
    bottom: "Leads und Abschl\xFCsse"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '54ch',
      marginTop: 'var(--space-5)',
      opacity: .88
    }
  }, "Sven Tomschin ist freier Berater im Team von Felix Reidinger und bringt \xFCber zehn Jahre Erfahrung im Bereich Social & Digital Marketing mit. Er hat Unternehmen aus Banking & Finance, Handel, SaaS und Industrie dabei unterst\xFCtzt, ihre Kampagnen erfolgreich aufzubauen \u2013 von der Strategie bis zum messbaren Erfolg. Sven ist dein Ansprechpartner, wenn es darum geht, digitale Kampagnen im B2B so aufzusetzen, dass sie nicht nur Reichweite erzeugen, sondern echte Pipeline."), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    style: {
      marginTop: 'var(--space-6)'
    },
    onClick: () => onNavigate('performance'),
    arrow: true
  }, "Performance Marketing")))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "cardboard"
  }, /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "m",
    top: "Kompetenzen",
    bottom: "im \xDCberblick"
  })), /*#__PURE__*/React.createElement("div", {
    "data-fit-group": true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-5)'
    }
  }, [{
    img: 'img-kompetenz-beratung.jpg',
    top: 'Beratung',
    bottom: 'Strategie',
    text: 'Du bist auf der Suche nach einem Strategie-Sparringspartner mit einem unabhängigen Blick von Außen? Wir unterstützen dich gerne bei der Entwicklung, Bewertung oder Umsetzung von Strategien und Konzepten.'
  }, {
    img: 'img-kompetenz-kreation.jpg',
    top: 'Kreation',
    bottom: 'Konzeption',
    text: 'Knappe Timings, zusätzliche Aufgaben und komplexe Themen lassen die Umsetzung in die ferne Zukunft rücken? Dann unterstützen wir dich und dein Team als zusätzliche Kapa+ in der Planung. Projektsteuerung oder Redaktion.'
  }, {
    img: 'img-kompetenz-performance.jpg',
    top: 'Performance',
    bottom: 'Digital',
    text: 'Deine Contents sind top, jedoch erreichen sie nicht die richtigen Menschen? Wir setzen gemeinsam mit dir die passenden Marketing-Kanäle auf und spielen deine Inhalte zielgerichtet aus.'
  }, {
    img: 'img-kompetenz-analyse.jpg',
    top: 'Analyse',
    bottom: 'Erfolgsmessung',
    text: 'Du möchtest herausfinden, was deine Kommunikation wirklich bringt? Egal ob Benchmark, Performance Report oder Inhaltsanalysen - die Erfolgsmessung über verschiedene Kanäle hinweg ist unser Steckenpferd.'
  }].map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.top,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(KompetenzCard, {
    image: `${A}/${c.img}`,
    top: c.top,
    bottom: c.bottom
  }, c.text))))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    texture: "lila"
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${A}/img-netzwerk-team.jpg`,
    alt: "Netzwerk",
    ratio: "1fr 1fr",
    gap: "clamp(32px,6vw,88px)"
  }, /*#__PURE__*/React.createElement(Reveal, {
    mode: "mask"
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "l",
    order: "serif-cond",
    top: "Thinking",
    bottom: "big?",
    italic: true
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '50ch',
      marginTop: 'var(--space-5)',
      opacity: .88
    }
  }, "Dein Projekt ist vielschichtig und komplex? Ich treibe Kommunikationsprojekte gerne verantwortlich voran, kann Aufw\xE4nde realistisch einsch\xE4tzen und planen und stelle dir bei Bedarf ein passendes Team von Fachexpert:innen aus meinem interdisziplin\xE4ren Netzwerk zusammen."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    onClick: e => {
      e.preventDefault();
      onNavigate('netzwerk');
    }
  }, "Netzwerk"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    texture: "paper"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CtaPanel, {
    onCta: () => onNavigate('kontakt')
  }, "Lust auf ein virtuelles Kaffee-Date? Bei einem ersten Kennenlern-Termin k\xF6nnen wir uns beschnuppern und schauen, was wir gemeinsam erreichen k\xF6nnen.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(MediaSplit, {
    image: `${A}/img-felix-wide.jpg`,
    alt: "Felix Reidinger",
    ratio: "1.1fr 1fr",
    gap: "clamp(32px,6vw,72px)"
  }, /*#__PURE__*/React.createElement(DuoHeading, {
    size: "m",
    order: "serif-cond",
    top: "Sag einfach",
    bottom: "mal Hallo!",
    italic: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "gerne per Mail an: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:hallo@felix-reidinger.de"
  }, "hallo@felix-reidinger.de"))))));
}
Object.assign(window, {
  StartScreen,
  Hero,
  Reveal,
  CountUp,
  useScrollY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Start.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ds-dev-fallback.js
try { (() => {
// Rebuilds the design-system namespace from the component sources in the browser.
// Keeps this mock in sync with the component files and lets the page render even
// before _ds_bundle.js has been compiled. Falls back to the compiled bundle on error.
(function () {
  const NS = 'FelixReidingerDesignSystem_5335cf';
  const FILES = ['core/Logo', 'core/Button', 'core/Badge', 'core/DuoHeading', 'core/ArrowLink', 'layout/Reveal', 'layout/Section', 'layout/Marquee', 'content/KompetenzCard', 'content/StatBlock', 'content/PrincipleItem', 'content/MediaSplit', 'content/CtaPanel', 'navigation/NavBar', 'navigation/Footer', 'forms/Field'];
  window.__FR_DEV_BUNDLE = (async () => {
    try {
      const srcs = await Promise.all(FILES.map(p => fetch('../../components/' + p + '.jsx').then(r => r.text())));
      const code = srcs.map(s => s.replace(/^\s*import[^;]+;\s*$/gm, '').replace(/\bexport\s+(function|const)\b/g, '$1')).join('\n');
      const names = [...code.matchAll(/^function ([A-Z]\w+)/gm)].map(m => m[1]);
      const js = Babel.transform(code, {
        presets: [['react', {
          runtime: 'classic'
        }]]
      }).code + '\nreturn {' + names.join(',') + '};';
      window[NS] = Object.assign({}, new Function('React', js)(window.React));
    } catch (e) {
      console.warn('ds-dev-fallback: using compiled bundle', e);
    }
    return window[NS];
  })();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ds-dev-fallback.js", error: String((e && e.message) || e) }); }

__ds_ns.CtaPanel = __ds_scope.CtaPanel;

__ds_ns.KompetenzCard = __ds_scope.KompetenzCard;

__ds_ns.MediaSplit = __ds_scope.MediaSplit;

__ds_ns.PrincipleItem = __ds_scope.PrincipleItem;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DuoHeading = __ds_scope.DuoHeading;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LogoLockup = __ds_scope.LogoLockup;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
