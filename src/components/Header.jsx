import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { asset } from "../data/assets";
export function Logo() {
  return (
    <Link
      to="/"
      aria-label="VitalFlow home"
      className="inline-flex shrink-0 items-center gap-3 text-[22px] font-bold tracking-[-1px]"
    >
      <img
        className="size-[38px]"
        src={asset("w3sZiBC05z4WZCxZn5XzvnOKr4.svg")}
        alt=""
      />
      Vital+Flow
    </Link>
  );
}
const links = [
  ["About", "/about-us"],
  ["Services", "/services"],
  ["Doctors", "/doctors"],
  ["Blog", "/blogs"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="relative z-30 bg-white">
      <div className="shell flex h-[84px] items-center justify-between">
        <Logo />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {links.map(([name, url]) => (
            <NavLink
              key={url}
              to={url}
              className="text-lg transition hover:text-brand"
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="pill hidden md:inline-flex">
          Book a call
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-y border-gray-100 bg-white p-6 shadow-lg md:hidden"
        >
          {links.map(([name, url]) => (
            <NavLink key={url} to={url} className="block py-3 text-xl">
              {name}
            </NavLink>
          ))}
          <Link to="/contact" className="pill mt-3">
            Book a call
          </Link>
        </nav>
      )}
    </header>
  );
}
