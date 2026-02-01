import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      name: "Little Art Studio",
      type: "E-Commerce Platform",
      description:
        "Full-stack e-commerce system with secure payment integration, order lifecycle management, and performance-optimized frontend.",
      stack: ["Next.js", "React", "Django", "PostgreSQL", "Stripe"],
      highlights: [
        "Encrypted payment gateway integration",
        "Admin inventory & order dashboard",
        "Webhook-based payment verification",
        "SEO & performance optimization",
      ],
    },
    {
      name: "Bank Statement Parser",
      type: "Financial Automation System",
      description:
        "Automated extraction and structuring of transaction data from bank statements for analytics workflows.",
      stack: ["React", "Django", "Python", "Pandas"],
      highlights: [
        "Secure document upload",
        "Transaction normalization pipeline",
        "Categorization engine",
        "Structured JSON export",
      ],
    },
    {
      name: "PDF → JSON Engine",
      type: "Document Processing Tool",
      description:
        "Schema-based PDF parsing system built for scalable backend document workflows.",
      stack: ["React", "Django", "Python"],
      highlights: [
        "Custom field mapping",
        "Batch processing",
        "API-ready output",
        "Secure backend architecture",
      ],
    },
    {
      name: "Invoice / Receipt Extractor",
      type: "Invoice Automation Tool",
      description:
        "OCR-powered extraction system converting invoices and receipts into structured financial data.",
      stack: ["React", "Django", "Python", "OCR"],
      highlights: [
        "Line-item detection",
        "Tax recognition logic",
        "Secure document storage",
        "JSON export pipeline",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <RevealOnScroll>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Work & Case Studies
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
            Production-ready systems focused on secure payments, automation,
            backend architecture, and scalable digital platforms.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <RevealOnScroll key={project.name}>
              <div className="h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">

                <p className="text-blue-400 text-xs uppercase tracking-widest mb-3">
                  {project.type}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  {project.name}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
