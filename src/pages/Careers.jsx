import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  HeartHandshake,
  Target,
} from "lucide-react";
import data from "../data/content.json";
import { asset } from "../data/assets";
import SectionHeading, { Eyebrow } from "../components/SectionHeading";
import ContactSection from "../components/ContactSection";
export default function Careers() {
  return (
    <>
      <section className="shell">
        <SectionHeading page label="Careers">
          Discover a workplace that inspires success
        </SectionHeading>
        <img
          src={asset("ZGXRRa6XLMwK5KQvdbrtGTlcso.webp")}
          alt="Join our healthcare team"
          className="h-[280px] w-full rounded-[30px] object-cover md:h-[470px]"
        />
        <h2 className="heading mb-10 mt-20">Open Job Positions:</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {data.careers.map((c) => (
            <Link
              to={"/careers/" + c.slug}
              key={c.slug}
              className="group rounded-[25px] bg-pale p-8"
            >
              <div className="mb-7 flex gap-2">
                {[c.type, c.level].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 px-4 py-1.5 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[32px]">{c.title}</h3>
                <ArrowUpRight className="transition group-hover:translate-x-1" />
              </div>
              <p className="text-lg leading-relaxed text-muted">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="shell section grid items-center gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>Join us</Eyebrow>
          <h2 className="heading mb-10">
            Build your future with our dynamic team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              [
                TrendingUp,
                "Growth opportunities",
                "Unlock a career path designed to match your skills and aspirations for continuous development.",
              ],
              [
                Users,
                "Collaborative work",
                "Thrive in a supportive and inclusive culture that values teamwork and innovation.",
              ],
              [
                HeartHandshake,
                "Competitive benefits",
                "Enjoy industry-leading perks and benefits that prioritize your well-being and success.",
              ],
              [
                Target,
                "Impact-driven",
                "Be part of a team dedicated to making a meaningful difference in the lives of others.",
              ],
            ].map(([Icon, t, p]) => (
              <div key={t}>
                <Icon className="mb-4 text-brand" />
                <h3 className="mb-3 text-xl">{t}</h3>
                <p className="leading-relaxed text-muted">{p}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={asset("Lb5mYmr2vkAGxTu4LdcRgaxBFo.webp")}
          alt="Working together in healthcare"
          className="h-[550px] w-full rounded-[30px] object-cover"
        />
      </section>
      <ContactSection />
    </>
  );
}
