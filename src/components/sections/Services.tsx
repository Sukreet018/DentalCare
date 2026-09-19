import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MdMedicalServices } from "react-icons/md";
import { services } from "../../data/services";
import ServiceCard from "../ui/cards/ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-clinic-navy py-20 text-clinic-cream-deep lg:py-28"
    >
      <div className="section-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="motion-preset-fade inline-flex items-center gap-2 rounded-full border border-clinic-navy/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-clinic-marine shadow-sm backdrop-blur">
              <MdMedicalServices size={15} />
              Our Services
            </p>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Complete dental care, thoughtfully delivered.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-clinic-cream/60">
              From everyday preventive care to restorative and cosmetic
              treatments, our services are designed around your individual
              needs.
            </p>
          </div>

          <Link
            to="/services"
            className="group btn w-fit rounded-full border border-white/15 bg-white/10 text-clinic-cream shadow-none backdrop-blur transition-all duration-300 hover:border-white hover:bg-white hover:text-clinic-navy"
          >
            View All Services
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0,6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;