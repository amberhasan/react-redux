import React, { useState } from "react";
import { Product } from "./products.slice";

const ProductForm: React.FC = () => {
  const [{ title, price, id }, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue; //if you change this to return prev, then as you change the values, nothing would show as changed bc React would return prev, not the new stuff
    });
  return (
    <>
      <h2>Add Game To The Store</h2>
      <form>
        <input
          type="text"
          placeholder="Game title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Id"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <button>Add price</button>
      </form>
    </>
  );
};

export default ProductForm;
