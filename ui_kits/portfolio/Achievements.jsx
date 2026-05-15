function AchievementCard({ a }) {
  return (
    <Reveal className={`ach-card surface-card tone-${a.tone}`} direction="up">
      <div className="ach-ring"></div>
      <div className="ach-head">
        <span className="ach-glyph">{a.glyph}</span>
        <h4 className="ach-title">{a.title}</h4>
      </div>
      {a.subtitle ? <div className="ach-sub">"{a.subtitle}"</div> : null}
      {a.where ? <div className="ach-where mono">{a.where}</div> : null}
      <p className="ach-desc">{a.desc}</p>
      <span className={`ach-badge tone-${a.tone}`}>{a.badge}</span>
    </Reveal>
  );
}

function Achievements() {
  const a = window.PORTFOLIO.achievements;
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <SectionHeader eyebrow="// recognition" title="Recognition" subtitle="Research, competitions, and certifications." />
        <div className="ach-grid stagger">
          {a.map((x, i) => <AchievementCard key={i} a={x} />)}
        </div>
      </div>
    </section>
  );
}

window.Achievements = Achievements;
