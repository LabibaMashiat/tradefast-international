
import { Outlet } from 'react-router-dom'; // Add this import
import Footer from '../pages/Shared/Footer/Footer/Footer';
import FaviconHandler from '../FaviconHandler/FaviconHandler';


const Main = () => {
    return (
        <div>

            
            <FaviconHandler></FaviconHandler>
           <div className='pt-[96px] sm:pt-[96px] md:pt-[128px] lg:pt-[128px] bg-gray-200'>
            <Outlet></Outlet>
           </div>
          
            <Footer></Footer>
        </div>
    );
};

export default Main;