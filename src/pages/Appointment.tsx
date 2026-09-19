import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
  UserRound,
} from "lucide-react";
import {type SubmitEvent } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

function Appointment() {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(
      "Your appointment request has been submitted. Connect this form to your backend to save and process appointments.",
    );
  };

  return (
    <div className="min-h-screen bg-clinic-cream text-clinic-text">
      <Navbar />

      <main className="pt-32 sm:pt-36">
        <section className="section-container pb-20 lg:pb-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border  border-clinic-navy/10  bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]  text-clinic-marine shadow-sm backdrop-blur motion-preset-fade">
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinic-marine">
                Appointments
              </p>

              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-clinic-navy sm:text-5xl">
                Schedule your visit.
              </h1>

              <p className="mt-6 leading-8 text-clinic-text/60">
                Send us your preferred date and time. Our team will contact
                you to confirm availability and your appointment.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex gap-4 motion-preset-slide-right rounded-2xl border border-clinic-navy/8 bg-white p-5">
                  <CalendarDays className="mt-0.5 shrink-0 text-clinic-marine" />

                  <div>
                    <p className="font-display font-bold text-clinic-navy">
                      Flexible scheduling
                    </p>

                    <p className="mt-1 text-sm leading-6 text-clinic-muted">
                      Tell us the date that works best for you.
                    </p>
                  </div>
                </div>

                <div className="motion-preset-slide-right flex gap-4 rounded-2xl border border-clinic-navy/8 bg-white p-5">
                  <Clock3 className="mt-0.5 shrink-0 text-clinic-marine" />

                  <div>
                    <p className="font-display font-bold text-clinic-navy">
                      Mon – Sat
                    </p>

                    <p className="mt-1 text-sm leading-6 text-clinic-muted">
                      9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 motion-preset-slide-right rounded-2xl border border-clinic-navy/8 bg-white p-5">
                  <Phone className="mt-0.5 shrink-0 text-clinic-marine" />

                  <div>
                    <p className="font-display font-bold text-clinic-navy">
                      Prefer to call?
                    </p>

                    <a 
                      href="tel:+919876543210" 
                      className="mt-1 block text-sm font-semibold text-clinic-marine"
                    >
                      +91 98765 43210
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="motion-preset-slide-left card border border-clinic-navy/8 bg-white shadow-[0_20px_60px_rgba(11,31,58,0.08)]">
              <div className="card-body p-6 sm:p-8 lg:p-10">
                <div>
                  <h2 className="font-display text-2xl font-bold text-clinic-navy">
                    Appointment request
                  </h2>

                  <p className="mt-2 text-sm text-clinic-muted">
                    All fields marked with * are required.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-control">
                      <span className="label">
                        <span className="label-text font-semibold text-clinic-navy">
                          Full name *
                        </span>
                      </span>

                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="input w-full border-clinic-navy/10 bg-gray-50 focus:border-clinic-marine focus:outline-none"
                      />
                    </label>

                    <label className="form-control">
                      <span className="label">
                        <span className="label-text font-semibold text-clinic-navy">
                          Phone *
                        </span>
                      </span>

                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+91"
                        className="input w-full border-clinic-navy/10  bg-gray-50 focus:border-clinic-marine focus:outline-none"
                      />
                    </label>
                  </div>

                  <label className="form-control">
                    <span className="label">
                      <span className="label-text font-semibold text-clinic-navy">
                        Email
                      </span>
                    </span>

                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="input w-full border-clinic-navy/10  bg-gray-50 focus:border-clinic-marine focus:outline-none"
                    />
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-control">
                      <span className="label">
                        <span className=" pt-3 pb-2 label-text font-semibold text-clinic-navy">
                          Preferred date *
                        </span>
                      </span>

                      <input
                        required
                        name="date"
                        type="date"
                        className="input w-full border-clinic-navy/10  bg-gray-50 focus:border-clinic-marine focus:outline-none"
                      />
                    </label>

                    <label className="form-control">
                      <span className="label">
                        <span className="pt-3 pb-2 label-text font-semibold text-clinic-navy">
                          Preferred time *
                        </span>
                      </span>

                      <select
                        required
                        name="time"
                        defaultValue=""
                        className="select w-full border-clinic-navy/10  bg-gray-50 focus:border-clinic-marine focus:outline-none"
                      >
                        <option value="" disabled>
                          Select time
                        </option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                      </select>
                    </label>
                  </div>

                  <label className="form-control">
                    <span className="label">
                      <span className="pb-1 label-text font-semibold text-clinic-navy">
                        Reason for visit *
                      </span>
                    </span>

                    <select
                      required
                      name="reason"
                      defaultValue=""
                      className="select w-full border-clinic-navy/10  bg-gray-50 focus:border-clinic-marine focus:outline-none"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="checkup">
                        General check-up
                      </option>
                      <option value="cleaning">
                        Cleaning
                      </option>
                      <option value="cosmetic">
                        Cosmetic dentistry
                      </option>
                      <option value="implant">
                        Dental implant
                      </option>
                      <option value="orthodontics">
                        Orthodontics
                      </option>
                      <option value="other">
                        Other
                      </option>
                    </select>
                  </label>

                  <label className="form-control">
                    <span className="label">
                      <span className="pt-3 pb-2 label-text font-semibold text-clinic-navy">
                        Additional information
                      </span>
                    </span>

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Anything we should know before your visit?"
                      className="textarea w-full resize-none border-clinic-navy/10  bg-gray-50 leading-7 focus:border-clinic-marine focus:outline-none"
                    />
                  </label>

                  <div className="rounded-xl bg-clinic-beige/35 p-4 text-xs leading-6 text-clinic-text/60">
                    <div className="flex gap-2">
                      <UserRound
                        size={16}
                        className="mt-0.5 shrink-0 text-clinic-marine"
                      />

                      <span>
                        Submitting this form sends an appointment request. It
                        does not guarantee a confirmed appointment until the
                        clinic contacts you.
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn w-full rounded-xl border-none bg-clinic-navy text-clinic-cream shadow-none hover:bg-clinic-marine"
                  >
                    Request Appointment
                    <CalendarDays size={17} />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-clinic-muted">
                    <CheckCircle2 size={14} />
                    Your request will be reviewed by the clinic
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Appointment;