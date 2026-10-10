import data from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { DoctorCard } from "../components/Cards";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
export default function Doctors() {
  return (
    <>
      <section className="shell">
        <SectionHeading page label="Team">
          Meet our dedicated and experienced team
        </SectionHeading>
        <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {data.doctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </section>
      <Testimonials />
      <ContactSection />
    </>
  );
}
