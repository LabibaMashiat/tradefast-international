
import FabricsShirtDenimPant from './FabricsShirtDenimPant/FabricsShirtDenimPant';
import FabricsPocketingLiningTrims from './FabricsPocketingLiningTrims/FabricsPocketingTrims';
import FabricsPreconstructedWaistband from './FabricsPreconstructedWaistband/FabricsPreconstructedWaistband';
import FabricsElasticWovenTapes from './FabricsElasticWovenTapes/FabricsElasticWovenTapes';
import FabricsLining from './FabricsLining/FabricsLining';
import FabricsMetalAccessories from './FabricsMetalAccessories/FabricsMetalAccessories';
import FabricsBandrollInterlining from './FabricsBandrollInterlining/FabricsBandrollInterlining';
import FabricsSilkScarf from './FabricsSilkScarf/FabricsSilkScarf';

const ProductCategories = () => {
    return (
        <div className='py-8'>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
    Our Products
  </h1>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-justify px-4">Explore our wide range of premium products, crafted with precision to deliver exceptional quality and performance. At Trade Fast International, we combine innovation with trusted materials to meet the evolving needs of the textile and garment industry. Our commitment to excellence has made us a reliable partner for industry leaders worldwide.</p>
       
          
           <div>
             <FabricsSilkScarf></FabricsSilkScarf>
            <FabricsShirtDenimPant></FabricsShirtDenimPant>
            <FabricsPocketingLiningTrims></FabricsPocketingLiningTrims>
            <FabricsPreconstructedWaistband></FabricsPreconstructedWaistband>
            <FabricsElasticWovenTapes></FabricsElasticWovenTapes>
            <FabricsLining></FabricsLining>
            <FabricsMetalAccessories></FabricsMetalAccessories>
            <FabricsBandrollInterlining></FabricsBandrollInterlining>
           </div>
        </div>
    );
};

export default ProductCategories;