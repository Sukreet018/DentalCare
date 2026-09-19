import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-28 bg-clinic-surface py-20 lg:py-28">
        <div className=" section-container overflow-hidden  rounded-4xl bg-clinic-navy shadow-[0_25px_70px_rgba(11,31,58,0.18)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinic-cream/50">
                Ready when you are
              </p>

              <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight text-clinic-cream-deep sm:text-4xl">
                Have a question or ready to schedule a visit?
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-clinic-cream/60">
                Contact the clinic directly or request an appointment online.
                Our team will help you find the appropriate next step.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/appointment"
                  className="btn rounded-full border-none bg-gray-100 px-6 text-clinic-navy shadow-none hover:bg-clinic-beige"
                >
                  Book Appointment
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="mailto:hello@dentiva.in"
                  className="btn rounded-full border border-white/15 bg-white/5 px-6 text-white shadow-none hover:bg-white hover:text-clinic-navy"
                >
                  Contact Clinic
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/5 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <div className="space-y-7">
                <a href="tel:+919876543210" 
                  className="flex gap-4 text-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={18} />
                  </span>

                  <span>
                    <span className="block text-xs text-white/45">
                      Call us
                    </span>
                    <span className="mt-1 block font-display font-bold">
                      +91 98765 43210
                    </span>
                  </span>
                </a>

                <a  href="mailto:hello@TarVance.studio"
                  className="flex gap-4 text-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={18} />
                  </span>

                  <span>
                    <span className="block text-xs text-white/45">
                      Email
                    </span>
                    <span className="mt-1 block font-display font-bold">
                      hello@TarVance.studio
                    </span>
                  </span>
                </a>

                <div className="flex gap-4 text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={18} />
                  </span>

                  <span>
                    <span className="block text-xs text-white/45">
                      Visit
                    </span>
                    <span className="mt-1 block font-display font-bold">
                      35 Street
                    </span>
                    <span className="text-sm text-white/55">
                      Kolkata, West Bengal
                    </span>
                  </span>
                </div>

                <div className="flex gap-4 text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock3 size={18} />
                  </span>

                  <span>
                    <span className="block text-xs text-clinic-cream/45">
                      Opening hours
                    </span>
                    <span className="mt-1 block font-display font-bold">
                      Mon – Sat
                    </span>
                    <span className="text-sm text-clinic-cream/55">
                      9:00 AM – 7:00 PM
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}

export default ContactCTA;