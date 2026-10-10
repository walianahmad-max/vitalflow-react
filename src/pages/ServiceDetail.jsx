import { Link, useParams } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import data from "../data/content.json";
import { asset } from "../data/assets";
import ContactSection from "../components/ContactSection";
import NotFound from "./NotFound";
export default function ServiceDetail() {
  const { slug } = useParams();
  const s = data.services.find((d) => d.slug === slug);
  if (!s) return <NotFound />;
  const doctor = data.doctors.find((d) => d.name === s.doctor);
  return (
    <>
      <section className="shell pt-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <img src={asset(s.icon)} className="mb-7 size-16" alt="" />
            <h1 className="heading">{s.title}</h1>
            <p className="mt-5 text-2xl leading-relaxed text-[#656865]">
              {s.description}
            </p>
            {doctor && (
              <Link
                to={"/doctors/" + doctor.slug}
                className="mt-14 flex items-center gap-4"
              >
                <img
                  src={asset(doctor.image)}
                  alt={doctor.name}
                  className="size-12 rounded-full bg-pale object-cover"
                />
                <div>
                  <div className="text-xl">{doctor.name}</div>
                  <div className="text-sm text-muted">{doctor.role}</div>
                </div>
              </Link>
            )}
          </div>
          <img
            src={asset(s.image)}
            alt={s.title + " care"}
            className="h-[400px] w-full rounded-[30px] object-cover md:h-[595px]"
          />
        </div>
        <div className="grid items-start gap-10 py-16 md:grid-cols-[.7fr_1.3fr]">
          <aside className="rounded-3xl bg-pale p-8">
            <h2 className="mb-6 text-[28px]">
              Book a call with specialist Now!!
            </h2>
            <div className="space-y-5 text-muted">
              <a className="flex items-center gap-3" href="tel:+12534561189">
                <Phone size={20} />
                (253) 456 - 1189
              </a>
              <a
                className="flex items-center gap-3"
                href="mailto:name@gmail.com"
              >
                <Mail size={20} />
                name@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                Visit our clinic
              </div>
            </div>
            <Link
              className="pill mt-8"
              to={"/contact?doctor=" + encodeURIComponent(s.doctor)}
            >
              Book a call
            </Link>
          </aside>
          <article className="prose-body">
            <h2 className="!mt-0">About service:</h2>
            {s.body.slice(0, 2).map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul>
              {s.body.slice(2).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
