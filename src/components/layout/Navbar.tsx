
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
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
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className="navbar min-h-16 rounded-4xl border border-white/50 bg-white/50 px-4 backdrop-blur-lg backdrop-saturate-150 sm:px-6"
          >
            <div className="navbar-start">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="font-display text-lg font-extrabold tracking-tight text-clinic-navy sm:text-xl">
                  Dental<a className="text-amber-500">Care</a>
                </span>
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <nav className="flex items-center gap-1.5">
                {navigation.map((item) =>
                  item.href.startsWith("#") ? (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) =>
                        handleSectionNavigation(event, item.href)
                      }
                      className="rounded-full px-4 py-2 text-sm font-bold text-clinic-text/95 transition-all duration-300 hover:bg-clinic-navy hover:text-clinic-cream"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-full px-4 py-2 text-sm font-bold text-clinic-text/95 transition-all duration-300 hover:bg-clinic-navy hover:text-clinic-cream"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
            </div>

            <div className="navbar-end hidden gap-2 lg:flex">
              {/*<a
                className="btn btn-ghost px-5 py-2.5 rounded-full border-none text-clinic-navy hover:bg-clinic-beige/70"
                aria-label="Call Dentiva"
              >
                <Phone size={16} />
                <span>+91 1234567890</span>
              </a>*/}

              <Link
                to="/appointment"
                className="btn rounded-full border-none bg-clinic-navy px-5 text-clinic-cream shadow-none transition-all duration-300 hover:bg-clinic-marine hover:shadow-lg"
              >
                <CalendarDays size={16} />
                Book Appointment
              </Link>
            </div>

            <div className="navbar-end lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="btn btn-circle btn-sm border-none bg-clinic-navy text-clinic-cream shadow-none"
                aria-label="Open navigation"
              >
                <Menu size={19} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-clinic-navy/30 backdrop-blur-sm"
          />

          <aside className="absolute right-0 top-0 h-full w-[min(88vw,24rem)] bg-clinic-navy p-6 text-clinic-cream shadow-2xl motion-preset-slide-left">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="font-display text-xl font-extrabold">
                  Dental<a className="text-amber-500">Care</a>
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="btn btn-circle btn-sm border border-white/15 bg-transparent text-clinic-cream shadow-none"
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-2">
              {navigation.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) =>
                      handleSectionNavigation(event, item.href)
                    }
                    className="
                      rounded-xl px-4 py-3 text-base font-medium text-clinic-cream/70 transition hover:bg-white/10 hover:text-clinic-cream"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-clinic-cream/70 transition hover:bg-white/10 hover:text-clinic-cream"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="mt-10 border-t border-white/10 pt-8">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-clinic-cream/75"
              >
                <Phone size={17} />
                +91 98765 43210
              </a>

              <div>
                <Link
                  to="/appointment"
                  onClick={() => setMobileOpen(false)}
                  className="btn mt-6 w-full rounded-xl border-none bg-clinic-cream text-clinic-navy shadow-none hover:bg-clinic-beige"
                >
                  <CalendarDays size={17} />
                  Book Appointment
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;
