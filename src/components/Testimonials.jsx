import SectionHeading from "./SectionHeading";
import { asset } from "../data/assets";
const reviews = [
  [
    "Emily Johnson",
    "Their service was outstanding. They ensured I was comfortable and informed every step of the way.",
    "2D6XtXtVf2ZPpchW6wNLcqq9Zc.webp",
  ],
  [
    "Michael Roberts",
    "The support I received was excellent. They truly cared about my needs and exceeded my expectations.",
    "OSg5NrirhnZIfnqszjqlMPbQsg.svg",
  ],
  [
    "Sophia Martinez",
    "I felt valued and cared for. Their team made every effort to provide exceptional support and service.",
    "2m6Vf3e8eE5i2wfOrSvAT78ctmI.webp",
  ],
  [
    "Olivia Harris",
    "They were attentive and thorough. Their professionalism and kindness made the entire process seamless.",
    "0ko6NgdhqGj0qbhzn4Aq5k20K8.webp",
  ],
  [
    "James Anderson",
    "My experience was remarkable. They delivered exactly what they promised with care and dedication.",
    "ISS0EEHdkUjhAYoYmhKS3GAD0yE.webp",
  ],
  [
    "Daniel Thompson",
    "Their team was exceptional. They listened to my concerns and made sure all my needs were addressed.",
    "2aBRvSse0zJnzpuCOdsM4CUcy0.webp",
  ],
];
export default function Testimonials() {
  return (
    <section className="shell section">
      <SectionHeading label="Testimonials">
        What our satisfied and happy clients have to say
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map(([name, quote, img]) => (
          <figure
            key={name}
            className="rounded-3xl border border-[#e6e9e9] p-7"
          >
            <figcaption className="mb-5 flex items-center gap-3">
              <img
                loading="lazy"
                src={asset(img)}
                className="size-12 rounded-full object-cover"
                alt=""
              />
              <span className="text-xl">{name}</span>
            </figcaption>
            <blockquote className="text-lg leading-[1.6] text-muted">
              {quote}
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
