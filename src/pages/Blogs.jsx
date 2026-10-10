import data from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { BlogCard } from "../components/Cards";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
export default function Blogs() {
  return (
    <>
      <section className="shell">
        <SectionHeading page label="Blog">
          Insights and tips for better healthcare decisions
        </SectionHeading>
        <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {data.blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
      <Testimonials />
      <ContactSection />
    </>
  );
}
