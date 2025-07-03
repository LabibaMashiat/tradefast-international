import React from 'react';
import KnitWearGallery from './KnitWearGallery/KnitWearGallery';
import WovenGarments from './WovenGarmentsGallery/WovenGarmentsGallery';
import DenimGallery from './DenimGallery/DenimGallery';
import SweaterGallery from './SweaterGallery/SweaterGallery';
import BoxerAndSwimmerGallery from './BoxerAndSwimmerGallery/BoxerAndSwimmerGallery';

const ProductsGallery = () => {
    return (
        <div>
            <KnitWearGallery></KnitWearGallery>
            <WovenGarments></WovenGarments>
            <DenimGallery></DenimGallery>
            <SweaterGallery></SweaterGallery>
            <BoxerAndSwimmerGallery></BoxerAndSwimmerGallery>
        </div>
    );
};

export default ProductsGallery;