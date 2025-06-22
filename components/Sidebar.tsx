interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  selectedBrand: string;
  setSelectedBrand: (val: string) => void;
  brandPrice: number;
  setBrandPrice: (val: number) => void;
}

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  selectedBrand,
  setSelectedBrand,
  brandPrice,
  setBrandPrice,
}: SidebarProps) {
  return (
    <aside className="w-64 p-4 hidden md:block">
      {/* Blue Filters Box */}
      <div className="bg-blue-800 text-white p-4 rounded mb-4 border border-white">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>

        {/* Category Filter */}
        <p className="font-medium mb-1">Category</p>
        {['All', 'Electronics', 'Clothing', 'Home'].map(cat => (
          <label key={cat} className="block mb-1">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}

        {/* Price Slider */}
        <p className="font-medium mt-3 mb-1">Price</p>
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          value={maxPrice}
          onChange={e => setMaxPrice(Math.max(0, Number(e.target.value)))}
          className="w-full"
        />
        <div className="flex justify-between text-xs">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>

      {/*  Brand Filter Box */}
      <div className="bg-white text-black border border-white rounded p-4">
        <h3 className="text-base font-semibold mb-2">Brand</h3>
        {['All', 'Apple', 'Nike', 'Sony', 'Samsung'].map(brand => (
          <label key={brand} className="block mb-1">
            <input
              type="radio"
              name="brand"
              value={brand}
              checked={selectedBrand === brand}
              onChange={() => setSelectedBrand(brand)}
              className="mr-2"
            />
            {brand}
          </label>
        ))}

        {/* Brand Price Input */}
        <label className="block text-sm font-medium mt-2">Price</label>
        <input
          type="number"
          min={0}
          value={brandPrice}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setBrandPrice(isNaN(value) ? 0 : Math.max(0, value));
          }}
          className="w-full px-2 py-1 border rounded mt-1"
        />
      </div>
    </aside>
  );
}
