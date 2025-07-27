import { motion } from 'framer-motion';
import JewelryItemCard from '@/components/jewelry-item';
import { getJewelryByCategory } from '@/lib/jewelry-data';

export default function Rings() {
  const rings = getJewelryByCategory('rings');

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-charcoal mb-4">
              Rings Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exquisite collection of handcrafted rings, from elegant engagement rings to stunning statement pieces
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {rings.map((ring, index) => (
              <motion.div
                key={ring.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <JewelryItemCard item={ring} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
