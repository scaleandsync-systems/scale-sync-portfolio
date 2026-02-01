import { RevealOnScroll } from "../RevealOnScroll";

export const Process = () => {
  const steps = [
    {
      title: "Discovery",
      description:
        "We analyze business goals, technical constraints, and product requirements to define a clear execution roadmap.",
    },
    {
      title: "Architecture & Planning",
      description:
        "System architecture is designed with scalability, security, and long-term maintainability in mind.",
    },
    {
      title: "Development",
      description:
        "Clean, production-ready code is built using modern frameworks and best engineering practices.",
    },
    {
      title: "Testing & Security",
      description:
        "Performance validation, secure payment handling, data validation, and backend testing ensure reliability.",
    },
    {
      title: "Deployment & Scale",
      description:
        "CI/CD pipelines, production deployment, monitoring, and scalability planning complete the system lifecycle.",
    },
  ];

  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-5xl mx-auto relative">

        {/* Heading */}
        <RevealOnScroll>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Our Process
          </h2>
        </RevealOnScroll>

        {/* Fixed Vertical Line (Corrected Position) */}
        <div className="absolute left-1/2 top-40 bottom-0 w-[2px] -translate-x-1/2 bg-white/10 hidden md:block"></div>

        <div className="space-y-24 relative">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title}>
              <div
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Step Card */}
                <div className="md:w-1/2 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition">

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
