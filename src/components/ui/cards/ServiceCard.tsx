import type { ClinicService } from "../../../data/services";

type ServiceCardProps = {
  service: ClinicService;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className=" group relative isolate flex min-h-105 flex-col overflow-hidden rounded-[1.75rem] border  border-white/10  shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm opacity-0 translate-y-8 transition-all duration-700 ease-out intersect:opacity-100 intersect:translate-y-0 intersect-once hover:-translate-y-2 hover:border-clinic-accent/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.src}
          alt={service.alt}
          className=" h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-clinic-navy via-clinic-navy/20 to-transparent" />



        {/* Category */}
        <div className="absolute bottom-5 left-5">
          <span className="rounded-full border border-white/20 bg-clinic-navy/75 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-50 backdrop-blur-md">
            {service.shortTitle}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-4xl font-bold tracking-tight text-gray-50">
              {service.title}
            </h3>

            <div className="mt-3 h-px w-10 bg-clinic-accent transition-all duration-500 group-hover:w-16" />
          </div>
        </div>

        <p className="mt-auto text-sm leading-7 text-gray-50/60">
          {service.description}
        </p>
      </div>

      {/* Bottom highlight */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-clinic-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}

export default ServiceCard;