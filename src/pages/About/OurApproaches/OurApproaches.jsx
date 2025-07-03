import { Handshake, Layers, CheckCircle } from "lucide-react";

const OurApproaches = () => {
  const points = [
    {
      icon: <Handshake className="w-10 h-10 text-primary" />,
      title: "Understanding Your Brand Vision",
      description:
        "We take time to understand your brand story and creative goals. Whether bold or classic, we align our support with your design identity and market needs.",
    },
    {
      icon: <Layers className="w-10 h-10 text-primary" />,
      title: "Guidance on Materials & Innovation",
      description:
        "We help you choose the right fabrics, trims, and sustainable options with practical, forward-thinking advice that balances creativity and functionality.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-primary" />,
      title: "Consistent Quality & Timely Delivery",
      description:
        "With strict quality checks and strong logistics, we ensure every order meets your expectations and arrives on schedule—maximizing efficiency and value.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-base-100">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Our Approach</h2>
  <hr />
        <p className="mt-2 text-gray-600 text-lg">
          At TFI, we believe in a hands-on, collaborative approach focused on partnership and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurApproaches;
