import { Link } from "react-router-dom";
import {
  Play,
  CalendarCheck,
  ClipboardList,
  Video,
  Stethoscope,
  FileHeart,
  Network,
  Check,
} from "lucide-react";
import data from "../data/content.json";
import { asset } from "../data/assets";
import SectionHeading, { Eyebrow } from "../components/SectionHeading";
import { ServiceCard, BlogCard } from "../components/Cards";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import ConsultationForm from "../components/ConsultationForm";
const features = [
  [
    CalendarCheck,
    "Easy appointment",
    "Schedule your appointments quickly with our simple and efficient booking system.",
  ],
  [
    ClipboardList,
    "Personalized plans",
    "Receive tailored care plans designed to meet your unique health needs and goals.",
  ],
  [
    Video,
    "24/7 consultations",
    "Access expert medical advice anytime through secure and reliable virtual visits.",
  ],
  [
    Stethoscope,
    "Medical technology",
    "Experience modern healthcare with innovative tools and state-of-the-art equipment.",
  ],
  [
    FileHeart,
    "Patient records",
    "Stay organized with secure, easy access to your medical records whenever needed.",
  ],
  [
    Network,
    "Care network",
    "Connect with top specialists and facilities to ensure complete healthcare coverage.",
  ],
];
export default function Home() {
  return (
    <>
      <section className="shell grid items-center gap-10 pb-16 pt-[30px] md:grid-cols-2 md:gap-20 md:pb-24">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xl">
            <span
              className="tracking-[1px] text-[#ffc800]"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </span>
            <span>5.0 (980 Reviews)</span>
          </div>
          <h1 className="page-heading max-w-[560px]">
            Partner in health and wellness
          </h1>
          <p className="mb-9 mt-7 max-w-[440px] text-xl leading-[1.55] text-[#656865]">
            Providing advanced healthcare solutions with a compassionate touch
            for every patient.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="pill">
              Book a call
            </Link>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex size-8 items-center justify-center rounded-full border border-gray-200">
                <Play size={14} fill="currentColor" />
              </span>
              Watch Video
            </a>
          </div>
          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "b5jTtFlE6UjvJaUpSs5797tQsSs.webp",
                "2aBRvSse0zJnzpuCOdsM4CUcy0.webp",
                "OSg5NrirhnZIfnqszjqlMPbQsg.svg",
              ].map((img) => (
                <img
                  key={img}
                  src={asset(img)}
                  className="size-12 rounded-full border-2 border-white object-cover"
                  alt=""
                />
              ))}
            </div>
            <div>
              <p className="text-lg">5000+ Appointments</p>
              <p className="mt-1 text-sm text-muted">Patients booked already</p>
            </div>
          </div>
        </div>
        <img
          src={asset("RiukRfppKWATQjdvnvRv1Rm48.jpg")}
          className="h-[460px] w-full rounded-[36px] object-cover md:h-[630px]"
          alt="Doctor wearing a protective mask"
        />
      </section>
      <section className="shell">
        <ConsultationForm />
      </section>
      <section className="shell section grid items-center gap-10 md:grid-cols-2 md:gap-20">
        <div className="relative">
          <img
            src={asset("VkQIGu6u7FhBCugBtnRpiFrmFw.jpg")}
            alt="Professional healthcare"
            className="h-[520px] w-full rounded-[30px] object-cover"
          />
          <div className="absolute bottom-6 left-6 max-w-[230px] rounded-2xl bg-white p-6">
            <p className="font-display text-5xl">200K+</p>
            <p className="mt-2 text-muted">
              Cured satisfied patients around the globe
            </p>
          </div>
        </div>
        <div>
          <Eyebrow>Why us</Eyebrow>
          <h2 className="heading mb-9">
            Why choose VitalFlow for your healthcare?
          </h2>
          {[
            [
              "01",
              "Experienced Professionals",
              "Our team of dedicated healthcare providers brings years of experience and expertise to deliver care",
            ],
            [
              "02",
              "Advanced Technology",
              "We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments",
            ],
          ].map(([n, t, p]) => (
            <div key={n} className="mb-7 flex gap-4">
              <span className="text-xl text-brand">{n}</span>
              <div>
                <h3 className="mb-3 text-2xl">{t}</h3>
                <p className="text-lg leading-relaxed text-muted">{p}</p>
              </div>
            </div>
          ))}
          <Link className="pill" to="/about-us">
            Get Started
          </Link>
        </div>
      </section>
      <section className="shell pb-10">
        <div className="flex flex-wrap items-center justify-between gap-5 border-y border-gray-200 py-8">
          <h3 className="text-2xl">Available Doctors</h3>
          <div className="flex flex-wrap gap-6">
            {data.doctors.slice(0, 2).map((d) => (
              <Link
                className="flex items-center gap-3"
                key={d.slug}
                to={"/doctors/" + d.slug}
              >
                <img
                  src={asset(d.image)}
                  alt=""
                  className="size-14 rounded-full bg-pale object-cover"
                />
                <div>
                  <p>{d.name}</p>
                  <p className="text-sm text-muted">{d.role}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/doctors" className="pill">
            Meet Our Experts
          </Link>
        </div>
      </section>
      <section className="shell section">
        <SectionHeading label="Services">
          Personalized solutions for better oral health
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <section className="shell section grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <img
          className="h-[520px] w-full rounded-[30px] object-cover"
          src={asset("xolhj23w9rvPPDhG1vbAIr7CyM.jpg")}
          alt="Healthcare specialist"
        />
        <div>
          <Eyebrow>About us</Eyebrow>
          <h2 className="heading mb-8">
            Vision for a healthier and brighter tomorrow
          </h2>
          {[
            [
              "Our Mission",
              "Our mission is to deliver compassionate and high-quality healthcare services.",
            ],
            [
              "Our Vision",
              "Leading healthcare provider, recognized for innovative practices and care.",
            ],
          ].map(([t, p]) => (
            <div key={t} className="mb-7">
              <h3 className="mb-3 flex items-center gap-3 text-2xl">
                <Check size={22} className="text-brand" />
                {t}
              </h3>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </div>
          ))}
          <Link to="/about-us" className="pill">
            What we do
          </Link>
        </div>
      </section>
      <section className="bg-pale">
        <div className="shell section">
          <SectionHeading label="Features">
            Innovative solutions to enhance medical service
          </SectionHeading>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([Icon, t, p]) => (
              <div key={t}>
                <Icon className="mb-5 text-brand" size={32} />
                <h3 className="mb-3 text-[25px]">{t}</h3>
                <p className="text-lg leading-relaxed text-muted">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="shell section">
        <SectionHeading label="How it works">
          Step-by-step process for seamless user experience
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            [
              "Share your preferences",
              "Tell us about your unique needs and preferences to help us create a personalized plan for your care.",
              "BwJlMFVIoFqaHXWgG0P7vlIqAM.webp",
            ],
            [
              "Customized solutions",
              "We analyze your requirements and craft tailored solutions designed specifically for your goals.",
              "jJjwlImmKLqhr5SdvtunsDUAME.jpg",
            ],
            [
              "Achieve your vision",
              "Experience seamless results as we bring your perfect vision to life with precision and care.",
              "3f9q0tEEcQxswK0pZCZ91xK4aA4.webp",
            ],
          ].map(([t, p, img], i) => (
            <div key={t}>
              <img
                src={asset(img)}
                alt={t}
                className="mb-7 h-60 w-full rounded-3xl object-cover"
                loading="lazy"
              />
              <span className="text-brand">0{i + 1}</span>
              <h3 className="mb-3 mt-3 text-2xl">{t}</h3>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <section className="shell section">
        <SectionHeading label="Blog">
          Insights and tips for better healthcare decisions
        </SectionHeading>
        <div className="grid gap-7 md:grid-cols-3">
          {data.blogs.slice(0, 3).map((b) => (
            <BlogCard key={b.slug} blog={b} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/blogs" className="pill">
            View all blogs
          </Link>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
