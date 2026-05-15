const { useEffect, useState } = React;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const pct = window.scrollY / Math.max(1, h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, pct)));

      // Active section detection
      const ids = ["hero","about","skills","projects","experience","achievements","contact"];
      const mid = window.innerHeight * 0.35;
      let cur = "hero";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about",        label: "About" },
    { id: "skills",       label: "Skills" },
    { id: "projects",     label: "Projects" },
    { id: "experience",   label: "Experience" },
    { id: "achievements", label: "Recognition" },
    { id: "contact",      label: "Contact" },
  ];

  return (
    <>
      <header className={"nav " + (scrolled ? "nav-scrolled" : "")}>
        <div className="container nav-inner">
          <a className="nav-logo" href="#hero" onClick={(e)=>{e.preventDefault();scrollToId("hero");}}>
            SMH<span className="nav-cursor"></span>
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.id}
                 className={"nav-link " + (active === l.id ? "is-active" : "")}
                 href={`#${l.id}`}
                 onClick={(e)=>{e.preventDefault();scrollToId(l.id);}}>
                {l.label}
              </a>
            ))}
          </nav>
          <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
        <div className="nav-progress" style={{ transform: `scaleX(${progress})` }}></div>
      </header>

      {open ? (
        <div className="nav-drawer">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`}
               onClick={(e)=>{e.preventDefault();scrollToId(l.id);setOpen(false);}}>
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
}

window.Navbar = Navbar;
