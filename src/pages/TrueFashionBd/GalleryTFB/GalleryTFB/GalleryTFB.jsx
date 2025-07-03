import { Helmet } from "react-helmet";
import ProductsGallery from "../ProductsGallery/ProductsGallery";
import TextileMachineryGallery from "../TextileMachineryGallery/TextileMachineryGallery/TextileMachineryGallery";

const GalleryTFB = () => {
    return (
        <div>
    <Helmet>
        <title>Gallery | True Fashion BD</title>
        <meta name="description" content="Get in touch with TradeFast International" />
    </Helmet>
    <div>
        <ProductsGallery></ProductsGallery>
        <TextileMachineryGallery></TextileMachineryGallery>
    </div>
        </div>
    );
};

export default GalleryTFB;