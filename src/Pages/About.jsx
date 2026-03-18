import Navbar from "../components/Navbar";
import aboutImage from "../assets/construction-hero.jpg";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Page Header */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold">
          About <span className="text-gold">Dandy Construction</span>
        </h1>

        <p className="mt-4 text-gray-600">
          Building reliable structures with quality craftsmanship.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <img
          src={aboutImage}
          alt="construction"
          className="rounded-lg shadow-lg"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

          <p className="text-gray-600 mb-4">
            Dandy Construction is a trusted construction company dedicated to
            delivering durable and high-quality residential and commercial
            buildings. Our team combines engineering expertise, modern
            technology, and skilled craftsmanship to create structures that
            stand the test of time.
          </p>

          <p className="text-gray-600 mb-4">
            With years of industry experience, we specialize in construction,
            renovation, project management, and civil engineering services. Our
            goal is to transform ideas into functional and beautiful structures.
          </p>

          <button className="mt-4 bg-gold text-white px-6 py-3 rounded hover:opacity-90">
            Our Projects
          </button>
        </div>
      </section>

      {/* Mission & Vision Section */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Mission */}

          <div className="bg-white p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gold">Our Mission</h3>

            <p className="text-gray-600">
              Our mission is to deliver high-quality construction services that
              combine durability, innovation, and professional craftsmanship. We
              aim to build structures that exceed client expectations and
              contribute positively to communities.
            </p>
          </div>

          {/* Vision */}

          <div className="bg-white p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gold">Our Vision</h3>

            <p className="text-gray-600">
              Our vision is to become a leading construction company known for
              excellence, reliability, and modern building solutions across
              residential, commercial, and infrastructure projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
