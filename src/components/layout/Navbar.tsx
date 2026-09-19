
import { CalendarDays, Menu, Phone, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSectionNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");

    setMobileOpen(false);

    if (location.pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    navigate("/", {
      state: {
        scrollTo: sectionId,
      },
    });
  };

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (location.pathname !== "/" || !sectionId) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToSection(sectionId);

      navigate("/", {
        replace: true,
        state: {},
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state, navigate]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-clinic-navy/80 px-5 py-3 shadow-lg backdrop-blur-xl md:px-7">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-clinic-accent/40 bg-clinic-accent/10 text-clinic-accent">
            <span className="font-display text-lg font-bold">D</span>
          </div>

          <div className="leading-none">
            <span className="block font-display text-lg font-bold tracking-wide text-clinic-cream">
              Dentiva
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-clinic-cream/50">
              Dental Care
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            if (item.href.startsWith("#")) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) =>
                    handleSectionNavigation(event, item.href)
                  }
                  className="text-sm font-medium text-clinic-cream/70 transition-colors duration-300 hover:text-clinic-accent"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-clinic-accent"
                    : "text-clinic-cream/70 hover:text-clinic-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-clinic-cream/80 transition-all duration-300 hover:border-clinic-accent/40 hover:text-clinic-accent"
          >
            <Phone size={15} />
            <span>Call Us</span>
          </a>

          <Link
            to="/appointment"
            className="flex items-center gap-2 rounded-full bg-clinic-accent px-5 py-2.5 text-sm font-semibold text-clinic-navy transition-all duration-300 hover:scale-[1.02] hover:bg-clinic-cream"
          >
            <CalendarDays size={16} />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-clinic-cream lg:hidden"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-clinic-navy/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => {
              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) =>
                      handleSectionNavigation(event, item.href)
                    }
                    className="rounded-xl px-4 py-3 text-sm font-medium text-clinic-cream/75 transition-colors duration-300 hover:bg-white/5 hover:text-clinic-accent"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? "bg-white/5 text-clinic-accent"
                      : "text-clinic-cream/75 hover:bg-white/5 hover:text-clinic-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="my-2 h-px bg-white/10" />

            <a
              href="tel:+919876543210"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-clinic-cream/75 transition-colors duration-300 hover:bg-white/5 hover:text-clinic-accent"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>

            <Link
              to="/appointment"
              onClick={() => setMobileOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-clinic-accent px-4 py-3 text-sm font-semibold text-clinic-navy transition-all duration-300 hover:bg-clinic-cream"
            >
              <CalendarDays size={17} />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

