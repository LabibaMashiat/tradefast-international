import { Leaf, Handshake, Recycle } from "lucide-react";

const Commitment = () => {
  const commitments = [
    {
      icon: <Handshake className="w-10 h-10 text-green-600" />,
      title: "Ethical Sourcing Practices",
      description: "We prioritize fair labor, safe working conditions, and responsible partnerships throughout our sourcing process.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: "Eco-Conscious Materials",
      description: "We work with suppliers that offer sustainable fabrics and trims, reducing the reliance on harmful resources.",
    },
    {
      icon: <Recycle className="w-10 h-10 text-green-600" />,
      title: "Reducing Environmental Impact",
      description: "We continuously optimize our processes to minimize waste, carbon footprint, and water usage across the supply chain.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-green-50">
      <div className="max-w-5xl mx-auto text-center mb-10">
         <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4"> Sustainability Commitment</h2>
  <hr />
        <p className="mt-3 text-green-800 text-lg max-w-3xl mx-auto">
          Sustainability isn’t just a buzzword to us—it’s a core value that shapes how we work, what we create, and who we partner with.
          At TFI, we believe in doing business responsibly, with deep respect for people and the planet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {commitments.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-green-900">{item.title}</h3>
            <p className="mt-2 text-green-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commitment;
