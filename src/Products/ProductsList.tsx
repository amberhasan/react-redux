import React from 'react'

interface ProductsListProps {

}

const initialProducts = [
    {title: 'Escape From Tarkov', price: 60, id: 'eft'},
    {title: 'Hunt: Showdown', price: 70, id: 'hunt'},
    {title: 'Hell Let Loose', price: 55, id: 'hil'},
]
const ProductsList: React.FC<ProductsListProps> = ({}) => {
    return (
        <div>
            <label>Games List</label>
            {initialProducts.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
            </div>)}
        </div>
    );
}

export default ProductsList