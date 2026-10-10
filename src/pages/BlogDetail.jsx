import { useParams, Link } from "react-router-dom";
import data from "../data/content.json";
import { asset } from "../data/assets";
import SectionHeading from "../components/SectionHeading";
import ContactSection from "../components/ContactSection";
import NotFound from "./NotFound";
export default function BlogDetail() {
  const { slug } = useParams();
  const blog = data.blogs.find((d) => d.slug === slug);
  if (!blog) return <NotFound />;
  const author = data.doctors.find((d) => d.name === blog.author);
  return (
    <>
      <section className="shell">
        <SectionHeading page label={blog.date}>
          {blog.title}
        </SectionHeading>
        <img
          className="h-[260px] w-full rounded-[30px] object-cover md:h-[510px]"
          src={asset(blog.image)}
          alt={blog.title}
        />
        <div className="mx-auto max-w-[900px] pt-10">
          {author && (
            <Link
              to={"/doctors/" + author.slug}
              className="mb-10 inline-flex items-center gap-3"
            >
              <img
                src={asset(author.image)}
                alt=""
                className="size-14 rounded-full bg-pale object-cover"
              />
              <div>
                <div className="text-xl">{author.name}</div>
                <div className="text-muted">{author.role}</div>
              </div>
            </Link>
          )}
          <article className="prose-body">
            {blog.body.map(({ tag, text }, i) => {
              const Tag = tag === "p" ? "p" : "h2";
              return <Tag key={i}>{text}</Tag>;
            })}
          </article>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
