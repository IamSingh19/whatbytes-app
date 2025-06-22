import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from '@/types/Product';
import ProductDetails from '@/components/ProductDetails';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const allProducts: Product[] = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 199,
    image: '/headphones.png',
    category: 'Electronics',
    brand: 'Sony',
    rating: 4,
  },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (typeof id === 'string') {
      const numericId = parseInt(id);
      const found = allProducts.find(p => p.id === numericId);
      setProduct(found ?? null);
    }
  }, [id]);

  if (!product) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-10 px-4 gap-6">
        <div className="w-full lg:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={320}
            className="w-full h-80 object-cover rounded"
          />
        </div>
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
}
