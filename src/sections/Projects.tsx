import { useState } from "react";
import { Modal } from "../components/Modal";
import { SectionHeading } from "../components/SectionHeading";
import { projectImages } from "../data/site";

export function Projects() {
  const [active, setActive] = useState<(typeof projectImages)[number] | null>(null);

  return (
    <section id="projects" className="surface-strata px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected projects"
          title="Product and application gallery"
          copy="Representative imagery for residential, commercial, office, facade, sliding and cladding applications. Actual Gulf uPVC project photos can replace these slots as they are supplied."
        />
        <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-3">
          {projectImages.map((project, index) => (
            <button
              key={project.title}
              onClick={() => setActive(project)}
              className={`group relative overflow-hidden border border-gold/20 text-left ${index === 0 || index === 3 ? "md:row-span-2" : ""}`}
            >
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-85" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">{project.category}</p>
                <h3 className="mt-2 font-display text-3xl text-bone">{project.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
      {active && (
        <Modal title={active.title} onClose={() => setActive(null)}>
          <img src={active.image} alt={active.title} className="max-h-[76vh] w-full object-cover" />
          <div className="p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">{active.category}</p>
            <h3 className="mt-2 font-display text-4xl text-bone">{active.title}</h3>
          </div>
        </Modal>
      )}
    </section>
  );
}
