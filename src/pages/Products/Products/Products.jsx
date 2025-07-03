import { Helmet } from "react-helmet";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import ExploreTfbButton from "../../TrueFashionBd/ExploreTfbButton/ExploreTfbButton/ExploreTfbButton";
import ProductCategories from "../ProductCategories/ProductCategories";

const Products = () => {
    return (
        <div>
 <Helmet>
        <title>Products | Trade Fast International</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
     <div>
       <Navbar></Navbar>
      <ExploreTfbButton></ExploreTfbButton>
      <ProductCategories></ProductCategories>
     </div>
        </div>
    );
};

export default Products;