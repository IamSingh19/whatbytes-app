import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8 text-sm">
        
        {/* Filters Column */}
        <div>
          <h3 className="text-base font-semibold mb-3">Filters</h3>
          <ul className="space-y-1">
            <li className="flex gap-3">
  <span className="font-semibold">All</span>
  <span className="text-gray-300 font-semibold">Electronics</span>
</li>
          </ul>
          <p className="mt-4  text-gray-300 font-semibold">© 2024 American</p>
        </div>

        {/* About Us Column */}
        <div>
          <h3 className="text-base font-semibold mb-3">About Us</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h3 className="text-base font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-1">
            <FaFacebookF className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-blue-300 cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-pink-400 cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
}
