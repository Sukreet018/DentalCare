import { FaUserDoctor } from "react-icons/fa6";

import { doctors } from "../../data/doctors";
import DoctorCard from "../ui/cards/DoctorsCard";

function Doctors() {
  return (
    <section id="doctors" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className="section-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className=" inline-flex items-center gap-2 rounded-full border  border-clinic-navy/10  bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]  text-clinic-marine shadow-sm backdrop-blur motion-preset-fade">
              <FaUserDoctor size={15} />
              Modern dental care
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-clinic-text sm:text-4xl lg:text-5xl">
              Experienced clinicians.{" "}
              <a className="text-clinic-marine">Personal attention.</a>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-clinic-text/60">
              Meet the clinicians responsible for delivering thoughtful,
              evidence-informed dental care.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 ">
        <div className="intersect:motion-preset-slide-right motion-duration-1500">
          {doctors.slice(0, 1).map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        <div className=" intersect:motion-preset-slide-left motion-duration-1500">
          {doctors.slice(1, 2).map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
