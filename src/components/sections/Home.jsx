import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, we are Scale & Sync Systems.
          </h1>

          <p className="text-gray-700 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            We help startups and businesses build and scale reliable digital systems.
            From clean, high-performance websites to backend APIs, SaaS platforms,
            and efficient internal tools, we focus on practical engineering that is
            secure, maintainable, and built to grow with your product and users.
          </p>

          <div className="flex justify-center space-x-4">

            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500 text-blue-600 dark:text-blue-400 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Us
            </a>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
