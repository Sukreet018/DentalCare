import { ArrowUpRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";

import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp  } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-clinic-navy text-white">
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="font-display text-4xl font-extrabold">
                Dental<a className=" text-amber-500">Care</a>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-clinic-cream/60">
              Modern dental care delivered with clarity, precision, and genuine
              attention to every patient.
            </p>
            <a 
              href="tel:+919876543210" 
              className="mt-6 inline-flex items-center gap-3 text-3xl font-semibold transition hover:text-white"
            > 
              <Phone size={45} /> 
              +91 98765 43210 
            </a>
          </div>
          <div>
            <h3 className="font-display font-bold">Navigation</h3>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-clinic-cream/60">
              <Link className="transition hover:text-clinic-cream" to="/">
                Home
              </Link>
              <a className="transition hover:text-clinic-cream" href="#about">
                About
              </a>
              <a
                className="transition hover:text-clinic-cream"
                href="#services"
              >
                Services
              </a>
              <a
                className="transition hover:text-clinic-cream"
                href="#doctors"
              >
                Doctors
              </a>
              <a
                className="transition hover:text-clinic-cream"
                href="#gallery"
              >
                Gallery
              </a>
            </nav>
          </div>
          <div>
            <h3 className="font-display font-bold">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-clinic-cream/60">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0" size={17} />
                <span>
                  35 street
                  <br /> Kolkata,West Bengal
                </span>
              </div>
              <a
                href="mailto:hello@TarVance.studio"
                className="flex gap-3 transition  hover:text-clinic-cream"
              >
                <Mail className="shrink-0" size={17} />
                hello@TarVance.studio
              </a>
              <div className="grid grid-flow-col gap-5 w-max mt-5.5">
                <a href="https://www.instagram.com/tarvanceweb?stkn=cGdzZ2ttZDJoN3hk&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={35} color="white" />
                </a>
                
                <a href="https://www.facebook.com/people/TarVance/61594404690999" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={35} color="white" />
                </a>
                
                <a href="https://api.whatsapp.com/send/?phone=8282017341&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={35} color="white" />
                </a>
                <a href="https://www.linkedin.com/company/tarvance/home/">
                  <FaLinkedin size={35} color="white" />
                </a>
                
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <CalendarDays size={19}  />
                <h3 className="font-display font-bold">Need an appointment?</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-clinic-cream/55">
                Choose a convenient time and send us your appointment request.
              </p>
              <Link
                to="/appointment"
                className="btn mt-5 w-full rounded-xl border-none bg-gray-50 text-clinic-navy shadow-none hover:bg-clinic-beige"
              >
                Book Appointment
                <ArrowUpRight size={16} />
        
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-clinic-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Dentiva Dental Care. All rights reserved.</p>

          <p>Designed for better patient experiences.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
