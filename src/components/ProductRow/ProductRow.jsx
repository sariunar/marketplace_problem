import React from 'react';
import './ProductRow.css';

const product = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
}

const ProductRow = () => {

  return (
    <div>
        <h2>Part 1</h2>
        <tr className='product'>
            <td className='product__brand'>{product.brand}</td>
            <td className='product__title'>{product.title}</td>
            <td className='product__price'>${product.price}</td>
            <td className='product__images'><img src={product.images[0]} alt='img'></img></td>
        </tr>
    </div>
  );
};

export default ProductRow;

/*<td>{product.images.map((image) => (<img src={image} alt='img' />))}</td>*/