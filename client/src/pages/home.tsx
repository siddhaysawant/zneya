import { motion } from 'framer-motion';
import HeroSection from '@/components/hero-section';
import CollectionCard from '@/components/collection-card';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Collections */}
      <section id="collections" className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-green mb-4">
              Our Signature Collections
            </h2>
            <p className="text-xl text-light-green max-w-2xl mx-auto">
              Each piece tells a story of elegance, precision, and timeless beauty
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <CollectionCard
                title="Rings"
                description="From engagement to eternity, discover rings that capture your most precious moments"
                image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                href="/rings"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CollectionCard
                title="Bracelets"
                description="Adorn your wrists with our stunning collection of silver and gold bracelets"
                image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                href="/bracelets"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CollectionCard
                title="Necklaces"
                description="Grace your neckline with our exquisite platinum and gold necklaces"
                image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                href="/necklaces"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Occasions Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-green mb-4">
              Jewelry for Special Occasions
            </h2>
            <p className="text-xl text-light-green/80 max-w-2xl mx-auto">
              Celebrate life's most precious moments with our specially curated collections
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Festival Collection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-light-green/10 flex items-center justify-center group-hover:bg-light-green/20 transition-all duration-300">
                  <svg className="w-16 h-16 text-light-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-light-green mb-4">Festival Collection</h3>
              <p className="text-light-green/80 mb-6 leading-relaxed">
                Sparkle through celebrations with our handcrafted festival jewelry. 
                Perfect for Diwali, Christmas, and every special celebration.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light-green text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-light-green/90 transition-all duration-300"
              >
                Explore Festival Jewelry
              </motion.button>
            </motion.div>
            
            {/* Marriage Collection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-light-green/10 flex items-center justify-center group-hover:bg-light-green/20 transition-all duration-300">
                  <svg className="w-16 h-16 text-light-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-light-green mb-4">Marriage Collection</h3>
              <p className="text-light-green/80 mb-6 leading-relaxed">
                Begin your forever journey with our stunning bridal collection. 
                Engagement rings, wedding bands, and timeless sets.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light-green text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-light-green/90 transition-all duration-300"
              >
                View Bridal Collection
              </motion.button>
            </motion.div>
            
            {/* Gifting Collection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-light-green/10 flex items-center justify-center group-hover:bg-light-green/20 transition-all duration-300">
                  <svg className="w-16 h-16 text-light-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-light-green mb-4">Gifting Collection</h3>
              <p className="text-light-green/80 mb-6 leading-relaxed">
                Express your love with perfect gifts. Beautifully crafted pieces 
                for birthdays, anniversaries, and special moments.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light-green text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-light-green/90 transition-all duration-300"
              >
                Shop Gift Sets
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-charcoal text-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Crafted with Passion</h2>
              <p className="text-xl mb-6 text-gray-300">
                For over three decades, Zneya has been synonymous with exceptional craftsmanship and timeless elegance. 
                Each piece in our collection is meticulously handcrafted by master artisans who share our commitment to perfection.
              </p>
              <p className="text-lg mb-8 text-gray-400">
                From the initial design concept to the final polish, every step of our process is guided by an unwavering 
                dedication to quality and attention to detail that sets us apart in the world of luxury jewelry.
              </p>
              <button className="bg-light-green hover:bg-cream text-charcoal px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Our Story
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Luxury jewelry craftsmanship process" 
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-champagne rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
