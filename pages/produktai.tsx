import React, { useState } from 'react';

const ProductComparison = ({ products }) => {
  const [comparedProduct, setComparedProduct] = useState(null);

  const handleCompare = product => {
    setComparedProduct(product);
  };

  const handleClear = () => {
    setComparedProduct(null);
  };

  return (
    <div>
      <h2>Product Comparison</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <button onClick={() => handleCompare(product)}>Compare</button>
          </div>
        ))}
      </div>
      {comparedProduct && (
        <div className="compared-product">
          <h3>{comparedProduct.name}</h3>
          <img src={comparedProduct.image} alt={comparedProduct.name} />
          <p>{comparedProduct.description}</p>
          <button onClick={handleClear}>Clear Comparison</button>
        </div>
      )}
    </div>
  );
};

export default ProductComparison;