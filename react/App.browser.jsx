const { useEffect, useMemo, useState } = React;

const solutionCards = [
  {
    title: 'Secured Hosting with IXN',
    body: 'Store, manage, and protect sensitive information with compliance-ready hosting.',
    image: 'https://www.ajboggs.com/hs-fs/hubfs/IXN.png?width=864&height=738&name=IXN.png',
  },
  {
    title: 'Eligibility & Management with Lifia',
    body: 'Streamline client intake, eligibility checks, and service delivery workflows.',
    image: 'https://www.ajboggs.com/hs-fs/hubfs/Lifia.png?width=864&height=738&name=Lifia.png',
  },
  {
    title: 'Data Integration with EventBus',
    body: 'Transfer large-volume health records with reliability and speed.',
    image: 'https://www.ajboggs.com/hs-fs/hubfs/EventBus-1.png?width=864&height=738&name=EventBus-1.png',
  },
  {
    title: 'A Supportive Community with Positive People',
    body: 'Create trusted digital spaces that complement care with peer support.',
    image:
      'https://www.ajboggs.com/hs-fs/hubfs/Positive%20People.png?width=864&height=738&name=Positive%20People.png',
  },
];

const impactStats = [
  { label: 'Public Health Organizations served', value: 480 },
  { label: 'Million dollars saved by federal clients', value: 10 },
  { label: 'States, provinces, and territories served', value: 30 },
];

function AnimatedStat({ value, label }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();
    const duration = 1000;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [value]);

  return (
    <div className="stat">
      <span className="stat-value">{current}+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function App() {
  const links = useMemo(
    () => [
      { href: '#solutions', text: 'Our Solutions' },
      { href: '#why', text: 'Why AJ Boggs' },
      { href: '#impact', text: 'Our Impact' },
      { href: '#testimonials', text: 'Testimonials' },
    ],
    []
  );

  return (
    <>
      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="AJ Boggs home">
            <img src="https://www.ajboggs.com/hubfs/AJBoggs%20Logo.svg" alt="AJ Boggs" />
          </a>
          <nav className="site-nav">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.text}
              </a>
            ))}
            <a className="cta-link" href="#contact">
              Request a Demo
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-bg"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Secure and Compliant Hosting</p>
              <h1 id="hero-title">Built for Simplicity and Security. Backed by Compliance.</h1>
              <p>
                AJ Boggs delivers secure, scalable, and efficient technology solutions designed for industries
                that demand reliability. From simplified systems and secure data storage to compliance-driven
                solutions, we help organizations streamline operations and protect what matters most.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#solutions">
                  View our solutions
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact us
                </a>
              </div>
            </div>
            <div className="hero-media">
              <img
                src="https://www.ajboggs.com/hs-fs/hubfs/Home%20Page%20Image_3%20screens.png?width=1600&height=800&name=Home%20Page%20Image_3%20screens.png"
                alt="AJ Boggs platform screens"
              />
            </div>
          </div>
        </section>

        <section className="section" id="solutions" aria-labelledby="solutions-title">
          <div className="container">
            <p className="eyebrow">Our Solutions</p>
            <h2 id="solutions-title">Technology Built for Real-World Public Health Workflows</h2>
            <p className="section-intro">
              At AJ Boggs, we offer a comprehensive suite of solutions tailored to your business needs.
              Powered by practical innovation and compliance-first infrastructure.
            </p>
            <div className="cards cards-4">
              {solutionCards.map((card) => (
                <article key={card.title} className="card">
                  <img src={card.image} alt={card.title} />
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="why" aria-labelledby="why-title">
          <div className="container split">
            <div>
              <p className="eyebrow">Why AJ Boggs</p>
              <h2 id="why-title">Over 30 Years of Delivery, Reliability, and Care</h2>
              <p>
                Customers choose AJ Boggs for deep domain expertise, customer-first support, and scalable
                systems designed to evolve with healthcare technology.
              </p>
            </div>
            <ul className="benefits">
              <li>Over Three Decades of Expertise</li>
              <li>Tailored Technology Solutions</li>
              <li>Scalable, High-Performance Systems</li>
              <li>Secure, Compliant Hosting Services</li>
            </ul>
          </div>
        </section>

        <section className="section" id="impact" aria-labelledby="impact-title">
          <div className="container">
            <p className="eyebrow">Our Impact</p>
            <h2 id="impact-title">Outcomes That Let Teams Focus on What Matters</h2>
            <div className="stats">
              {impactStats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <p className="eyebrow">Testimonials</p>
            <h2 id="testimonials-title">What Our Partners Say</h2>
            <article className="quote">
              <p>
                From day one, their team has shown a deep commitment to the population we serve, bringing not
                only technical expertise but genuine compassion. AJ Boggs consistently delivers projects on time
                and supports our transition to fully electronic eligibility processes.
              </p>
              <footer>
                <strong>Paul G. Loberti</strong>
                <span>Executive Office of Health &amp; Human Services - Rhode Island</span>
              </footer>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div>
            <img
              className="footer-mark"
              src="https://www.ajboggs.com/hs-fs/hubfs/A%20Tag_White%20A%20Tag-02.jpg?width=180&height=165&name=A%20Tag_White%20A%20Tag-02.jpg"
              alt="AJ Boggs mark"
            />
            <p>Lifting communities higher with technology that connects, protects and scales.</p>
          </div>
          <div>
            <h3>Important Links</h3>
            <ul>
              <li>
                <a href="#solutions">Our Solutions</a>
              </li>
              <li>
                <a href="#why">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#top">Request a Demo</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <small>Copyright © 2026 AJ Boggs | Recreation for UI study and Code Connect planning.</small>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
