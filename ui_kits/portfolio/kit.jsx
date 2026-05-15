// Shared helpers + small primitives used by every section.
// Exposed on window so other component files can pick them up.

const { useEffect, useRef, useState, useCallback } = React;

/* ----- Reveal: fades + slides children in once they enter the viewport ----- */
function Reveal({ children, direction = "up", stagger = false, className = "", as = "div", ...rest }) {
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [
    "reveal",
    direction === "left" ? "from-left" : "",
    direction === "right" ? "from-right" : "",
    stagger ? "stagger" : "",
    className,
  ].filter(Boolean).join(" ");

  return <Tag ref={ref} className={cls} {...rest}>{children}</Tag>;
}

/* ----- Section header block (eyebrow + title + subtitle) ----- */
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <Reveal direction="left" className="section-head">
      {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </Reveal>
  );
}

/* ----- TagPill (renders the [label, cat] tuples from data.js) ----- */
function TagPill({ label, cat = "backend" }) {
  return <span className={`tagpill cat-${cat}`}>{label}</span>;
}

/* ----- Icon set (Lucide-shape SVG paths, inlined to avoid CDN race) ----- */
const Icons = {
  mail:    <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 8l9 6 9-6"/></>,
  phone:   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  globe:   <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  github:  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.4 3.4 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.4 5.4 0 0 0 20 6.77a5 5 0 0 0-.09-3.77S18.73 2.65 16 4.5a13.4 13.4 0 0 0-7 0C6.27 2.65 5.09 3 5.09 3a5 5 0 0 0-.09 3.77 5.4 5.4 0 0 0-1.5 3.75c0 5.42 3.3 6.61 6.44 7A3.4 3.4 0 0 0 9 20.13V24"/>,
  linkedin:<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  pin:     <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
  download:<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></>,
  copy:    <><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
  arrowUR: <><path d="M7 17L17 7"/><path d="M9 7h8v8"/></>,
  arrowR:  <><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></>,
  chevD:   <path d="M6 9l6 6 6-6"/>,
  check:   <path d="M5 12l5 5L20 7"/>,
  send:    <><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></>,
  menu:    <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>,
  x:       <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>,
  arrowUp: <><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></>,
};

function Icon({ name, size, className = "icon", ...rest }) {
  const d = Icons[name];
  if (!d) return null;
  const style = size ? { width: size, height: size } : undefined;
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...rest}>
      {d}
    </svg>
  );
}

/* ----- Toast (simple imperative API) ----- */
function useToast() {
  const [msg, setMsg] = useState(null);
  const show = useCallback((text) => {
    setMsg(text);
    setTimeout(() => setMsg(null), 2400);
  }, []);
  const node = (
    <div className={`toast ${msg ? "is-in" : ""}`} role="status" aria-live="polite">
      <Icon name="check" />
      {msg || ""}
    </div>
  );
  return [show, node];
}

/* ----- CountUp number ----- */
function CountUp({ end, suffix = "", duration = 1500 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* Smooth-scroll helper for nav links */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/* Open external links in a true new tab — works inside sandboxed iframes
   where bare target="_blank" gets trapped into a sub-frame and breaks on
   sites that send X-Frame-Options: DENY (LinkedIn, etc.). */
function openExternal(url) {
  if (!url || url === "#") return;
  const win = window.open(url, "_blank", "noopener,noreferrer");
  // Some embed sandboxes still block window.open — fall back to top-level navigation.
  if (!win) {
    try { window.top.location.href = url; }
    catch (e) { window.location.href = url; }
  }
}

Object.assign(window, { Reveal, SectionHeader, TagPill, Icon, useToast, CountUp, scrollToId, openExternal });
