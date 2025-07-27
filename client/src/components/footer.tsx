import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">Zneya</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Crafting exceptional luxury jewelry for over three decades. Each piece tells a story of elegance, 
              precision, and timeless beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-champagne rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <i className="fab fa-instagram text-charcoal"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-champagne rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <i className="fab fa-facebook text-charcoal"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-champagne rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <i className="fab fa-twitter text-charcoal"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-light-green mb-4">Collections</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/rings"><span className="hover:text-light-green cursor-pointer transition-colors">Rings</span></Link></li>
              <li><Link href="/bracelets"><span className="hover:text-light-green cursor-pointer transition-colors">Bracelets</span></Link></li>
              <li><Link href="/necklaces"><span className="hover:text-light-green cursor-pointer transition-colors">Necklaces</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-light-green mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/contact"><span className="hover:text-light-green cursor-pointer transition-colors">Contact</span></Link></li>
              <li><Link href="/about"><span className="hover:text-light-green cursor-pointer transition-colors">About Us</span></Link></li>
              <li><span className="hover:text-light-green cursor-pointer transition-colors">Size Guide</span></li>
              <li><span className="hover:text-light-green cursor-pointer transition-colors">Care Instructions</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zneya Luxury Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
