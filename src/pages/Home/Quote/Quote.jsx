import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Quote = () => {
    return (
        <div className='max-w-full h-30 bg-blue-100 flex'>
           <h1> <FontAwesomeIcon  className=" pl-6 pt-4 pb-2 text-white opacity-80" icon={faQuoteLeft} size="3x"  /></h1>
           <div className='m-auto p-5'>
            <h2 className="text-center sm:text-sm md:text-2xl">“Accessories are the details like an ornament to make the item ready for presentation.”</h2>
           
           </div>
        </div>
    );
};

export default Quote;