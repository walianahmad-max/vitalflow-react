import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="shell py-24 text-center">
      <p className="font-display text-[140px] leading-none text-brand">404</p>
      <h1 className="heading mt-6">Page not found</h1>
      <p className="my-6 text-xl text-muted">
        The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="pill">
        Back to home
      </Link>
    </section>
  );
}
