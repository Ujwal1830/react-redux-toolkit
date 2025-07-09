import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productSlice'

const ProductsView = () => {

    const { products, loading, error } = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <div>
            <h1 className='heading'>All Products</h1>
            <div>
                {
                    loading && <div>
                        <h2 className='text-2xl text-center'>Loading...</h2>
                    </div>
                }
                {
                    error && <div>
                        <h2 className='text-2xl text-center text-red-500'>{error}</h2>
                    </div>
                }
                {
                    products.length > 0 && (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {products.map((product) => (
                                <div key={product.id} className='bg-white p-4 rounded-lg shadow-md'>
                                    <img src={product.image} alt={product.title} className='w-full max-h-fit object-cover mb-4' />
                                    <h3 className='text-lg font-semibold'>{product.title}</h3>
                                    <p className='text-gray-600'>${product.price}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductsView
