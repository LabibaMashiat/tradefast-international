import { Helmet } from "react-helmet";
import ExploreTfbButton from "../../TrueFashionBd/ExploreTfbButton/ExploreTfbButton/ExploreTfbButton";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Quote from "../Quote/Quote";
import FabricsAndAccessories from "../FabricsAndAccessories/FabricsAndAccessories";
import TextileWorkProcess from "../TextileWorkProcess/TextileWorkProcess";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import Commitment from "../Commitment/Commitment";
import GlobalReach from "../GlobalReach/GlobalReach";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
    return (

       <div>
         <div>
             <Helmet>
        <title>Home | Trade Fast International</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
           <div>
            <Navbar></Navbar>
            <ExploreTfbButton></ExploreTfbButton>
            <Banner></Banner>
            <Quote></Quote>
            <FabricsAndAccessories></FabricsAndAccessories>
            <WhatWeOffer></WhatWeOffer>
            <WhyChoose></WhyChoose>
            <TextileWorkProcess></TextileWorkProcess>
            <Commitment></Commitment>
            <GlobalReach></GlobalReach>
           </div>
        </div>
       </div>
    );
};

export default Home;