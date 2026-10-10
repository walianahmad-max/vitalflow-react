import { useParams } from "react-router-dom";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import data from "../data/content.json";
import { asset } from "../data/assets";
import ContactSection from "../components/ContactSection";
import NotFound from "./NotFound";
export default function DoctorDetail() {
  const { slug } = useParams();
  const doctor = data.doctors.find((d) => d.slug === slug);
  if (!doctor) return <NotFound />;
  return (
    <>
      <section className="shell grid items-center gap-8 pt-7 md:grid-cols-[.8fr_1.2fr] md:gap-12">
        <div className="h-[450px] overflow-hidden rounded-[30px] bg-pale md:h-[495px]">
          <img
            src={asset(doctor.image)}
            alt={doctor.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-[38px] leading-tight md:text-[44px]">
            {doctor.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{doctor.role}</p>
          <dl className="my-8 space-y-4 border-y border-gray-200 py-7">
            {[
              ["Experience", doctor.experience],
              ["Qualifications", doctor.qualifications],
              ["Working hours", doctor.hours],
              ["Location", doctor.location],
            ].map(([label, value]) => (
              <div className="grid grid-cols-2 gap-3 text-lg" key={label}>
                <dt>{label}</dt>
                <dd className="text-muted">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex gap-4">
            {[
              [Linkedin, "https://www.linkedin.com/", "LinkedIn"],
              [Twitter, "https://x.com/", "Twitter"],
              [Facebook, "https://facebook.com/", "Facebook"],
            ].map(([Icon, url, label]) => (
              <a
                key={label}
                aria-label={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-200 p-2.5 hover:text-brand"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <article className="prose-body mx-auto w-[calc(100%-40px)] max-w-[890px] py-12 md:py-16">
        {doctor.paragraphs.map((p, i) => (
          <section key={i}>
            <h2>{["About:", "Experience:", "Specialities & Info:"][i]}</h2>
            <p>{p}</p>
          </section>
        ))}
      </article>
      <ContactSection />
    </>
  );
}
