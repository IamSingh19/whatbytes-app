import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-start pt-10 px-4">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh] w-full">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-500">Add products to see them here.</p>
          </div>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <ul className="space-y-6 w-full max-w-4xl">
            {cartItems.map((item) => (
              <li key={item.id} className="w-full bg-white p-4 rounded shadow">
                <div className="flex items-center gap-4 bg-gray-100 p-4 rounded w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="px-2 bg-red-300 rounded"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      <span className="text-black text-2xl">{item.quantity}</span>
                      <button
                        className="px-2 bg-red-300 rounded"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-blue-800 font-semibold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="text-right mt-8 w-full max-w-4xl">
            <h2 className="text-xl text-black font-semibold">Total: ${total.toFixed(2)}</h2>
            <button
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
