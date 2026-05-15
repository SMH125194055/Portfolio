function FeaturedCard({ project, flip }) {
  const p = project;
  return (
    <Reveal className={"featured " + (flip ? "is-flipped" : "")} direction={flip ? "right" : "left"}>
      <div className={`featured-media glow-${p.accent}`}>
        <div className="media-chrome">
          <span className="media-dot d-r"></span>
          <span className="media-dot d-y"></span>
          <span className="media-dot d-g"></span>
          <span className="media-url mono">app/{p.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,32)}</span>
        </div>
        <div className="media-canvas">
          <div className="media-glyph">{p.glyph}</div>
          <div className="media-fake-rows">
            <div className="row r1"></div>
            <div className="row r2"></div>
            <div className="row r3"></div>
            <div className="row r4"></div>
          </div>
          <div className="media-fake-pills">
            {p.metrics.slice(0,3).map((m,i)=> <span key={i} className="media-pill mono">{m}</span>)}
          </div>
        </div>
      </div>
      <div className="featured-body">
        <div className="featured-head">
          <span className="featured-glyph">{p.glyph}</span>
          <h3 className="featured-title">{p.title}</h3>
        </div>
        <div className="tag-row">
          {p.tags.map((t,i) => <TagPill key={i} label={t[0]} cat={t[1]} />)}
        </div>
        <p className="featured-desc">{p.desc}</p>
        <div className="metric-row">
          {p.metrics.map((m,i) => <span key={i} className="metric-pill">{m}</span>)}
        </div>
        <div className="featured-actions">
          <a className="btn btn-outline" href={p.github} target="_blank" rel="noopener noreferrer"
             onClick={(e)=>{e.preventDefault();openExternal(p.github);}}>
            <Icon name="github" className="icon icon-sm" /> Source
          </a>
          {p.demo ? (
            <a className="btn btn-ghost" href={p.demo} target="_blank" rel="noopener noreferrer"
               onClick={(e)=>{e.preventDefault();openExternal(p.demo);}}>
              Live demo <Icon name="arrowUR" className="icon icon-sm" />
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

function GridCard({ project }) {
  const p = project;
  return (
    <Reveal className={`gridcard surface-card glow-hover-${p.accent}`} direction="up">
      <div className="gridcard-head">
        <span className="gridcard-glyph">{p.glyph}</span>
        <h4 className="gridcard-title">{p.title}</h4>
        <a className="gridcard-gh" href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
           onClick={(e)=>{e.preventDefault();openExternal(p.github);}}>
          <Icon name="github" className="icon icon-sm" />
        </a>
      </div>
      <p className="gridcard-desc">{p.desc}</p>
      <div className="tag-row">
        {p.tags.map((t,i) => <TagPill key={i} label={t[0]} cat={t[1]} />)}
      </div>
    </Reveal>
  );
}

function Projects() {
  const f = window.PORTFOLIO.featured;
  const g = window.PORTFOLIO.grid;
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeader eyebrow="// projects" title="Featured Projects" subtitle="Production systems I've designed, built, and shipped end-to-end." />
        <div className="featured-list">
          {f.map((p, i) => <FeaturedCard key={i} project={p} flip={i % 2 === 1} />)}
        </div>

        <div className="grid-sep">
          <span className="mono">// more projects</span>
        </div>

        <div className="grid-cards stagger">
          {g.map((p, i) => <GridCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
