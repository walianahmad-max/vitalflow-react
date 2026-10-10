import data from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { ServiceCard } from "../components/Cards";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
export default function Services() {
  return (
    <>
      <section className="shell">
        <SectionHeading page label="Services">
          Personalized solutions for better oral health
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <Testimonials />
      <ContactSection />
    </>
  );
}
