import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { asset } from "../data/assets";
export function DoctorCard({ doctor }) {
  return (
    <Link to={"/doctors/" + doctor.slug} className="group block">
      <div className="aspect-[1.034] overflow-hidden rounded-[28px] bg-pale">
        <img
          loading="lazy"
          src={asset(doctor.image)}
          alt={doctor.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mb-3 mt-5 flex items-center justify-between gap-3">
        <h2 className="text-[28px] leading-tight">{doctor.name}</h2>
        <span className="arrow-box shrink-0">
          <ArrowRight size={16} />
        </span>
      </div>
      <p className="text-xl text-muted">{doctor.role}</p>
    </Link>
  );
}
export function ServiceCard({ service }) {
  return (
    <Link
      to={"/services/" + service.slug}
      className="group rounded-[28px] bg-pale p-8 text-center transition duration-300 hover:bg-[#eaf2fc] md:p-10"
    >
      <img src={asset(service.icon)} alt="" className="mx-auto mb-8 size-20" />
      <h3 className="mb-4 text-[24px]">{service.title}</h3>
      <p className="mb-7 text-lg leading-relaxed text-muted">
        {service.description}
      </p>
      <span className="inline-flex items-center gap-2 text-base">
        View Services{" "}
        <ArrowRight
          size={17}
          className="transition group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
export function BlogCard({ blog }) {
  return (
    <Link to={"/blogs/" + blog.slug} className="group">
      <div className="mb-5 aspect-[1.42] overflow-hidden rounded-[24px]">
        <img
          loading="lazy"
          src={asset(blog.image)}
          alt={blog.title}
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-4 text-[25px] leading-[1.3] transition group-hover:text-brand">
        {blog.title}
      </h3>
      <div className="flex items-center justify-between text-base text-muted">
        <span>{blog.date}</span>
        <span>5 min Read</span>
      </div>
    </Link>
  );
}
