import textile_img1 from "../../../assets/images/Trade Fast International/Home/Textile Work Process/Textile-1.webp";
import textile_img2 from "../../../assets/images/Trade Fast International/Home/Textile Work Process/textile.webp";

const TextileWorkProcess = () => {
  return (
    <div className="my-10 max-w-full">
      <div className="mx-auto my-6">
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4"> The Work Process of Textile</h2>
  <hr />
       
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {/* Card 1 */}
        <div className="card bg-base-100 w-full p-6 md:w-1/2 shadow-xl rounded-2xl">
          <figure>
            <img src={textile_img2} alt="Loom setting" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Loom Setting with Beam</h2>
            <p>
              Efficient fabric production starts with accurate loom settings. Adjusting the backrest
              and dropper height controls warp tension, which directly impacts fabric strength and
              smooth weaving. These fine-tuned adjustments help prevent yarn breakage and ensure
              consistent fabric quality across the run.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-full p-6 md:w-1/2 shadow-xl rounded-2xl">
          <figure>
            <img src={textile_img1} alt="Quality monitoring" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Quality Monitoring</h2>
            <p>
              Advanced yarn monitoring systems are now key in modern textile processes. These systems
              detect inconsistencies in thickness or tension in real time, reducing downtime and waste.
              By maintaining stable yarn quality, the weaving process becomes more reliable and
              cost-effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextileWorkProcess;
