
import BoxerAndSwimWears from './BoxerAndSwimWears/BoxerAndSwimWears';
import Denims from './Denims/Denims';
import Knitwear from './KnitWear/KnitWear';
import Sweaters from './Sweaters/Sweaters';
import WovenGarments from './WovenGarments/WovenGarments';

const ProductsCategory = () => {
    return (
        <div>
            <div>
               <h2 className="sm:text-3xl md:text-4xl font-semibold mb-4 mt-6 text-center">Our Products</h2>
            <hr />
            </div>
            <div>
            <Knitwear></Knitwear>
            <WovenGarments></WovenGarments>
            <Sweaters></Sweaters>
            <Denims></Denims>
            <BoxerAndSwimWears></BoxerAndSwimWears>
        </div>
        </div>
    );
};

export default ProductsCategory;