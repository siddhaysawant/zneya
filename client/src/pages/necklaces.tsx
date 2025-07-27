import { motion } from 'framer-motion';
import JewelryItemCard from '@/components/jewelry-item';
import { getJewelryByCategory } from '@/lib/jewelry-data';

export default function Necklaces() {
  const necklaces = getJewelryByCategory('necklaces');

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
              Necklaces Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sophisticated necklaces that embody grace and elegance, perfect for any occasion
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {necklaces.map((necklace, index) => (
              <motion.div
                key={necklace.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <JewelryItemCard item={necklace} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
