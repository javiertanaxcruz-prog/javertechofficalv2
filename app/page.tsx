import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Approach", href: "#why-javertech" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const genZWaitlistHref = "/go/gen-z";
const contactEmail = "javiertanaxcruz@gmail.com";
const contactPhoneDisplay = "317-504-8877";
const contactPhoneHref = "tel:3175048877";
const contactMailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Project inquiry from JaverTech"
)}&body=${encodeURIComponent("Hi JaverTech,\n\nI'd love to talk about...")}`;

const services = [
  {
    title: "Custom Websites",
    description:
      "Clean, modern websites built to make businesses look more credible and turn more visitors into real inquiries.",
    bullets: ["Mobile-ready design", "Fast performance", "Affordable starting options"],
  },
  {
    title: "AI Chatbots",
    description:
      "Smart website chat tools that answer questions, guide visitors, and help capture leads even when you are busy.",
    bullets: ["Automated replies", "Lead capture", "Easy customer support"],
  },
  {
    title: "Landing Pages",
    description:
      "Sales-focused pages for launches, offers, and promotions built to keep attention and drive action.",
    bullets: ["Clear messaging", "Quick turnaround", "Built for conversions"],
  },
  {
    title: "Waitlist Pages",
    description:
      "Pre-launch pages made to build hype, collect emails, and prove demand before a bigger launch.",
    bullets: ["Email capture", "Launch-focused design", "Simple integrations"],
  },
];

const advantages = [
  {
    title: "Fast Turnaround",
    description: "Projects move quickly so you can get something strong online without dragging the process out.",
  },
  {
    title: "Clear Communication",
    description: "Everything stays simple, direct, and easy to follow from the first message to launch day.",
  },
  {
    title: "Affordable Starting Point",
    description:
      "Smaller projects start at $99, giving businesses a lower-cost way to get online without paying agency prices first.",
  },
  {
    title: "Design With Purpose",
    description:
      "Every page is shaped to build trust fast, explain the offer clearly, and push more people to reach out.",
  },
];

const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "Smaller projects start at $99. Final pricing depends on scope, timeline, and the features needed for the build.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most standard websites take one to two weeks. Larger builds or more custom functionality can take longer, depending on scope.",
  },
  {
    question: "What do I need to get started?",
    answer: "A clear goal, basic direction, and any copy, references, or assets already available.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. Ongoing support can cover updates, refinements, and new pages as needs evolve.",
  },
  {
    question: "What makes JaverTech different from other agencies?",
    answer:
      "JaverTech focuses on clean execution, modern presentation, and a straightforward process.",
  },
];

const featuredProjects = [
  {
    name: "Gen-Z",
    eyebrow: "FEATURED PROJECT",
    titleLines: ["ENTER", "GEN-Z"],
    description:
      "An upcoming platform designed to help young entrepreneurs connect, build their network, and gain visibility.",
    ctaLabel: "Join the Waitlist",
    href: genZWaitlistHref,
    logo: "Z",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="home">
        <div className="hero__topbar">
          <a className="brand" href="#home">
            <span className="brand-logo brand-logo--nav">
              <Image
                className="brand-logo__mark"
                src="/javertech-mark.png"
                alt=""
                width="96"
                height="96"
                sizes="52px"
                priority
              />
              <span className="brand-logo__text">
                <span className="brand-logo__name">JaverTech</span>
                <span className="brand-logo__tag">DIGITAL PRODUCTS</span>
              </span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--dark" href={contactMailtoUrl}>Start at $99</a>
        </div>

        <div className="hero__content">
          <div className="statement statement--hero">
            <span className="section__eyebrow">
              MODERN WEBSITES, LANDING PAGES, AND AI TOOLS STARTING AT $99
            </span>
            <h1>Built to Look Sharp. Built to Move Fast.</h1>
            <p>
              Get a website that looks professional starting at $99. JaverTech helps businesses
              look more legit online without charging big-agency prices. We build clean websites
              and sales-focused pages designed to turn visitors into messages, calls, and
              customers.
            </p>
            <div className="statement__actions">
              <a className="button button--dark" href={contactMailtoUrl}>Start at $99</a>
              <a className="button button--outline" href="#portfolio">See Our Work</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light" id="services">
        <div className="section__intro">
          <span className="section__eyebrow">WHAT WE DO</span>
          <h2>Services Built to Bring In More Business.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--light section--professional" id="portfolio">
        <div className="section__intro section__intro--wide">
          <span className="section__eyebrow">FEATURED WORK</span>
          <h2>Featured Work.</h2>
          <p>
            A look at the kind of clean, modern work you can launch without spending thousands up
            front.
          </p>
        </div>

        <div className="featured-work-grid">
          {featuredProjects.map((project) => (
            <article key={project.name} className="feature-panel feature-panel--project">
              <div className="feature-panel__logo" aria-hidden="true">
                {project.logo}
              </div>
              <div className="feature-panel__copy">
                <span className="feature-panel__eyebrow">{project.eyebrow}</span>
                <h3 className="feature-panel__title">
                  {project.titleLines.map((line) => (
                    <span key={line} className="feature-panel__title-line">
                      {line}
                    </span>
                  ))}
                </h3>
                <p>{project.description}</p>
                <a
                  className="button button--light"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--light section--professional" id="why-javertech">
        <div className="section__intro">
          <span className="section__eyebrow">APPROACH</span>
          <h2>Why Businesses Choose JaverTech.</h2>
        </div>

        <div className="advantages-grid">
          {advantages.map((item) => (
            <article key={item.title} className="advantage">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--light" id="pricing">
        <div className="pricing-card pricing-card--bright">
          <div>
            <h2>
              Professional Websites
              <br />
              Starting at $99
            </h2>
            <p>
              If you need something sharp, modern, and affordable, smaller projects start at $99.
              Final pricing depends on scope, turnaround, and the functionality you need.
            </p>
          </div>
          <a className="button button--light" href={contactMailtoUrl}>Start Your Project</a>
        </div>
      </section>

      <section className="section section--light" id="faq">
        <div className="section__intro">
          <span className="section__eyebrow">FAQ</span>
          <h2>Common Questions.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.question} className="faq-item" open={index === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-split" id="hire">
        <div className="cta-split__main">
          <h2>Want a Website That Looks Expensive Without Paying Expensive Prices?</h2>
          <div className="cta-split__actions">
            <a className="button button--dark" href={contactMailtoUrl}>Start at $99</a>
            <a
              className="button button--outline"
              href={genZWaitlistHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Gen-Z Waitlist
            </a>
          </div>
        </div>

        <aside className="cta-split__contact" id="waitlist">
          <div className="cta-split__brand">
            <span className="brand-logo brand-logo--footer">
              <Image
                className="brand-logo__mark"
                src="/javertech-mark.png"
                alt=""
                width="96"
                height="96"
                sizes="68px"
              />
              <span className="brand-logo__text">
                <span className="brand-logo__name">JaverTech</span>
                <span className="brand-logo__tag">DIGITAL PRODUCTS</span>
              </span>
            </span>
          </div>
          <p>Affordable builds. Clean design. Fast turnaround.</p>
          <a href={contactMailtoUrl}>Start a Project</a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={contactPhoneHref}>{contactPhoneDisplay}</a>
        </aside>
      </section>
    </main>
  );
}
