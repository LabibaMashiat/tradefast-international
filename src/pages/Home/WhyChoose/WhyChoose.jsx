
import {
 
  
  FaHandsHelping,
  FaLayerGroup,
  FaCogs,
  FaPalette,
  FaBalanceScale,
  FaFlask
} from "react-icons/fa";

const WhyChoose = () => {
  const points = [
   
    {
      icon: <FaHandsHelping className="text-primary text-2xl" />,
      title: "Global Trust",
      desc: "Preferred sourcing partner for global fashion brands."
    },
    {
      icon: <FaLayerGroup className="text-primary text-2xl" />,
      title: "Extensive Inventory",
      desc: "Broad range of premium-quality materials."
    },
    {
      icon: <FaPalette className="text-primary text-2xl" />,
      title: "Tailored Design Solutions",
      desc: "Customization to fit your creative vision."
    },
    {
      icon: <FaBalanceScale className="text-primary text-2xl" />,
      title: "Ethical & Reliable",
      desc: "Commitment to ethical sourcing and dependable delivery."
    },
    {
      icon: <FaCogs className="text-primary text-2xl" />,
      title: "Production Flexibility",
      desc: "Supports both small and large scale orders."
    },
    {
      icon: <FaFlask className="text-primary text-2xl" />,
      title: "Sampling & Support",
      desc: "Technical guidance and product sampling support."
    }
  ];

  return (
    <section className="bg-base-100 py-16 px-6 md:px-20 lg:px-32">
      <div className="text-center mb-12">
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Why Choose TFI</h2>
  <hr />
        <p className="text-neutral text-lg max-w-3xl mx-auto">
          With decades of industry experience, we focus on reliable sourcing, customization, and consistent quality—backed by professional service tailored to your manufacturing needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {points.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-neutral">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
