import { Phone, Mail, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { ContactForm } from "../components/ContactSection";
import Testimonials from "../components/Testimonials";
export default function Contact() {
  return (
    <>
      <section className="shell">
        <SectionHeading page label="Contact us">
          Your connection to better care starts here
        </SectionHeading>
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[30px] bg-pale p-6 md:p-10">
            <ContactForm labels />
          </div>
          <div className="py-5">
            <h2 className="mb-5 text-4xl">Reach out directly</h2>
            <p className="mb-9 max-w-sm text-xl leading-relaxed text-muted">
              We’re here to answer your questions and support your journey.
            </p>
            {[
              [Phone, "(487) 120-7980", "tel:+14871207980"],
              [Mail, "name@gmail.com", "mailto:name@gmail.com"],
              [
                MapPin,
                "Riyadh, KSA",
                "https://www.google.com/maps/search/?api=1&query=Riyadh",
              ],
            ].map(([Icon, label, url]) => (
              <a
                key={label}
                href={url}
                className="mb-7 flex items-center gap-5 text-xl"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-pale text-brand">
                  <Icon size={23} />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
