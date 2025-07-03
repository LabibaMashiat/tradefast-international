import { Helmet } from "react-helmet";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import ExploreTfbButton from "../../TrueFashionBd/ExploreTfbButton/ExploreTfbButton/ExploreTfbButton";
import Banner from "../Banner/Banner";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import OurCoreValues from "../OurCoreValues/OurCoreValues";
import OurApproaches from "../OurApproaches/OurApproaches";

const About = () => {
    return (
        <div>
             <Helmet>
        <title>About | Trade Fast International</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
      <div>
        <Navbar></Navbar>
      <ExploreTfbButton></ExploreTfbButton>
      <Banner></Banner>
      <AboutUsSection></AboutUsSection>
      <OurCoreValues></OurCoreValues>
      <OurApproaches></OurApproaches>
      </div>
        </div>
    );
};

export default About;