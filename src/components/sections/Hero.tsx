import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import { LuHeartHandshake} from "react-icons/lu"
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-clinic-surface min-h-screen pt-32 sm:pt-30 lg:pt-27">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-clinic-cream-deep/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-clinic-beige/35 blur-3xl" />

      <div className="section-container relative">
        <div className="motion-preset-blur-right grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
          <div className="max-w-2xl">
            <div className=" inline-flex items-center gap-2 rounded-full border  border-clinic-navy/10  bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]  text-clinic-marine shadow-sm backdrop-blur motion-preset-fade">
              <span className="h-2 w-2 rounded-full bg-clinic-marine" />
              Modern dental care
            </div>

            <h1 className=" mt-7 max-w-3xl font-display text-4xl font-extrabold leading-[1.03] tracking-[-0.04em]  text-clinic-navy sm:text-6xl lg:text-8xl">
              Confident smiles.
              <span className="block text-clinic-marine">Thoughtful care.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-clinic-text/65 sm:text-lg">
              Comprehensive dental care in a calm, modern environment. From
              routine check-ups to advanced restorative and cosmetic treatments,
              we focus on care that is clear, comfortable, and personalised.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/appointment"
                className="btn btn-lg rounded-full border-none  bg-clinic-navy px-7  text-clinic-cream shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition-all duration-300 hover:-translate-y-0.5  hover:bg-clinic-marine hover:shadow-[0_18px_40px_rgba(11,31,58,0.22)] "
              >
                <CalendarDays size={18} />
                Book Appointment
              </Link>

              <a
                href="mailto:hello@TarVance.studio"
                className="btn btn-lg rounded-full border  border-clinic-navy/15  bg-white/65 px-7  text-clinic-navy shadow-none backdrop-blur transition-all duration-300 hover:-translate-y-0.5  hover:border-clinic-navy/30  hover:bg-white"
              >
                <Mail size={18}/>
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <a
                href="tel:+919876543210" 
                className="group flex items-center gap-3 "
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clinic-cream-deep/70 text-clinic-navy transition group-hover:bg-clinic-navy group-hover:text-clinic-cream-deep/70">
                  <Phone size={18} />
                </span>

                <span >
                  <span className="block text-xs font-medium uppercase tracking-wider text-clinic-muted">
                    Call the clinic
                  </span>
                  <span  className="font-display text-sm font-bold text-clinic-navy">
                    +91 98765 43210
                  </span>
                </span>
              </a>

              <div className="hidden h-8 w-px bg-clinic-navy/25 sm:block" />

              <div className="flex items-center gap-2 text-sm text-clinic-text/65">
                <LuHeartHandshake size={18} className="text-clinic-navy" />
                Patient-first care
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none motion-preset-slide-left">
            <div className="relative overflow-hidden rounded-4xl bg-clinic-navy p-2 shadow-[0_30px_80px_rgba(11,31,58,0.18)]">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1672922646448-9ce42a7233bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern dental treatment room"

                  className="h-156 w-full object-cover sm:h-[44.2rem]" 
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-clinic-navy/10 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:block lg:-left-7 motion-preset-pop">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-clinic-beige/70 text-clinic-navy">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <p className="text-xs text-clinic-muted">
                    Comfortable experience
                  </p>
                  <p className="font-display text-sm font-bold text-clinic-navy">
                    From consultation to care
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-8 hidden rounded-2xl bg-clinic-navy px-5 py-4 text-clinic-cream shadow-xl lg:block motion-preset-slide-left">
              <p className="text-xs text-clinic-cream/60">Appointments</p>
              <p className="mt-1 font-display font-bold">Mon – Sat</p>
              <p className="text-xs text-clinic-cream/60">9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
