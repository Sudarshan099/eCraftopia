import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      <button className="bg-blue-500 text-white rounded mt-4 px-4 py-2">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
