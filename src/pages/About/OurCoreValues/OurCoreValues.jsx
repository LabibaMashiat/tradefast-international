import {
  ShieldCheck,
  Lightbulb,
  Leaf,
  Clock
} from "lucide-react";

const OurCoreValues = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Integrity in Every Transaction",
      description:
        "We build trust through honesty, transparency, and ethical business practices—every step of the way.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: "Innovation in Design and Sourcing",
      description:
        "We stay ahead by embracing new ideas, materials, and technologies that elevate quality and efficiency.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary" />,
      title: "Sustainability at the Heart of Operations",
      description:
        "From ethical sourcing to eco-conscious practices, we’re committed to minimizing our environmental impact.",
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Reliability in Timelines and Supply",
      description:
        "Clients count on us for consistent quality and on-time delivery—no matter the scale or complexity.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-base-100">
      <div className="max-w-6xl mx-auto text-center mb-10">
         <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Our Core Values</h2>
  <hr />
        <p className="mt-2 text-gray-600 text-lg">
          At Trade Fast International, our core values define how we operate and who we are.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {values.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCoreValues;
