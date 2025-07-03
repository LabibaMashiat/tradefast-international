import React from 'react';
import BentexElastics from '../BentexElastics/BentexElastics';
import BentexButtons from '../BentexButtons/BentexButtons';
import BentexMetalButtons from '../BentexMetalButtons/BentexMetalButtons';
import BentexDrawcord from '../BentexDrawcord/BentexDrawcord';
import BentexZipper from '../BentexZipper/BentexZipper';
import BentexLaceCotton from '../BentexLaceCotton/BentexLaceCotton';
import BentexLace22One from '../BentexLace22One/BentexLace22One';
import BentexLace22Two from '../BentexLace22Two/BentexLace22Two';
import BentexLace22Three from '../BentexLace22Three/BentexLace22Three';
import BentexMetalCollections from '../BentexMetalCollections/BentexMetalCollections';
import BentexCatalogues from '../BentexCatalogues/BentexCatalogues';

const BentexCollections = () => {
    return (
        <div>
            <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
    Our Collections
  </h1>
  <p className=" text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-justify px-4">
    Trade Fast International proudly sources a wide range of premium collections from renowned manufacturers —  
    esteemed international suppliers known for quality textile accessories including buttons, elastics, metal accessories, laces, zippers, and catalogues.  
    Explore our gallery showcasing diverse product categories, reflecting the partnership that brings global sourcing excellence directly to you.
  </p>
</section>
            <section>
                <BentexCatalogues></BentexCatalogues>
            <BentexMetalCollections></BentexMetalCollections>
            <BentexElastics></BentexElastics>
            <BentexButtons></BentexButtons>
            <BentexMetalButtons></BentexMetalButtons>
            <BentexDrawcord></BentexDrawcord>
            <BentexZipper></BentexZipper>
            <BentexLaceCotton></BentexLaceCotton>
            <BentexLace22One></BentexLace22One>
            <BentexLace22Two></BentexLace22Two>
            <BentexLace22Three></BentexLace22Three>
            </section>
        </div>
    );
};

export default BentexCollections;