import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Success:", result.text);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Start a Project
          </h2>

          <p className="text-gray-400 text-center mb-16">
            Tell us about your requirements and we’ll respond within 24 hours.
          </p>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm"
          >
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Full Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="Email Address"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            />

            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              placeholder="Tell us about your project..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-500 text-white py-3 rounded font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Inquiry"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center">
                Message sent successfully. We’ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

        </div>
      </RevealOnScroll>
    </section>
  );
};
