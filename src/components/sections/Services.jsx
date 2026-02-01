import { RevealOnScroll } from "../RevealOnScroll";

export const Services = () => {
  const services = [
    {
      title: "SaaS Development",
      description:
        "End-to-end SaaS platforms built for scalability, security, and long-term growth.",
      features: [
        "Multi-tenant architecture",
        "Authentication & role systems",
        "Subscription & billing integration",
        "Scalable backend infrastructure",
      ],
    },
    {
      title: "Backend API Engineering",
      description:
        "Robust, secure, and high-performance APIs powering modern applications.",
      features: [
        "REST & modular architecture",
        "Authentication & authorization",
        "Database optimization",
        "Production-ready deployment",
      ],
    },
    {
      title: "Internal Tools & Automation",
      description:
        "Custom internal dashboards and automation systems that improve team efficiency.",
      features: [
        "Admin dashboards",
        "Workflow automation",
        "Data processing systems",
        "AI integrations",
      ],
    },
    {
      title: "High-Performance Websites",
      description:
        "Clean, fast, and conversion-focused websites built with performance in mind.",
      features: [
        "Modern UI/UX",
        "Responsive design",
        "SEO-ready structure",
        "Optimized performance",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <RevealOnScroll>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">

                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-block bg-blue-500 text-white py-2 px-5 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  Get Started
                </a>

              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="text-center mt-24">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Let’s Build Something Scalable.
            </h3>

            <a
              href="#contact"
              className="border border-blue-500 text-blue-600 dark:text-blue-400 py-3 px-8 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Schedule a Consultation
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};
