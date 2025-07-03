import GlobalImage from "../../../assets/images/Trade Fast International/Home/Global/global.avif";

const GlobalReach = () => {
  
  return (
    <div className="max-w-full my-6">
        <div className="relative w-full h-auto flex items-center justify-end overflow-hidden">
      {/* Background image layer with opacity */}
    
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{ backgroundImage: `url(${GlobalImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-black p-6 md:ml-auto md:w-1/2 ">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Global Reach
          </h2>
        <div className="w-auto  h-0.5 bg-purple-950 rounded-full text-ju"></div>
        <p className="text-justify">
            At Trade Fast International, our impact goes far beyond borders. As a China-based leading supplier of fabrics and garment accessories, we have proudly built a robust international network that connects manufacturers, fashion labels, and sourcing teams across the globe.We proudly serve clients across Asia, Europe, and the Americas—including key markets and our global presence enables us to meet diverse sourcing needs with speed and reliability.With strategically located logistics partners and a responsive export team, we ensure:
        </p>
        <div className="mb-4">
          <ul class="list-disc list-inside text-base leading-relaxed text-justify">
  <li>Efficient international shipping with streamlined customs handling</li>
  <li>Language and time zone adaptability for smooth communication</li>
  <li>Reliable delivery timelines that global clients can depend on</li>
  <li>Tailored solutions for diverse design needs</li>
  <li>Reliable, ethical, and innovative</li>
  <li>Consistent quality control regardless of destination</li>
  
</ul>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default GlobalReach;
