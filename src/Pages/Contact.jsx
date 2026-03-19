import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_vimkhfr",
        "template_7p06gj9",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "sd0_qQE068xtXR0py1GqL",
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div>
      <Navbar />

      {/* Page Header */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Contact <span className="text-gold-500">Us</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Have a project in mind? Reach out to us and let's build something
          great together.
        </p>
      </section>

      {/* Form + Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-10">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600">
                Thank you for reaching out. We'll get back to you within 24
                hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 bg-gold-500 text-white px-6 py-3 rounded hover:opacity-90 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-gray-600"
                >
                  <option value="">Select a service</option>
                  <option value="Building Construction">
                    Building Construction
                  </option>
                  <option value="Renovation & Remodeling">
                    Renovation & Remodeling
                  </option>
                  <option value="Project Management">Project Management</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gold-500 text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">+234 800 123 4567</p>
                  <p className="text-gray-600 text-sm">+234 900 987 6543</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm break-all">
                    info@dandyconstruction.com
                  </p>
                  <p className="text-gray-600 text-sm break-all">
                    projects@dandyconstruction.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-bold text-gray-800">Office Address</h4>
                  <p className="text-gray-600 text-sm">
                    12 Construction Avenue, GRA Phase 2,
                    <br />
                    Port Harcourt, Rivers State, Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">🕐</div>
                <div>
                  <h4 className="font-bold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600 text-sm">
                    Monday – Friday: 8:00am – 6:00pm
                  </p>
                  <p className="text-gray-600 text-sm">
                    Saturday: 9:00am – 3:00pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90 transition text-sm font-medium"
              >
                <span>📘</span> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded hover:opacity-90 transition text-sm font-medium"
              >
                <span>📸</span> Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded hover:opacity-90 transition text-sm font-medium"
              >
                <span>🐦</span> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="w-full h-64 sm:h-80 md:h-96 px-4 sm:px-0">
        <iframe
          title="Dandy Construction Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.537!2d7.0134!3d4.8156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnNTYuMiJOIDfCsDAwJzQ4LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-500 py-12 md:py-16 text-center text-white px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let's Build Together
        </h2>
        <p className="mb-8 text-base md:text-lg max-w-xl mx-auto">
          Whether it's a small renovation or a large-scale project, we're ready
          to help.
        </p>
        <Link
          to="/projects"
          className="bg-white text-gold-500 font-bold px-8 py-3 rounded hover:opacity-90 transition"
        >
          View Our Projects
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
