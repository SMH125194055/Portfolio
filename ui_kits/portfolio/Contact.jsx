const { useState: useState_C } = React;

function Contact() {
  const p = window.PORTFOLIO.person;
  const [showToast, toastNode] = useToast();
  const [name, setName] = useState_C("");
  const [email, setEmail] = useState_C("");
  const [message, setMessage] = useState_C("");
  const [sending, setSending] = useState_C(false);

  const onCopy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(p.email).catch(()=>{});
    showToast("Email copied to clipboard");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setName(""); setEmail(""); setMessage("");
      showToast("Message sent — I'll reply within 24h");
    }, 900);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader eyebrow="// contact" title="Let's Work Together" subtitle="Whether you need an AI system, a full-stack product, or want to collaborate on research — I'd love to hear from you." />

        <div className="contact-grid">
          {/* Left — contact methods */}
          <Reveal className="contact-methods stagger" direction="left" stagger>
            <div className="contact-row surface-card">
              <span className="contact-icon"><Icon name="mail" /></span>
              <div className="contact-text">
                <div className="contact-label">Email</div>
                <div className="contact-value mono">{p.email}</div>
              </div>
              <button className="btn btn-ghost contact-copy" onClick={onCopy}>
                <Icon name="copy" className="icon icon-sm" /> Copy
              </button>
            </div>

            <a className="contact-row surface-card" href={"tel:" + p.phone.replace(/\s/g,"")}>
              <span className="contact-icon"><Icon name="phone" /></span>
              <div className="contact-text">
                <div className="contact-label">Phone</div>
                <div className="contact-value mono">{p.phone}</div>
              </div>
              <span className="contact-arrow"><Icon name="arrowUR" className="icon icon-sm" /></span>
            </a>

            <a className="contact-row surface-card" href={p.linkedin} target="_blank" rel="noopener noreferrer"
               onClick={(e)=>{e.preventDefault();openExternal(p.linkedin);}}>
              <span className="contact-icon"><Icon name="linkedin" /></span>
              <div className="contact-text">
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value mono">linkedin.com/in/syed-muhammad-huzaifa</div>
              </div>
              <span className="contact-arrow"><Icon name="arrowUR" className="icon icon-sm" /></span>
            </a>

            <a className="contact-row surface-card" href={p.github} target="_blank" rel="noopener noreferrer"
               onClick={(e)=>{e.preventDefault();openExternal(p.github);}}>
              <span className="contact-icon"><Icon name="github" /></span>
              <div className="contact-text">
                <div className="contact-label">GitHub</div>
                <div className="contact-value mono">github.com/SMH125194055</div>
              </div>
              <span className="contact-arrow"><Icon name="arrowUR" className="icon icon-sm" /></span>
            </a>

            <div className="contact-row surface-card">
              <span className="contact-icon"><Icon name="pin" /></span>
              <div className="contact-text">
                <div className="contact-label">Location</div>
                <div className="contact-value">{p.location} · open to remote worldwide</div>
              </div>
            </div>
          </Reveal>

          {/* Right — hire panel */}
          <Reveal className="hire-panel surface-card" direction="right">
            <div className="hire-status">
              <span className="hire-dot"></span>
              <span className="hire-status-label">AVAILABLE</span>
            </div>
            <h3 className="hire-title">Available for Freelance</h3>
            <p className="hire-desc">Open for AI/ML consulting, full-stack development, and automation projects.</p>
            <div className="hire-buttons">
              <a className="btn btn-success" href={p.upwork} target="_blank" rel="noopener noreferrer"
                 onClick={(e)=>{e.preventDefault();openExternal(p.upwork);}}>
                Hire on Upwork <Icon name="arrowUR" className="icon icon-sm" />
              </a>
              <a className="btn btn-success" href={p.fiverr} target="_blank" rel="noopener noreferrer"
                 onClick={(e)=>{e.preventDefault();openExternal(p.fiverr);}}>
                Hire on Fiverr <Icon name="arrowUR" className="icon icon-sm" />
              </a>
              <a className="btn btn-primary" href={"mailto:" + p.email}>
                <Icon name="mail" className="icon icon-sm" /> Send Email
              </a>
            </div>

            <div className="hire-divider"><span className="mono">// or use the form</span></div>

            <form className="hire-form" onSubmit={onSubmit}>
              <div className="hire-form-row">
                <label>
                  <span className="form-label">Name</span>
                  <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" required />
                </label>
                <label>
                  <span className="form-label">Email</span>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" required />
                </label>
              </div>
              <label>
                <span className="form-label">Message</span>
                <textarea rows="3" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Tell me about your project…" required></textarea>
              </label>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? <span className="spinner"></span> : <Icon name="send" className="icon icon-sm" />}
                {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal className="extras">
          <div className="extras-block">
            <div className="extras-label">Languages</div>
            <div className="extras-items">
              {window.PORTFOLIO.languages.map((l, i) => (
                <span key={i} className="extras-pill">
                  <Icon name="globe" className="icon icon-sm" />
                  {l.name} <span className="extras-dim">· {l.level}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="extras-block">
            <div className="extras-label">Certifications</div>
            <div className="extras-items">
              {window.PORTFOLIO.certs.map((c, i) => (
                <span key={i} className="extras-pill">
                  <Icon name="check" className="icon icon-sm" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <footer className="footer">
          <div className="footer-left mono">© 2026 · Syed Muhammad Huzaifa · built with Next.js · Framer Motion · ☕</div>
          <div className="footer-right">
            <a href={p.github}   onClick={(e)=>{e.preventDefault();openExternal(p.github);}}><Icon name="github" /></a>
            <a href={p.linkedin} onClick={(e)=>{e.preventDefault();openExternal(p.linkedin);}}><Icon name="linkedin" /></a>
            <a href={"mailto:"+p.email}><Icon name="mail" /></a>
          </div>
        </footer>
      </div>
      {toastNode}
    </section>
  );
}

window.Contact = Contact;
