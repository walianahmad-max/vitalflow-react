import { useParams, Link } from "react-router-dom";
import data from "../data/content.json";
import ContactSection from "../components/ContactSection";
import NotFound from "./NotFound";
export default function CareerDetail() {
  const { slug } = useParams();
  const c = data.careers.find((d) => d.slug === slug);
  if (!c) return <NotFound />;
  const split = c.slug === "physical-therapist" ? 7 : 6;
  return (
    <>
      <section className="shell grid items-start gap-12 py-14 md:grid-cols-[.65fr_1.35fr]">
        <aside className="rounded-3xl bg-pale p-8">
          <dl className="space-y-7">
            {[
              ["Department", c.department],
              ["Salary", c.salary],
              ["Employment", c.type],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="mb-2 text-muted">{k}</dt>
                <dd className="text-xl">{v}</dd>
              </div>
            ))}
          </dl>
          <Link className="pill mt-9" to="/contact">
            Apply now
          </Link>
        </aside>
        <article className="prose-body">
          <h1 className="heading mb-6">{c.title}</h1>
          <p>{c.description}</p>
          <h2>Description:</h2>
          <p>{c.body[0]}</p>
          <h2>Requirements:</h2>
          <ul>
            {c.body.slice(1, split).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h2>Benefits:</h2>
          <ul>
            {c.body.slice(split).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link to="/contact" className="pill">
            Apply now
          </Link>
        </article>
      </section>
      <ContactSection />
    </>
  );
}
