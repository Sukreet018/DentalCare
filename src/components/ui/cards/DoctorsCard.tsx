import { GraduationCap } from "lucide-react";
import type { Doctor } from "../../../data/doctors";

type DoctorCardProps = {
  doctor: Doctor;
};

function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="card group overflow-hidden border border-clinic-navy/8 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,31,58,0.12)]">
      <figure className="relative aspect-[4/4.3] overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-clinic-navy/55 via-transparent to-transparent opacity-80" />

        <div className="absolute bottom-4 left-4">
          <span className="badge border-none bg-white/90 text-clinic-navy backdrop-blur">
            {doctor.experience}
          </span>
        </div>
      </figure>

      <div className="card-body p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="card-title font-display text-xl text-clinic-navy">
              {doctor.name}
            </h3>

            <p className="mt-1 text-sm font-semibold text-clinic-marine">
              {doctor.specialty}
            </p>
          </div>

        </div>

        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-clinic-muted">
          <GraduationCap size={15} />
          {doctor.qualifications}
        </div>

        <p className="mt-4 text-sm leading-7 text-clinic-text/60">
          {doctor.description}
        </p>
      </div>
    </article>
  );
}

export default DoctorCard;