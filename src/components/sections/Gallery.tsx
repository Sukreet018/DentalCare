import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GrGallery } from "react-icons/gr";
import { galleryImages } from "../../data/images";

function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-28 overflow-hidden bg-clinic-cream py-20 lg:py-28  intersect:motion-preset-slide-up motion-duration-1500"
    >
      <div className="section-container">
        <div className="max-w-2xl">
          <p className=" inline-flex items-center gap-2 rounded-full border  border-clinic-navy/10  bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]  text-clinic-marine shadow-sm backdrop-blur motion-preset-fade">
            <GrGallery size={15} />Clinic gallery
          </p>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-clinic-navy sm:text-4xl lg:text-5xl">
            A space designed to feel calm.
          </h2>

          <p className="mt-5 leading-8 text-clinic-text/75">
            Take a look at our clinical environment, treatment spaces, and
            patient-focused approach.
          </p>
        </div>

        <div className="relative mt-10">
          <div
            id="clinic-gallery"
            className="carousel carousel-center w-full gap-5 rounded-2xl p-1"
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                id={`gallery-${image.id}`}
                className="carousel-item w-[82%] sm:w-[65%] lg:w-[42%]"
              >
                <div className="group relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-clinic-navy shadow-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-clinic-navy/75 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-display text-lg font-bold text-white">
                        {image.title}
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        Dentiva Dental Care
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous gallery image"
            onClick={() => {
              const carousel = document.getElementById("clinic-gallery");

              if (!carousel) return;

              carousel.scrollBy({
                left: -carousel.clientWidth * 0.65,
                behavior: "smooth",
              });
            }}
            className="btn btn-circle absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 border border-clinic-navy/10 bg-white/90 text-clinic-navy shadow-xl backdrop-blur sm:flex"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            aria-label="Next gallery image"
            onClick={() => {
              const carousel = document.getElementById("clinic-gallery");

              if (!carousel) return;

              carousel.scrollBy({
                left: carousel.clientWidth * 0.65,
                behavior: "smooth",
              });
            }}
            className="btn btn-circle absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 border border-clinic-navy/10 bg-white/90 text-clinic-navy shadow-xl backdrop-blur sm:flex"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;