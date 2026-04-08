import Image from "next/image";

import { HorizontalRail } from "./components/horizontal-rail";
import { MobileMenu } from "./components/mobile-menu";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Approach", href: "#why-javertech" },
  { label: "Pricing", href: "#pricing" },
];

const mobileNavItems = [
  { label: "Services", href: "#mobile-services" },
  { label: "Work", href: "#mobile-portfolio" },
  { label: "Approach", href: "#mobile-approach" },
  { label: "Pricing", href: "#mobile-pricing" },
];

const genZWaitlistHref = "/go/gen-z";
const hannahForresterHairHref = "https://project-dhsrx.vercel.app/";
const contactEmail = "javiertanaxcruz@gmail.com";
const contactPhoneDisplay = "317-504-8877";
const contactPhoneHref = "tel:3175048877";
const contactMailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Project inquiry from JaverTech"
)}&body=${encodeURIComponent("Hi JaverTech,\n\nI'd love to talk about...")}`;

const services = [
  {
    title: "Website Creation",
    description:
      "Custom websites built to help your business look professional and bring in more leads.",
  },
  {
    title: "Website Services",
    description:
      "Ongoing support for updates, improvements, and keeping your site clean and current.",
  },
  {
    title: "Online Graphic Design",
    description:
      "Digital graphics for promotions, branding, and online content that looks polished.",
  },
  {
    title: "AI Chat Bot Creation",
    description:
      "AI chat bots that answer questions, guide visitors, and help capture more leads.",
  },
];

const approachSteps = [
  "We talk about what you are looking for and how you want it done.",
  "We build the product.",
  "We review the build together so you can change anything you want.",
  "We launch a strong product designed to help you make more money.",
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
    newTab: true,
  },
  {
    name: "Hannah Forrester Hair",
    eyebrow: "FEATURED PROJECT",
    titleLines: ["Hair by Hand,", "with heart"],
    description:
      "A website created for Hannah Forrester, a hairstylist at Foils and Fern in Greenwood, Indiana.",
    ctaLabel: "View Site",
    href: hannahForresterHairHref,
    logo: "♡",
    theme: "beauty",
    newTab: true,
  },
];

const mobileMainCards = [
  {
    id: "mobile-home",
    eyebrow: "JAVERTECH",
    title: "Built to Look Sharp. Built to Move Fast.",
    description:
      "Modern websites, landing pages, and AI tools starting at $99 for businesses that want to look more legit online.",
    bullets: ["Modern websites", "Landing pages", "AI tools"],
    ctaLabel: "Start at $99",
    href: contactMailtoUrl,
    variant: "dark",
  },
  {
    id: "mobile-services",
    eyebrow: "SERVICES",
    title: "Services built to bring in more business.",
    items: services,
    variant: "outline",
  },
  {
    id: "mobile-approach",
    eyebrow: "APPROACH",
    title: "A simple process from idea to launch.",
    steps: approachSteps,
    variant: "outline",
  },
  {
    id: "mobile-pricing",
    eyebrow: "PRICING",
    title: "All services start at $99.",
    description:
      "All services start at $99, with final pricing depending on scope, turnaround, and the features needed for the build.",
    bullets: ["Starting at $99", "Scope-based pricing", "Built for conversions"],
    ctaLabel: "Start Your Project",
    href: contactMailtoUrl,
    variant: "dark",
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

          <MobileMenu items={mobileNavItems} />
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
              <a className="button button--outline button--desktop-only" href="#portfolio">
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-home">
        <section className="mobile-main-row" aria-label="Main site cards">
          <HorizontalRail ariaLabel="Main site cards" className="mobile-main-rail">
            {mobileMainCards.map((card) => (
              <article
                key={card.id}
                id={card.id}
                className={`mobile-main-card${card.items ? " mobile-main-card--scrollable" : ""}`}
              >
                <div>
                  <span className="mobile-main-card__eyebrow">{card.eyebrow}</span>
                  <h2>{card.title}</h2>
                  {card.description ? <p>{card.description}</p> : null}
                  {card.steps ? (
                    <ol className="mobile-main-card__steps">
                      {card.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  ) : null}
                  {card.items ? (
                    <ol className="mobile-main-card__steps">
                      {card.items.map((item) => (
                        <li key={item.title}>
                          <strong>{item.title}.</strong> {item.description}
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>

                {card.ctaLabel && card.href ? (
                  <a
                    className={`button ${
                      card.variant === "dark" ? "button--dark" : "button--outline"
                    }`}
                    href={card.href}
                  >
                    {card.ctaLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </HorizontalRail>
        </section>

        <section className="mobile-work-spot" id="mobile-portfolio">
          <div className="mobile-work-spot__intro">
            <h2>Featured Work.</h2>
          </div>

          <HorizontalRail
            ariaLabel="Featured projects"
            className="mobile-featured-work-rail"
          >
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className={`feature-panel feature-panel--project featured-work-card${
                  project.theme ? ` feature-panel--${project.theme}` : ""
                }`}
              >
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
                    target={project.newTab ? "_blank" : undefined}
                    rel={project.newTab ? "noopener noreferrer" : undefined}
                  >
                    {project.ctaLabel}
                  </a>
                </div>
              </article>
            ))}
          </HorizontalRail>
        </section>

        <section className="mobile-contact-card" id="mobile-contact">
          <div className="mobile-contact-card__brand">
            <span className="brand-logo brand-logo--footer">
              <Image
                className="brand-logo__mark"
                src="/javertech-mark.png"
                alt=""
                width="96"
                height="96"
                sizes="60px"
              />
              <span className="brand-logo__text">
                <span className="brand-logo__name">JaverTech</span>
                <span className="brand-logo__tag">DIGITAL PRODUCTS</span>
              </span>
            </span>
          </div>
          <h2>Built to Look Sharp. Built to Move Fast.</h2>
          <div className="mobile-contact-card__owner">
            <span className="mobile-contact-card__label">CONTACT OWNER</span>
            <a href={contactPhoneHref}>{contactPhoneDisplay}</a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </section>
      </div>

      <section className="section section--light" id="services">
        <div className="section__intro">
          <span className="section__eyebrow">WHAT WE DO</span>
          <h2>Services Built to Bring In More Business.</h2>
        </div>

        <ol className="services-list">
          {services.map((service, index) => (
            <li key={service.title} className="service-item">
              <span className="service-item__number">{index + 1}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
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

        <div className="featured-work-rail" aria-label="Featured projects">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className={`feature-panel feature-panel--project featured-work-card${
                project.theme ? ` feature-panel--${project.theme}` : ""
              }`}
            >
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
                  target={project.newTab ? "_blank" : undefined}
                  rel={project.newTab ? "noopener noreferrer" : undefined}
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
          <h2>A Simple 4-Step Process.</h2>
        </div>

        <div className="advantages-grid">
          {approachSteps.map((step, index) => (
            <article key={step} className="advantage">
              <h3>Step {index + 1}</h3>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--light" id="pricing">
        <div className="pricing-card pricing-card--bright">
          <div>
            <h2>All Services Start at $99</h2>
            <p>
              All services start at $99. Final pricing depends on scope, turnaround, and the
              functionality you need.
            </p>
          </div>
          <a className="button button--light" href={contactMailtoUrl}>Start Your Project</a>
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
          <a href={contactMailtoUrl}>Contact Owner</a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={contactPhoneHref}>{contactPhoneDisplay}</a>
        </aside>
      </section>
    </main>
  );
}
