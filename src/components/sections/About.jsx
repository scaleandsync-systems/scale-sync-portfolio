import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const coreCapabilities = [
    "SaaS Architecture",
    "Backend API Engineering",
    "Secure Payment Integration",
    "Document Automation Systems",
    "Cloud Deployment",
    "Scalable Database Design",
  ];

  const techStack = [
    "Next.js",
    "React",
    "Django",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Stripe",
  ];

  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Us
          </h2>

          {/* Intro */}
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
            We are a systems-focused engineering studio building scalable digital
            platforms, backend architectures, and automation-driven solutions.
            Our approach combines clean engineering practices with long-term
            scalability to deliver production-ready systems for modern businesses.
          </p>

          {/* Capabilities + Stack */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* Core Capabilities */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <h3 className="text-2xl font-semibold mb-6">
                Core Capabilities
              </h3>

              <ul className="space-y-4 text-gray-300">
                {coreCapabilities.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <h3 className="text-2xl font-semibold mb-6">
                Technology Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Engineering Philosophy */}
          <div className="mt-20 p-10 rounded-2xl border border-blue-500/20 bg-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Engineering Philosophy
            </h3>

            <p className="text-gray-400 max-w-4xl mx-auto text-center leading-relaxed">
              We prioritize maintainability, security, and long-term scalability
              over short-term shortcuts. Every system is designed with production
              deployment, monitoring, and future growth in mind. From secure
              payment integrations to automated document processing pipelines,
              we build solutions that are reliable, efficient, and built to scale.
            </p>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
