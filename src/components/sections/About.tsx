import {
  CheckCircle2,
} from "lucide-react";
import { MdCleanHands } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";

const values = [
  {
    icon: GoChecklist,
    title: "Clear treatment plans",
    description:
      "We explain what needs attention, why it matters, and what your options are.",
  },
  {
    icon: TbHeartHandshake,
    title: "Patient-first approach",
    description:
      "Your comfort, questions, and priorities remain central throughout your care.",
  },
  {
    icon: MdCleanHands ,
    title: "Modern clinical care",
    description:
      "We combine contemporary techniques with a clean and comfortable environment.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-clinic-navy/5 bg-white py-20 lg:py-28 intersect-once intersect:motion-preset-slide-up"
    >
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="intersect:motion-preset-slide-right overflow-hidden rounded-4xl bg-clinic-navy p-2 shadow-[0_25px_70px_rgba(11,31,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1100&q=85"
                alt="Dentist providing patient care"
                loading="lazy"
                className="h-[39rem] w-full rounded-[1.6rem] object-cover sm:h-[44.2rem]"
                
              />
            </div>

            <div className="intersect:motion-preset-slide-right absolute -bottom-5 right-4 rounded-2xl border border-clinic-navy/10 bg-white p-5 shadow-xl sm:right-8">
              <p className="font-display text-3xl font-extrabold text-clinic-navy">
                20+
              </p>

              <p className="mt-1 text-xs font-medium text-clinic-muted">
                Years of combined experience
              </p>
            </div>
          </div>

          <div className="intersect:motion-preset-slide-left motion-duration-1500">
            <div className=" inline-flex items-center gap-2 rounded-full border  border-clinic-navy/10  bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]  text-clinic-marine shadow-sm backdrop-blur motion-preset-fade">
              <span className="h-2 w-2 rounded-full bg-clinic-marine" />
               Why DentalCare
            </div>

            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight text-clinic-navy sm:text-4xl lg:text-5xl">
              Good dentistry starts with good communication.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-clinic-text/65">
              Dental treatment should not feel confusing or rushed. Our
              approach is built around listening carefully, explaining your
              options, and providing appropriate care in a calm clinical
              setting.
            </p>

            <div className="mt-8 space-y-5">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-clinic-beige/60 text-clinic-navy">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-clinic-navy">
                        {value.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-clinic-text/60">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-clinic-navy">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} />
                Personalised care
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} />
                Transparent communication
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;