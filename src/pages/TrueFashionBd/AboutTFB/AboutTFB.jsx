import React from 'react';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import CoreServices from './CoreServices/CoreServices';
import WovenFabrics from './WovenFabrics/WovenFabrics';
import MarketReach from './MarketReach/MarketReach';
import OurAssociates from './OurAssociates/OurAssociates';
import WhatSetsUsApart from './WhatSetsUsApart/WhatSetsUsApart';
import VisionMission from './VissionMission/VisiionMission';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';
import Banner from './Banner/Banner';

const AboutTFB = () => {
    return (
        <div>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <CoreServices></CoreServices>
            <WhatWeOffer></WhatWeOffer>
            <WovenFabrics></WovenFabrics>
            <MarketReach></MarketReach>
            <OurAssociates></OurAssociates>
            <WhatSetsUsApart></WhatSetsUsApart>
            <VisionMission></VisionMission>

        </div>
    );
};

export default AboutTFB;