import React, { UseState } from 'react';
import ProductItem from './ProductItem';

const HomeBody = ({ productList, setCount, count }) => {
  const handleAddToCart = (item) => {
    // setCount((prev) => [...prev, item]);
    // console.log(item);
    setCount([...count, item]);
  };
  const removeFromCart = (item) => {
    let hardCopy = [...count];
    hardCopy = hardCopy.filter((productItem) => productItem.id !== item.id);
    setCount(hardCopy);
  };
  return (
    <div className="flex flex-row items-center gap-4 flex-wrap">
      {/* <button onClick={plus}>plus</button> */}
      <ProductItem />
      {productList.map((productItem) => {
        return (
          <ProductItem
            index={productItem.id}
            onClick={() => handleAddToCart(productItem)}
            onClickRemove={() => removeFromCart(productItem)}
            name={productItem.name}
            price={productItem.price}
            discount={productItem.discount}
          />
        );
      })}
    </div>
  );
};

export default HomeBody;
