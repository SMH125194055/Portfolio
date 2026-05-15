function StatCard({ value, suffix, label, accent }) {
  return (
    <div className="stat-card surface-card" style={{ "--stat-accent": accent }}>
      <div className="stat-num"><CountUp end={value} suffix={suffix} /></div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function About() {
  const a = window.PORTFOLIO.about;
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader eyebrow="// about" title="The Engineer" subtitle="Three audiences, one portfolio: recruiters scanning for keywords, clients trusting I can ship, and engineers judging the depth." />
        <div className="about-grid">
          <Reveal className="about-photo" direction="left">
            <div className="photo-frame">
              <div className="photo-glow"></div>
              <div className="photo-inner">
                <img className="photo-img" src="../../assets/avatar.svg" alt="Syed Muhammad Huzaifa" />
              </div>
              <div className="photo-name-tag mono">
                <span className="photo-name-dot"></span>
                Syed M. Huzaifa
              </div>
            </div>
          </Reveal>
          <Reveal className="about-body stagger" direction="right" stagger>
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
          </Reveal>
        </div>
        <Reveal className="stat-grid stagger" stagger>
          {a.stats.map((s, i) => <StatCard key={i} {...s} />)}
        </Reveal>
      </div>
    </section>
  );
}

window.About = About;
