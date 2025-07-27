import { motion } from 'framer-motion';
import { Gem, Heart, Infinity } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Luxury jewelry craftsmanship workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Our Heritage</h1>
              <p className="text-xl max-w-2xl mx-auto">Three decades of excellence in luxury jewelry craftsmanship</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          <div className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-playfair text-4xl font-bold text-charcoal mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 1990 by master jeweler Alessandro Zneya, our atelier began as a small workshop in the heart of Milan's jewelry district. 
                  What started as a passion for creating unique, handcrafted pieces has evolved into a globally recognized luxury brand.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Each piece in our collection reflects our commitment to exceptional craftsmanship, using only the finest materials 
                  sourced from around the world. Our artisans combine traditional techniques passed down through generations with 
                  contemporary design sensibilities.
                </p>
                <p className="text-lg text-gray-700">
                  Today, Zneya represents the pinnacle of luxury jewelry, worn by discerning clients who appreciate the perfect 
                  marriage of artistry and excellence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                  alt="Master jeweler crafting jewelry" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-champagne/20 rounded-full"></div>
              </motion.div>
            </div>
          </div>

          {/* Values */}
          <div className="py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide every aspect of our craft</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gem className="text-white" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Excellence</h3>
                <p className="text-gray-700">We pursue perfection in every detail, from the initial design concept to the final polish.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Craftsmanship</h3>
                <p className="text-gray-700">Our master artisans bring decades of experience to create truly exceptional pieces.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center mx-auto mb-6">
                  <Infinity className="text-white" size={32} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Timelessness</h3>
                <p className="text-gray-700">We create pieces that transcend trends, designed to be treasured for generations.</p>
              </motion.div>
            </div>
          </div>

          {/* Team */}
          <div className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">Master Artisans</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Meet the skilled craftspeople behind every Zneya creation</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Alessandro Zneya, Founder" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Alessandro Zneya</h3>
                <p className="text-champagne font-semibold mb-3">Founder & Master Jeweler</p>
                <p className="text-gray-700 text-sm">With over 35 years of experience, Alessandro's vision continues to guide our creative direction.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b29c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Isabella Romano, Head Designer" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Isabella Romano</h3>
                <p className="text-champagne font-semibold mb-3">Head Designer</p>
                <p className="text-gray-700 text-sm">Isabella brings contemporary flair to our timeless designs, balancing innovation with tradition.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Marco Benedetti, Master Craftsman" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Marco Benedetti</h3>
                <p className="text-champagne font-semibold mb-3">Master Craftsman</p>
                <p className="text-gray-700 text-sm">Marco's meticulous attention to detail ensures every piece meets our exacting standards.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
