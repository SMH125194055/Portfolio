const { useEffect: useEffect_H, useState: useState_H } = React;

function Typewriter({ words, typeMs = 80, holdMs = 1500, delMs = 40 }) {
  const [i, setI] = useState_H(0);          // word index
  const [text, setText] = useState_H("");
  const [del, setDel] = useState_H(false);

  useEffect_H(() => {
    const cur = words[i];
    let t;
    if (!del && text.length < cur.length) {
      t = setTimeout(() => setText(cur.slice(0, text.length + 1)), typeMs);
    } else if (!del && text.length === cur.length) {
      t = setTimeout(() => setDel(true), holdMs);
    } else if (del && text.length > 0) {
      t = setTimeout(() => setText(cur.slice(0, text.length - 1)), delMs);
    } else if (del && text.length === 0) {
      setDel(false);
      setI((i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, typeMs, holdMs, delMs]);

  return (
    <span className="typewriter">
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-caret"></span>
    </span>
  );
}

function CodePanel() {
  const lines = [
    { p: "const",        keyword: true, suffix: " engineer = {" },
    { indent: 1, p: "name:",   prop: true, val: ' "SMH",' },
    { indent: 1, p: "stack:",  prop: true, val: " [" },
    { indent: 2, val: '"Next.js 14",', tag: "frontend" },
    { indent: 2, val: '"FastAPI",',    tag: "backend" },
    { indent: 2, val: '"pgvector",',   tag: "ai" },
    { indent: 2, val: '"Docker",',     tag: "infra" },
    { indent: 1, p: "],"},
    { indent: 1, p: "ship:", prop: true, val: " async (idea) => " },
    { indent: 2, val: "production(idea)," },
    { p: "};" },
    { p: "" },
    { p: "// 24/7. Ships on Mondays.", comment: true },
  ];
  return (
    <div className="code-panel">
      <div className="code-bar">
        <span className="code-dot d-r"></span>
        <span className="code-dot d-y"></span>
        <span className="code-dot d-g"></span>
        <span className="code-file">~/portfolio/engineer.ts</span>
      </div>
      <pre className="code-body">
        {lines.map((ln, idx) => (
          <div key={idx} className="code-line" style={{ paddingLeft: (ln.indent || 0) * 16 }}>
            {ln.comment ? <span className="c-comment">{ln.p}</span> :
             <>
               {ln.keyword ? <span className="c-key">{ln.p}</span> : null}
               {ln.prop ? <span className="c-prop">{ln.p}</span> : null}
               {(!ln.keyword && !ln.prop && ln.p) ? <span className="c-fg">{ln.p}</span> : null}
               {ln.tag ? <span className={`c-str cat-${ln.tag}`}>{ln.val}</span> :
                 (ln.val ? <span className="c-fg">{ln.val}</span> : null)}
             </>}
          </div>
        ))}
      </pre>
    </div>
  );
}

function Hero() {
  const p = window.PORTFOLIO.person;
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
      </div>
      <div className="container hero-inner">
        <Reveal className="hero-left" stagger>
          <div className="hero-eyebrow"><span className="dot"></span>OPEN TO WORK · KARACHI, PAKISTAN</div>
          <h1 className="hero-name">{p.name}</h1>
          <div className="hero-title">
            I'm an <Typewriter words={p.typewriter} />
          </div>
          <p className="hero-tagline">
            {p.tagline}<br/>
            <span className="hero-tagline-sub">{p.taglineSub}</span>
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects" onClick={(e)=>{e.preventDefault();scrollToId("projects");}}>
              View My Work <Icon name="arrowR" className="icon icon-sm" />
            </a>
            <a className="btn btn-outline" href={p.resumeUrl}>
              <Icon name="download" className="icon icon-sm" /> Download Resume
            </a>
            <a className="btn btn-success" href={p.upwork} target="_blank" rel="noopener noreferrer"
               onClick={(e)=>{e.preventDefault();openExternal(p.upwork);}}>
              Hire Me on Upwork <Icon name="arrowUR" className="icon icon-sm" />
            </a>
          </div>
        </Reveal>
        <Reveal direction="right" className="hero-right">
          <CodePanel />
        </Reveal>
      </div>
      <button className="hero-scroll" onClick={() => scrollToId("about")} aria-label="Scroll to About">
        <Icon name="chevD" />
      </button>
    </section>
  );
}

window.Hero = Hero;
