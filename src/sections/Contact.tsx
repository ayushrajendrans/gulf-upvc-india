import { FormEvent, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { architecturalImages, contact, contactHighlights, whatsappUrl } from "../data/site";

export function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const projectType = String(form.get("projectType") || "").trim();
    if (!name || !phone || !projectType) {
      setStatus("Please add your name, phone number and project type.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/gulfupvc.india@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email: email || "Not provided",
          projectType,
          location: String(form.get("location") || "").trim() || "Not provided",
          message: String(form.get("message") || "").trim() || "Not provided",
          _subject: "New Gulf uPVC website enquiry",
          _template: "table",
          _replyto: email || undefined,
          _honey: String(form.get("_honey") || ""),
        }),
      });

      if (!response.ok) throw new Error("Unable to submit enquiry");

      formElement.reset();
      window.gtag?.("event", "conversion", {
        send_to: "AW-18404665721/urK2CKbKqJQdEPnSg8hE",
      });
      setStatus("Thank you. Your enquiry has been sent to the Gulf uPVC team.");
    } catch {
      setStatus("We could not send your enquiry. Please call or WhatsApp us for immediate assistance.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-[#090b0c]">
      <div className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <img src={architecturalImages.cta} alt="Premium modern architecture with glass doors" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="max-w-4xl font-display text-5xl font-semibold leading-none text-bone sm:text-7xl">
            Let’s Build Something Exceptional
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bone/80">
            Looking for premium doors, windows, glass or architectural solutions? Talk to our team about your project.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${contact.phone}`} className="rounded-sm bg-gold px-7 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-black">Call Now</a>
            <a href={whatsappUrl} className="rounded-sm border border-bone/25 px-7 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-bone hover:border-gold hover:text-gold">WhatsApp</a>
            <a href="#quote" className="rounded-sm bg-bone px-7 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-black">Get a Quote</a>
          </div>
        </div>
      </div>
      <div id="quote" className="surface-grid px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact us" title="Request a quote" copy="Share a few details and the Gulf uPVC team can guide you on the right doors, windows, glass or cladding solution." />
            <div className="mt-10 grid gap-4">
              {contactHighlights.map(({ label, value, icon: Icon, href }) => (
                <a key={label} href={href} className="premium-panel flex items-center gap-4 border border-gold/20 p-5 transition hover:border-gold/60">
                  <Icon className="text-gold" />
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.22em] text-gold">{label}</span>
                    <span className="text-bone">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={onSubmit} className="premium-panel border border-gold/25 p-6 sm:p-8">
            <input name="_honey" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-bone">Name<input name="name" required className="mt-2 w-full border border-bone/15 bg-black px-4 py-3 text-bone outline-none focus:border-gold" /></label>
              <label className="text-sm font-bold text-bone">Phone<input name="phone" required type="tel" className="mt-2 w-full border border-bone/15 bg-black px-4 py-3 text-bone outline-none focus:border-gold" /></label>
              <label className="text-sm font-bold text-bone">Email<input name="email" type="email" className="mt-2 w-full border border-bone/15 bg-black px-4 py-3 text-bone outline-none focus:border-gold" /></label>
              <label className="text-sm font-bold text-bone">Project Type
                <select name="projectType" required className="mt-2 w-full border border-bone/15 bg-black px-4 py-3 text-bone outline-none focus:border-gold">
                  <option value="">Select a solution</option>
                  <option>uPVC Windows & Doors</option>
                  <option>Glass Facade</option>
                  <option>Aluminium Sliding Systems</option>
                  <option>Glass Works</option>
                  <option>Partitions</option>
                  <option>ACP Cladding</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-bold text-bone sm:col-span-2">Location<input name="location" className="mt-2 w-full border border-bone/15 bg-black px-4 py-3 text-bone outline-none focus:border-gold" /></label>
              <label className="text-sm font-bold text-bone sm:col-span-2">Message<textarea name="message" rows={5} className="mt-2 w-full resize-none border border-bone/15 bg-black px-4 py-3 text-bone outline-none focus:border-gold" /></label>
            </div>
            <button disabled={isSubmitting} className="mt-6 w-full rounded-sm bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? "Sending Enquiry..." : "Request a Quote"}
            </button>
            {status && <p className="mt-4 text-sm text-gold" role="status">{status}</p>}
          </form>
        </div>
      </div>
      <div id="location" className="surface-strata border-y border-gold/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Location</p>
            <h3 className="mt-3 font-display text-4xl text-bone">{contact.company}</h3>
            <p className="mt-4 leading-8 text-mist">{contact.addressLines.join(", ")}</p>
            <p className="mt-3 text-mist">GSTIN: {contact.gstin}</p>
            <p className="mt-3 text-mist">Email: {contact.email}</p>
          </div>
          <div className="premium-panel min-h-[300px] overflow-hidden border border-gold/25">
            <iframe
              title="Gulf uPVC & Allied Industries location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
              className="h-full min-h-[300px] w-full border-0 grayscale-[20%]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
