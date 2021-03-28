import React from 'react';

function Product (props) {
    return (
        <div>
            <h3>
                Name: {props.product.name}
            </h3>
            <h3>
                Price: {props.product.price}
            </h3>
            <h3>
                Description: {props.product.description}
            </h3>
            <hr/>
        </div>
    )
} export default Product