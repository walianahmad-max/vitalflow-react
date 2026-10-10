import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Header";
const groups = [
  [
    "Static pages",
    [
      ["Home", "/"],
      ["About", "/about-us"],
      ["Contact", "/contact"],
      ["404", "/404"],
    ],
  ],
  [
    "CMS Pages",
    [
      ["Services", "/services"],
      ["Doctors", "/doctors"],
      ["Careers", "/careers"],
      ["Blogs", "/blogs"],
    ],
  ],
  [
    "Detail pages",
    [
      ["Service (CMS)", "/services/pediatrics"],
      ["Doctor (CMS)", "/doctors/jonathan-reed"],
      ["Career (CMS)", "/careers/physical-therapist"],
      [
        "Blogs (CMS)",
        "/blogs/the-benefits-of-regular-exercise-a-pathway-to-health",
      ],
    ],
  ],
  [
    "Follow us",
    [
      ["Linkedin", "https://www.linkedin.com/"],
      ["Facebook", "https://facebook.com/"],
      ["Twitter", "https://x.com/"],
      ["Youtube", "https://www.youtube.com/"],
    ],
  ],
];
export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="shell pb-9 pt-12">
      <div className="flex flex-col justify-between gap-10 border-b border-[#e7e9e9] pb-14 md:flex-row">
        <div className="max-w-[310px]">
          <Logo />
          <p className="mb-6 mt-5 text-lg leading-relaxed text-muted">
            Creative healthcare template to launch your site quick and easily
          </p>
          <Link className="pill" to="/contact">
            Book a call
          </Link>
        </div>
        <div className="w-full md:max-w-[370px]">
          <h3 className="mb-5 text-2xl">Stay up to date</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="flex items-center rounded-full border border-gray-200 p-1.5"
          >
            <input
              required
              aria-label="Newsletter email"
              type="email"
              placeholder="name@email.com"
              className="min-w-0 flex-1 rounded-full px-4 py-2 outline-none"
            />
            <button
              aria-label="Subscribe"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white"
            >
              <ArrowRight size={19} />
            </button>
          </form>
          <p className="mt-3 text-sm text-muted" role="status">
            {done
              ? "Demo only — your email has not been subscribed."
              : "by subscribing you will agree to privacy and policy"}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {groups.map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-5 text-xl">{title}</h4>
            <div className="space-y-3">
              {links.map(([name, url]) =>
                url.startsWith("http") ? (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted hover:text-brand"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    key={url}
                    to={url}
                    className="block text-muted hover:text-brand"
                  >
                    {name}
                  </Link>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 pt-5 text-sm text-muted">
        Vital+Flow · Healthcare template recreation
      </div>
    </footer>
  );
}
