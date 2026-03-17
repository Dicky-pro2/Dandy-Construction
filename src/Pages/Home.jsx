import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImage from "../assets/construction-hero.jpg";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";
import Counter from "../components/Counter";

// Services Data
const services = [
  { id: 1, icon: "🏗️", title: "Building Construction", description: "High-quality residential and commercial buildings built to last." },
  { id: 2, icon: "🔨", title: "Renovation & Remodeling", description: "Transform your existing space into something new and beautiful." },
  { id: 3, icon: "📋", title: "Project Management", description: "We manage every aspect of your project — on time and within budget." },
  { id: 4, icon: "⚙️", title: "Civil Engineering", description: "Expert solutions for infrastructure and large-scale civil projects." },
];

// Projects Data
const projects = [
  {
    id: 1,
    title: "Luxury Residential Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800",
  },
  {
    id: 3,
    title: "Road Infrastructure Project",
    category: "Civil",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
];

// Features Data
const features = [
  { id: 1, icon: "🏆", title: "Award Winning", description: "Recognized for excellence in construction and project delivery." },
  { id: 2, icon: "👷", title: "Expert Team", description: "Highly skilled engineers, architects, and construction professionals." },
  { id: 3, icon: "⏱️", title: "On-Time Delivery", description: "We respect your time and always deliver projects on schedule." },
  { id: 4, icon: "💰", title: "Affordable Pricing", description: "Premium quality construction at competitive and transparent prices." },
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Emeka Okafor",
    role: "Homeowner, Lagos",
    message: "Dandy Construction built my dream home exactly as I envisioned. The quality and attention to detail was outstanding!",
    avatar: "👨🏾",
  },
  {
    id: 2,
    name: "Ngozi Adeyemi",
    role: "Business Owner, Abuja",
    message: "They handled our office renovation professionally and finished ahead of schedule. Highly recommend them!",
    avatar: "👩🏾",
  },
  {
    id: 3,
    name: "Chidi Nwosu",
    role: "Property Developer, PH",
    message: "Excellent project management and communication throughout. Our apartment complex turned out better than expected.",
    avatar: "👨🏾‍💼",
  },
];

const Home = () => {
  return (
    <PageTransition>

    <div>
      <Navbar />

      {/* Hero Section — Centered Text with Background */}
      <AnimatedSection direction="up">
      <section
        className="relative w-full min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl mx-auto text-white">
          <span className="text-gold-400 font-semibold uppercase tracking-widest text-sm">
            Welcome to Dandy Construction
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            Building Your <span className="text-gold-400">Vision</span> Into Reality
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            A trusted construction company delivering durable, high-quality
            residential and commercial structures across Nigeria.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/projects"
              className="bg-gold-500 text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-6">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center text-white">
            <div>
              <h3 className="text-3xl font-bold text-gold-400">150+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gold-400">10+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gold-400">98%</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection direction="up">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              What We <span className="text-gold-500">Offer</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              From construction to civil engineering, we provide end-to-end solutions for all your building needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="bg-gold-500 text-white px-7 py-3 rounded font-semibold hover:opacity-90 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Projects Preview */}
      <AnimatedSection direction="up">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Featured <span className="text-gold-500">Projects</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              A glimpse of our finest work across Nigeria.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 bg-white">
                  <span className="text-xs font-semibold text-gold-500">{project.category}</span>
                  <h3 className="text-lg font-bold mt-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="border-2 border-gold-500 text-gold-500 px-7 py-3 rounded font-semibold hover:bg-gold-500 hover:text-white transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection direction="up">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Why Choose <span className="text-gold-500">Us</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              We don't just build structures — we build trust, relationships, and lasting legacies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
</AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection direction="up">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              What Clients <span className="text-gold-500">Say</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Don't just take our word for it — hear from our happy clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300"
              >
                <p className="text-gray-600 text-sm mb-6 italic">"{t.message}"</p>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{t.avatar}</div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection direction="up">
      <section className="bg-gold-500 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Contact us today and let's turn your construction dream into reality.
        </p>
        <Link
          to="/contact"
          className="bg-white text-gold-500 font-bold px-8 py-3 rounded hover:opacity-90 transition"
        >
          Get a Free Quote
        </Link>
      </section>
      </AnimatedSection>
    </div>
    </PageTransition>
  );
};

export default Home;