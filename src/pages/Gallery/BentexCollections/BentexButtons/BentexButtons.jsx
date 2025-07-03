

// Static imports for Bentex Buttons
import button1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-Buttons-1/BTX Buttons (1)_page-0001.jpg";
import button2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-Buttons-1/BTX Buttons (1)_page-0002.jpg";
import button3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-Buttons-1/BTX Buttons (1)_page-0003.jpg";
import button4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-Buttons-1/BTX Buttons (1)_page-0004.jpg";
import button5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-Buttons-1/BTX Buttons (1)_page-0005.jpg";

const BentexButtons = () => {
  const imageList = [
    button1, button2, button3, button4, button5,
    
  ];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">Button Collection</h2>
      <hr className="mb-6"/>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 w-max">
          {imageList.map((img, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[300px] h-[200px] md:h-[250px] rounded-xl overflow-hidden shadow-md bg-base-100 hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`Bentex Button ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexButtons;
