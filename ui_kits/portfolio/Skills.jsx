function SkillRow({ row, cat, items }) {
  return (
    <Reveal className="skill-row" direction="left">
      <div className={`skill-label cat-label-${cat}`}>{row}</div>
      <div className="skill-pills stagger">
        {items.map((s, i) => <span key={i} className={`tagpill cat-${cat}`}>{s}</span>)}
      </div>
    </Reveal>
  );
}

function Skills() {
  const rows = window.PORTFOLIO.skills;
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader eyebrow="// skills" title="Tech Stack" subtitle="Tools I use to build production systems — grouped by where they live in the stack." />
        <div className="skill-rows">
          {rows.map((r, i) => <SkillRow key={i} {...r} />)}
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;
