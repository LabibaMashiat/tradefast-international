import { Helmet } from "react-helmet";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import ExploreTfbButton from "../../TrueFashionBd/ExploreTfbButton/ExploreTfbButton/ExploreTfbButton";
import BentexCollections from "../BentexCollections/BentexCollections/BentexCollections";

const Gallery = () => {
    return (
        <div>
             <Helmet>
        <title>Gallery | Trade Fast International</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
      <div>
         <Navbar></Navbar>
      <ExploreTfbButton></ExploreTfbButton>
       <BentexCollections></BentexCollections>
      </div>
        </div>
    );
};

export default Gallery;