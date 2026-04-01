"use client";

import { useEffect, useId, useState } from "react";

type MobileMenuItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  items: MobileMenuItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={`mobile-menu${isOpen ? " mobile-menu--open" : ""}`}>
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-expanded={isOpen}
        aria-controls={titleId}
        aria-label={isOpen ? "Close site menu" : "Open site menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        type="button"
        className="mobile-menu__backdrop"
        aria-label="Close site menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
      />

      <div className="mobile-menu__screen" aria-hidden={!isOpen}>
        <div
          className="mobile-menu__panel"
          id={titleId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${titleId}-label`}
        >
          <span className="mobile-menu__eyebrow" id={`${titleId}-label`}>
            MENU
          </span>

          <nav className="mobile-menu__nav" aria-label="Mobile">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu__link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
