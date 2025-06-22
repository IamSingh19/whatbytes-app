import React, { useState, useEffect } from 'react';
import { Product } from '@/types/Product';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const images = product.images?.length ? product.images : [product.image];
  const [index, setIndex] = useState(0);
  const [showQuantityPrompt, setShowQuantityPrompt] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleConfirmAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
    });
    setQuantity(1);
    setShowQuantityPrompt(false);
  };

  // Special layout for Smartphone
  if (product.title === 'Smartphone') {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 w-full max-w-3xl mx-auto items-center">
        <div className="w-full h-[200px] flex items-center justify-center overflow-hidden relative rounded group">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={img}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
              />
            </div>
          ))}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                ‹
              </button>
              <button
                onClick={() => setIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col justify-between text-left w-full">
          <div>
            <h3 className="text-xl font-bold text-black mb-1">{product.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. This smartphone features modern performance, display and battery life.
            </p>
            <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
            <div className="flex items-center space-x-1 text-yellow-400 mb-2">
              {Array.from({ length: product.rating || 0 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          {!showQuantityPrompt ? (
            <button
              onClick={() => setShowQuantityPrompt(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-col items-start mt-3 gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 bg-gray-300 text-black rounded"
                >
                  −
                </button>
                <span className="px-4 text-black">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 bg-gray-300 text-black rounded"
                >
                  +
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleConfirmAddToCart}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Confirm
                </button>
                <button
                  onClick={() => {
                    setQuantity(1);
                    setShowQuantityPrompt(false);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default layout for other products
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center group w-full max-w-sm mx-auto">
      <div className="w-full h-[200px] flex items-center justify-center overflow-hidden relative rounded group">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={img}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
            />
          </div>
        ))}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              ›
            </button>
          </>
        )}
      </div>

      <h3 className="text-base font-semibold text-black mt-4">{product.title}</h3>

      <div className="flex items-center justify-center text-yellow-400 mb-1">
        {Array.from({ length: product.rating || 0 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      <p className="text-sm text-gray-600 mb-2">${product.price}</p>

      {!showQuantityPrompt ? (
        <button
          onClick={() => setShowQuantityPrompt(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex flex-col items-center mt-2 gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 bg-gray-300 text-black rounded"
            >
              −
            </button>
            <span className="px-4 text-black">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 bg-gray-300 text-black rounded"
            >
              +
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleConfirmAddToCart}
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                setQuantity(1);
                setShowQuantityPrompt(false);
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
