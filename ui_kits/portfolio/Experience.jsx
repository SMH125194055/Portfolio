function TimelineItem({ item, side }) {
  return (
    <Reveal className={`tl-item tl-${side}`} direction={side === "left" ? "left" : "right"}>
      <div className="tl-marker">
        <span className="tl-glyph">{item.glyph}</span>
      </div>
      <div className="tl-card surface-card">
        <div className="tl-head">
          <div>
            <h4 className="tl-title">{item.title}</h4>
            <div className="tl-org mono">{item.org} · {item.meta}</div>
          </div>
          {item.current ? (
            <span className="tl-badge">
              <span className="tl-pulse"></span>CURRENT
            </span>
          ) : null}
        </div>
        <p className="tl-desc">{item.desc}</p>
        {item.tags && item.tags.length ? (
          <div className="tag-row">
            {item.tags.map((t,i) => <TagPill key={i} label={t[0]} cat={t[1]} />)}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

function Experience() {
  const items = window.PORTFOLIO.experience;
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeader eyebrow="// experience" title="Experience" subtitle="Where I've worked and what I've built." />
        <div className="tl">
          <div className="tl-spine" aria-hidden="true"></div>
          {items.map((it, i) => (
            <TimelineItem key={i} item={it} side={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;
