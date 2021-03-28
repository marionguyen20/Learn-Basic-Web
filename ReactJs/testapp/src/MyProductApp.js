import React from 'react';
import productsData from './vschoolProduct';
import Product from './Product';

function App () {

    const productComponent = productsData.map (
        product => <Product key = {product.id} product = {product} />
    )

    return (
        <div>
            {productComponent}
        </div>
    )
} export default App