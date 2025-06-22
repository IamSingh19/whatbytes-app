import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/Product';

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

 const handleAddToCart = () => {
  addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity,
  });
};

  return (
    <div className="w-full lg:w-1/2 px-6 py-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-xl text-blue-600 font-semibold mb-4">${product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-medium">Category:</span> {product.category}
      </p>

      <div className="mb-4 flex items-center">
        <label htmlFor="quantity" className="mr-3 font-medium text-sm">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="w-16 px-2 py-1 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-medium transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
