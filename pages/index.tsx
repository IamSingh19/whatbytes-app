import React, { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Product } from '@/types/Product';
import { useCart } from '@/context/CartContext';


const allProducts: Product[] = [
  {
    id: 1,
    title: 'Running Shoes',
    price: 99,
    image: 'https://assets.ajio.com/medias/sys_master/root/20250512/vWOx/6821a5997a6cd4182f287c35/-473Wx593H-450165894-blue-MODEL.jpg',
    images: ['https://assets.ajio.com/medias/sys_master/root/20250512/vWOx/6821a5997a6cd4182f287c35/-473Wx593H-450165894-blue-MODEL.jpg', 'https://assets.ajio.com/medias/sys_master/root/20250512/TWNk/6821af6f55340d4b4f2daf26/-473Wx593H-450165894-blue-MODEL3.jpg', 'https://assets.ajio.com/medias/sys_master/root/20250512/mgsq/6821a9567a6cd4182f2891f7/-473Wx593H-450165894-blue-MODEL4.jpg'],
    category: 'Clothing',
    brand: 'Nike',
    rating: 2,
  },
  {
    id: 2,
    title: 'Wireless Headphones',
    price: 199,
    image: 'https://m.media-amazon.com/images/I/71wiTgpfJRL._SY355_.jpg',
    images: ['https://m.media-amazon.com/images/I/71wiTgpfJRL._SY355_.jpg', 'https://m.media-amazon.com/images/I/61BThmjq++L._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61cyo4bU-1L._SL1500_.jpg'],
    category: 'Electronics',
    brand: 'Sony',
    rating: 5,
  },
  {
    id: 3,
    title: 'Backpack',
    price: 129,
    image: 'https://m.media-amazon.com/images/I/810s53kR8tL._SY606_.jpg',
    images: ['https://m.media-amazon.com/images/I/810s53kR8tL._SY606_.jpg', 'https://m.media-amazon.com/images/I/815VZl7KpvL._SX679_.jpg', 'https://m.media-amazon.com/images/I/91GKxAB6VXL._SY606_.jpg'],
    category: 'Clothing',
    brand: 'Nike',
    rating: 4,
  },
  {
    id: 4,
    title: 'Smartwatch',
    price: 249,
    image: 'https://m.media-amazon.com/images/I/31+Eql2oQcL._SY300_SX300_.jpg',
    images: ['https://m.media-amazon.com/images/I/31+Eql2oQcL._SY300_SX300_.jpg', 'https://m.media-amazon.com/images/I/61UkZzCjPML._SX425_.jpg', 'https://m.media-amazon.com/images/I/61c8a3MUe5L._SX425_.jpg'],
    category: 'Electronics',
    brand: 'Apple',
    rating: 4,
  },
  {
    id: 5,
    title: 'Sunglasses',
    price: 149,
    image: 'https://m.media-amazon.com/images/I/41qXct35fYL._SX679_.jpg',
    images: ['https://m.media-amazon.com/images/I/41qXct35fYL._SX679_.jpg', 'https://m.media-amazon.com/images/I/41H9puYORCL._SX679_.jpg', 'https://m.media-amazon.com/images/I/41Ax3z6N4gL._SX679_.jpg'],
    category: 'Clothing',
    brand: 'Nike',
    rating: 5,
  },
  {
    id: 6,
    title: 'Digital Camera',
    price: 499,
    image: 'https://m.media-amazon.com/images/I/41R6Kya4EdL._SX300_SY300_QL70_FMwebp_.jpg',
    images: ['https://m.media-amazon.com/images/I/41R6Kya4EdL._SX300_SY300_QL70_FMwebp_.jpg', 'https://m.media-amazon.com/images/I/71Ov2aMeWLL._SY450_.jpg', 'https://m.media-amazon.com/images/I/61JLLH0ZItL._SY355_.jpg'],
    category: 'Electronics',
    brand: 'Sony',
    rating: 4,
  },
  {
    id: 7,
    title: 'T-shirt',
    price: 29,
    image: 'https://assets.ajio.com/medias/sys_master/root/20250512/O0O0/6821008855340d4b4f2b7ff4/-473Wx593H-701565603-white-MODEL.jpg',
    images: ['https://assets.ajio.com/medias/sys_master/root/20250512/O0O0/6821008855340d4b4f2b7ff4/-473Wx593H-701565603-white-MODEL.jpg', 'https://assets.ajio.com/medias/sys_master/root/20250512/euor/6821008855340d4b4f2b7f78/-473Wx593H-701565603-white-MODEL2.jpg', 'https://assets.ajio.com/medias/sys_master/root/20250512/ODsa/6821008855340d4b4f2b7f7c/-473Wx593H-701565603-white-MODEL3.jpg'],
    category: 'Clothing',
    brand: 'Nike',
    rating: 4,
  },
  {
  id: 8,
  title: 'Smartphone',
  price: 699,
  image: 'https://m.media-amazon.com/images/I/41p8ZRc8apL._SX300_SY300_QL70_FMwebp_.jpg',
  images: ['https://m.media-amazon.com/images/I/41p8ZRc8apL._SX300_SY300_QL70_FMwebp_.jpg', 'https://imgs.search.brave.com/RzlCKO3Kuyp7zOlZFHkbwj5C_o2RquUSvlSaJf69YS8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90LW1v/YmlsZS5zY2VuZTcu/Y29tL2lzL2ltYWdl/L1RtdXNwcm9kL1Nh/bXN1bmctR2FsYXh5/LVMyNS1JY3libHVl/LWZyb250aW1hZ2U.jpeg', 'https://m.media-amazon.com/images/I/41p8ZRc8apL._SX300_SY300_QL70_FMwebp_.jpg'],
  category: 'Electronics',
  brand: 'Samsung',
  rating: 5,
},
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [brandPrice, setBrandPrice] = useState<number>(1000);
  const {} = useCart();

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const inCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const inBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const inPrice = product.price <= maxPrice && product.price <= brandPrice;
      return inCategory && inBrand && inPrice;
    });
  }, [selectedCategory, selectedBrand, maxPrice, brandPrice]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 bg-blue-50">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          brandPrice={brandPrice}
          setBrandPrice={setBrandPrice}
        />
      <section className="w-full max-w-7xl mx-auto px-6 pt-8 pb-6 flex-1">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide">
    Product Listing
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProducts.length > 0 ? (
      filteredProducts.map(product => (
        <div
          key={product.id}
          className={`w-full ${product.title === 'Smartphone' ? 'col-span-2' : ''}`}
        >
          <ProductCard product={product} />
        </div>
      ))
    ) : (
      <p className="col-span-full text-center text-gray-600">
        No products found.
      </p>
    )}
  </div>
</section>
</main> 
      <Footer />
    </div>
  );
}
