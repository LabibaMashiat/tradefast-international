import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import ProductsCategory from "./ProductsCategory/ProductsCategory";
import ExploreProducts from "../ExploreProducts/ExploreProducts";

const ProductsTFB = () => {
    return (
        <div>
             <Helmet>
        <title>Products | True Fashion BD</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
      <div>
       <Banner></Banner>
       <ExploreProducts></ExploreProducts>
       <ProductsCategory></ProductsCategory>
      </div>
        </div>
    );
};

export default ProductsTFB;