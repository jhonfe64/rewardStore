import {headers,  allProductsUrl} from '../keys';
import ProductCard from './ProductCard';
import Loader from './Loader';
//Import personalized hook
import useFetch from '../hooks/useFetch';


const Results = () => {

    const [data] = useFetch(allProductsUrl, headers);

    return (
        <div className=''>
            <div className="container d-flex mt-5">
                {
                    data.length > 0 ? <ProductCard products={data} />: <Loader />
                }
            </div>
        </div>
    );
}

export default Results;

