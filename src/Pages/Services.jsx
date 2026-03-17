import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const services = [
  {
    id: 1,
    icon: "🏗️",
    title: "Building Construction",
    description:
      "We deliver high-quality residential and commercial buildings using modern techniques and durable materials that stand the test of time.",
  },
  {
    id: 2,
    icon: "🔨",
    title: "Renovation & Remodeling",
    description:
      "Transform your existing space into something new and beautiful. We handle full renovations, interior remodeling, and structural upgrades.",
  },
  {
    id: 3,
    icon: "📋",
    title: "Project Management",
    description:
      "From planning to completion, we manage every aspect of your construction project — on time, within budget, and to the highest standard.",
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Civil Engineering",
    description:
      "Our engineering team provides expert solutions for infrastructure, roads, drainage systems, and large-scale civil construction projects.",
  },
];

const Services = () => {
  return (
    <div>
      <Navbar />

      {/* Page Header */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold">
          Our <span className="text-gold-500">Services</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We offer a wide range of construction services tailored to meet your
          needs — from groundbreaking to finishing touches.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm flex-grow">{service.description}</p>

              {/* Link */}
              <Link
                to="/contact"
                className="mt-6 inline-block bg-gold-500 text-white px-5 py-2 rounded hover:opacity-90 transition text-sm font-medium"
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-500 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-8 text-lg">
          Let's work together to bring your construction vision to life.
        </p>
        <Link
          to="/contact"
          className="bg-white text-gold-500 font-bold px-8 py-3 rounded hover:opacity-90 transition"
        >
          Contact Us Today
        </Link>
      </section>

    </div>
  );
};

export default Services;