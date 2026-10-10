import { Link } from "react-router-dom";
import { Check, Heart, ShieldCheck, Sparkles } from "lucide-react";
import data from "../data/content.json";
import { asset } from "../data/assets";
import SectionHeading, { Eyebrow } from "../components/SectionHeading";
import { DoctorCard } from "../components/Cards";
import ContactSection from "../components/ContactSection";
export default function About() {
  const images = data.pageImages["/about-us"];
  return (
    <>
      <section className="shell">
        <SectionHeading
          page
          label="About us"
          action={
            <Link to="/contact" className="pill">
              Get Started
            </Link>
          }
        >
          A modern dental care home for families
        </SectionHeading>
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {images.slice(1, 4).map((img, i) => (
            <img
              key={img}
              className="h-[230px] w-full rounded-[24px] object-cover md:h-[470px]"
              src={asset(img)}
              alt={
                [
                  "Doctors meeting",
                  "Doctor caring for a patient",
                  "Healthcare professional",
                ][i]
              }
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-9 py-16 text-center md:grid-cols-4">
          {[
            ["80%", "Satisfaction rate"],
            ["20+", "Years of experience"],
            ["990", "Patients Treated"],
            ["70+", "Expert Doctors"],
          ].map(([n, t]) => (
            <div key={t}>
              <p className="font-display text-5xl tracking-tight md:text-6xl">
                {n}
              </p>
              <p className="mt-3 text-lg text-muted">{t}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="shell section grid items-center gap-10 md:grid-cols-2 md:gap-20">
        <div className="grid grid-cols-2 items-center gap-4">
          <img
            src={asset(images[4])}
            alt="Medical care"
            className="h-[350px] w-full rounded-3xl object-cover"
          />
          <img
            src={asset(images[5])}
            alt="A healthcare professional"
            className="h-[440px] w-full rounded-3xl object-cover"
          />
        </div>
        <div>
          <Eyebrow>Our Mission</Eyebrow>
          <h2 className="heading mb-8">
            Transforming lives with medical solutions
          </h2>
          {[
            [
              "Compassionate care",
              "Our mission is to provide personalized and empathetic healthcare for individual.",
            ],
            [
              "Excellence in service",
              "We strive to deliver high-quality, reliable, and innovative medical solutions.",
            ],
          ].map(([t, p]) => (
            <div key={t} className="mb-6">
              <h3 className="mb-2 text-2xl">{t}</h3>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </div>
          ))}
          <Link to="/contact" className="pill mt-2">
            Book a call
          </Link>
        </div>
      </section>
      <section className="shell section grid items-center gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <Eyebrow>Our Vision</Eyebrow>
          <h2 className="heading mb-8">
            Passionate about creating healthier, happier lives
          </h2>
          <ul className="mb-8 space-y-5">
            {[
              "Innovating for better healthcare futures",
              "Leading with patient-focused care solutions",
              "Building healthier and stronger communities",
              "Transforming lives through medical excellence",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 text-lg text-muted"
              >
                <Check className="shrink-0 text-brand" size={19} />
                {t}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="pill">
            Book a call
          </Link>
        </div>
        <img
          src={asset("kMSL8gkwRIHhMhuyeNv76GzQY.jpg")}
          alt="Our medical team"
          className="h-[470px] w-full rounded-[30px] object-cover"
        />
      </section>
      <section className="bg-pale">
        <div className="shell section">
          <SectionHeading label="Our Values">
            Core principles guiding our healthcare mission
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                Heart,
                "Compassion",
                "We prioritize empathy and understanding, ensuring every patient feels valued, respected, and cared for in their healthcare journey.",
              ],
              [
                Sparkles,
                "Excellence",
                "We are committed to delivering the highest standards of quality in every aspect of our services, striving for continuous improvement.",
              ],
              [
                ShieldCheck,
                "Integrity",
                "We uphold honesty and transparency in all interactions, building trust with patients, families, and the community through ethical practices.",
              ],
            ].map(([Icon, t, p]) => (
              <div key={t} className="rounded-3xl bg-white p-8">
                <Icon className="mb-7 text-brand" size={36} />
                <h3 className="mb-4 text-3xl">{t}</h3>
                <p className="text-lg leading-relaxed text-muted">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="shell section">
        <SectionHeading label="Team">
          Meet our dedicated and experienced team of experts
        </SectionHeading>
        <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {data.doctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
