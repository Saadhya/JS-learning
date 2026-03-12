import React, { useEffect, useState } from 'react'

const useFetchProducts=(url, options={})=>{
    const [products, setProducts] = useState([]);
    const [error, setError]=useState('')
    const [loading, setLoading]=useState(true);

    
    useEffect(()=>{
        const controller= new AbortController();
        

        const fetchProducts=async ()=>{
          setLoading(true);
            try{
                const res= await fetch(url, {...options, signal: controller.signal});

                if(!res.ok){
                    throw new Error('Failed to fetch products', {cause: res.status});
                }
                const data =await res.json();
                setProducts(data);
                setError(null)

            }
            catch(error){
                if(error.name !== 'AbortError'){
                    setError(error.message);
                }
            }
            finally{
                setLoading(false);
            }
        }

        fetchProducts()

        return ()=> controller.abort();
        
    },[url, JSON.stringify(options)])
    return { products, error, loading};

}
const App=()=>{
    const {products, error, loading}=useFetchProducts('https://fakestoreapi.com/products');

    return (
        <div>
            <h1>Custom Hook</h1>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {products && <p>Products: {products.length}</p>}
        </div>
    )


}
export default App;
