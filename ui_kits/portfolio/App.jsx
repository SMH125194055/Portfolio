const { useEffect: useEffect_A, useState: useState_A } = React;

function BackToTop() {
  const [show, setShow] = useState_A(false);
  useEffect_A(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={"back-to-top " + (show ? "is-in" : "")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top">
      <Icon name="arrowUp" className="icon icon-sm" />
    </button>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
