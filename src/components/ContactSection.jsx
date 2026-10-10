import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Eyebrow } from "./SectionHeading";
export function ContactForm({ labels = false }) {
  const [params] = useSearchParams();
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5"
    >
      {sent ? (
        <div
          role="status"
          className="rounded-2xl border border-blue-200 bg-white p-7 text-ink"
        >
          <h3 className="mb-3 text-2xl">Thank you for reaching out.</h3>
          <p className="text-muted">
            This is a website demo. Your message has not been sent and no
            appointment has been booked.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="pill mt-5"
          >
            Back to form
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["name", "Full Name", "text"],
              ["email", "Email Address", "email"],
              ["phone", "Phone Number", "tel"],
              ["date", "Preferred Date", "date"],
            ].map(([name, label, type]) => (
              <label key={name} className="block">
                {labels && <span className="mb-2 block">{label}</span>}
                <input
                  className="field"
                  name={name}
                  aria-label={label}
                  placeholder={label}
                  type={type}
                  required={name !== "date"}
                  min={
                    type === "date"
                      ? new Date().toLocaleDateString("en-CA")
                      : undefined
                  }
                  defaultValue={
                    name === "name" ? params.get("name") || "" : undefined
                  }
                />
              </label>
            ))}
          </div>
          <label className="block">
            {labels && <span className="mb-2 block">Message</span>}
            <textarea
              aria-label="Message"
              name="message"
              placeholder="Message"
              required
              rows="5"
              className="field resize-y"
              defaultValue={
                params.get("doctor")
                  ? `I'd like to request an appointment with ${params.get("doctor")}.`
                  : undefined
              }
            />
          </label>
          <button className="pill w-full" type="submit">
            Submit
          </button>
          <p className="text-xs text-muted">
            Demo form — no message or booking is sent.
          </p>
        </>
      )}
    </form>
  );
}
export default function ContactSection() {
  return (
    <section className="contact-band my-12 bg-brand py-14 text-white md:my-20">
      <div className="shell grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-[36px] leading-[1.14] md:text-[44px]">
            Contact us for more information &amp; get started
          </h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
