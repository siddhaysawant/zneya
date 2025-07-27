import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function HeroSection() {
  const [, setLocation] = useLocation();

  const handleExploreClick = () => {
    const collectionsSection = document.querySelector('#collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)',
        }}
      ></div>
      <div className="absolute inset-0 overlay-gradient"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-playfair text-5xl md:text-7xl font-bold mb-6"
        >
          Exquisite Craftsmanship
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 font-light"
        >
          Where luxury meets artistry. Discover our collection of handcrafted gold, silver, and platinum jewelry.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button 
            onClick={handleExploreClick}
            className="bg-light-green hover:bg-cream text-charcoal px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Collection
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
