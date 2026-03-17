import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const projects = [
  {
    id: 1,
    title: "Luxury Residential Villa",
    category: "Residential",
    location: "Lagos, Nigeria",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    description: "A stunning 5-bedroom luxury villa with modern architecture and premium finishes.",
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "Abuja, Nigeria",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800",
    description: "A 10-storey office complex built to international standards with smart building features.",
  },
  {
    id: 3,
    title: "Road Infrastructure Project",
    category: "Civil",
    location: "Port Harcourt, Nigeria",
    year: "2024",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
    description: "Major road construction and drainage system upgrade spanning 12km.",
  },
  {
    id: 4,
    title: "Shopping Mall Renovation",
    category: "Renovation",
    location: "Lagos, Nigeria",
    year: "2023",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800",
    description: "Complete interior and structural renovation of a 3-floor shopping mall.",
  },
  {
    id: 5,
    title: "Apartment Complex",
    category: "Residential",
    location: "Enugu, Nigeria",
    year: "2022",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    description: "A modern 20-unit apartment complex with landscaped surroundings and parking.",
  },
  {
    id: 6,
    title: "Industrial Warehouse",
    category: "Commercial",
    location: "Kano, Nigeria",
    year: "2023",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    description: "Large-scale industrial warehouse facility built for a logistics company.",
  },
  {
    id: 7,
    title: "School Building Project",
    category: "Civil",
    location: "Ibadan, Nigeria",
    year: "2022",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
    description: "Construction of a modern 3-block school complex with labs and sports facilities.",
  },
  {
    id: 8,
    title: "Hotel Remodeling",
    category: "Renovation",
    location: "Abuja, Nigeria",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    description: "Full remodeling of a 4-star hotel including lobby, rooms, and rooftop lounge.",
  },
];

const Projects = () => {
  return (
    <div>
      <Navbar />

      {/* Page Header */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold">
          Our <span className="text-gold-500">Projects</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          A showcase of our completed and ongoing construction projects across
          Nigeria — built with quality, precision, and pride.
        </p>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="text-xs font-semibold bg-gold-100 text-gold-600 px-3 py-1 rounded-full">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold mt-3 mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Meta */}
                <div className="flex justify-between text-xs text-gray-400">
                  <span>📍 {project.location}</span>
                  <span>📅 {project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-500 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="mb-8 text-lg">
          Let's build something great together. Reach out to us today.
        </p>
        <Link
          to="/contact"
          className="bg-white text-gold-500 font-bold px-8 py-3 rounded hover:opacity-90 transition"
        >
          Start Your Project
        </Link>
      </section>

    </div>
  );
};

export default Projects;