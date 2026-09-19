import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import { MdMedicalServices } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ServiceCard from "../components/ui/cards/ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <div className="min-h-screen bg-clinic-surface text-clinic-text">
      <Navbar />

      <main>

        
        <section
          id="services"
          className="scroll-mt-28 bg-clinic-navy py-20 text-clinic-cream-deep lg:py-28"
        >
          <div className="section-container p-5">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl intersect:motion-preset-slide-right">
                <p className="motion-preset-fade inline-flex items-center gap-2 rounded-full border border-clinic-navy/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-clinic-marine shadow-sm backdrop-blur">
                  <MdMedicalServices size={15} />
                  Our Services
                </p>
    
                <h2 className="mt-7 font-display text-5xl font-extrabold tracking-tight text-clinic-cream-deep sm:text-4xl lg:text-7xl">
                  Complete dental care, thoughtfully delivered.
                </h2>
    
                <p className="mt-7 max-w-xl leading-8 text-clinic-cream/60">
                  From everyday preventive care to restorative and cosmetic
                  treatments, our services are designed around your individual
                  needs.
                </p>
              </div>
            </div>
    
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
    
          </div>
        </section>

        {/* Approach */}
        <section className="bg-clinic-navy py-20  text-clinic-cream-deep lg:py-24">
          <div className="section-container">
            <div className="grid intersect:motion-preset-slide-up gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-clinic-accent">
                  Our Approach
                </p>

                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Care that starts with understanding.
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-shadow-clinic-cream-deep/65">
                  We believe good dental care starts with understanding your
                  concerns. Our team takes the time to explain your options and
                  create a treatment plan suited to your needs.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CheckCircle2
                    size={23}
                    className="text-clinic-accent"
                    strokeWidth={1.8}
                  />

                  <h3 className="mt-5 font-bold text-clinic-cream-deep">
                    Personalised
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-clinic-cream/55">
                    Treatment plans based on your individual requirements.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <ShieldCheck
                    size={23}
                    className="text-clinic-accent"
                    strokeWidth={1.8}
                  />

                  <h3 className="mt-5 font-bold text-clinic-cream-deep">
                    Safety Focused
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-clinic-cream/55">
                    A careful approach to every consultation and procedure.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <Clock3
                    size={23}
                    className="text-clinic-accent"
                    strokeWidth={1.8}
                  />

                  <h3 className="mt-5 font-bold text-clinic-cream-deep">
                    Convenient
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-clinic-cream-deep/55">
                    Clear appointments and a comfortable clinic experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-clinic-surface py-20 sm:py-24">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-4xl bg-clinic-surface px-6 py-12 ring-1 ring-clinic-border sm:px-10 lg:px-16">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-clinic-accent/10 blur-3xl" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-clinic-marine">
                    Ready when you are
                  </p>

                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-clinic-navy sm:text-4xl">
                    Take the next step toward better dental care.
                  </h2>

                  <p className="mt-4 leading-7 text-clinic-muted">
                    Schedule a consultation and discuss your dental needs with
                    our team.
                  </p>
                </div>

                <Link
                  to="/appointment"
                  className="group btn h-12 rounded-xl border-0 bg-clinic-navy px-7 text-clinic-cream-deep shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-clinic-secondary"
                >
                  Book Appointment
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Services;