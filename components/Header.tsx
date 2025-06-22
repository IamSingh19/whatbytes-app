import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';


export default function Header() {
  const { cartCount } = useCart();
  return (
    <header className="bg-blue-800 text-white py-3 px-4 sm:px-6">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold shrink-0">Logo</div>

        <div className="flex-1 mx-4 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-10 py-2 rounded-md bg-white text-black text-sm focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        <div className="shrink-0">
         <Link href="/cart">
  <button className="relative bg-blue-950 px-5 py-2.5 rounded-md text-white flex items-center text-base hover:bg-blue-900">
    <ShoppingCart className="mr-2" size={16} />
    <span className="text-sm">Cart</span>
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {cartCount}
      </span>
    )}
  </button>
</Link>

        </div>
      </div>
    </header>
  );
}
