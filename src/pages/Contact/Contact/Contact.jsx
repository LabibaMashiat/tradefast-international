import { Helmet } from "react-helmet";

import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import ExploreTfbButton from "../../TrueFashionBd/ExploreTfbButton/ExploreTfbButton/ExploreTfbButton";
import ContactInfo from "../ContactInfo/ContactInfo";

const Contact = () => {
    return (
        <div>
           <div>
              <Helmet>
        <title>Contact | Trade Fast International</title>
        <meta name="description" content="Get in touch with TradeFast International" />
      </Helmet>
           </div>
      <div>
        <Navbar></Navbar>
        <ExploreTfbButton></ExploreTfbButton>
        <ContactInfo></ContactInfo>
        
      </div>
        </div>
    );
};

export default Contact;