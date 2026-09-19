import { Home } from "lucide-react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-clinic-surface text-clinic-text">
      <div className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full  text-clinic-marine max-w-2xl text-center">
          <div className="mx-auto m-10 flex items-center justify-center">
            <ImCross size={55}  />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-clinic-secondary">
            Page Not Found
          </p>

          <h1 className="text-7xl font-extrabold tracking-tight text-clinic-primary  text-shadow-gray-950 sm:text-8xl">
            4<a className="text-amber-400">0</a>4
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-clinic-primary sm:text-3xl">
            This page doesn't exist
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-clinic-muted sm:text-lg">
            The page you are looking for may have been moved, removed, or the
            address may be incorrect.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="btn h-12 rounded-xl border-0 bg-gray-50 px-6  shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-clinic-secondary"
            >
              <Home size={18} />
              Back to Home
            </Link>

          </div>

          <div className="mt-12 border-t border-clinic-border pt-6">
            <p className="text-sm text-clinic-muted">
              Need assistance?{" "}
              <a
            
                className="font-semibold text-clinic-secondary hover:text-clinic-primary"
              >
                Call +91 12345 67890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;