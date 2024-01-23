import React, { useState } from 'react';
import ProductBrandSelection from '../ProductBrandSelection/ProductBrandSelection';
import ProductTable from '../ProductTable/ProductTable';
import './FilterableProductTable.css';

const productArray = [
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        ],
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description:
            "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
    },
];

const FilterableProductTable = () => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const handleBrandSelection = (brand) => {
        setSelectedBrand(brand);
    };

    const filteredProducts = selectedBrand ? productArray.filter((product) => product.brand === selectedBrand) : productArray; 
    console.log(filteredProducts );
    return ( 
        <div className='filter-table'>
            <h2>Part 3</h2>
            <div>
                <ProductBrandSelection className='filter' selectedBrand={selectedBrand} selectBrand={handleBrandSelection} />
        
                <table className='table'>
                    <thead>
                        <th>brand</th>
                        <th>title</th>
                        <th>price</th>
                        <th>images</th>
                    </thead>
                    {
                        filteredProducts.map((product, i) => (
                            <tr key={i}>
                                <td className='product__brand'>{product.brand}</td>
                                <td className='product__title'>{product.title}</td>
                                <td className='product__price'>${product.price}</td>
                                <td className='product__images'><img src={product.images[0]} alt='img'></img></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    );
};

export default FilterableProductTable;