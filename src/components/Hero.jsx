import heroImage from "../assets/construction-hero.jpg";

const Hero = () => {
  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="bg-black/60 w-full h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Building Excellence <br />
            <span className="text-gold">
              One Project at a Time
            </span>
          </h1>

          <p className="max-w-xl text-lg mb-8">
            Dandy Construction delivers reliable residential and
            commercial construction services with quality and
            professionalism.
          </p>

          <div className="flex gap-4">

            <button className="bg-gold-500 px-6 py-3 rounded text-white font-semibold hover:opacity-90">
              View Projects
            </button>

            <button className="border-2 border-gold-500 px-6 py-3 rounded hover:bg-gold-500 hover:text-white transition">
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;