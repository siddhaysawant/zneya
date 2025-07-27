import { useParams } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getJewelryById } from '@/lib/jewelry-data';
import { useJewelryStore } from '@/store/jewelry-store';
import { useLocation } from 'wouter';
import { ArrowLeft, Heart, Shield, Truck, Gift } from 'lucide-react';
import { useState } from 'react';

export default function JewelryDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const setSelectedItem = useJewelryStore((state) => state.setSelectedItem);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const item = getJewelryById(id || '');

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Jewelry item not found</p>
      </div>
    );
  }

  const handleBuyNow = () => {
    setSelectedItem(item);
    setLocation('/payment');
  };

  const images = [item.image, item.image, item.image, item.image]; // Mock gallery

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => window.history.back()}
            className="flex items-center text-charcoal hover:text-champagne mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Collection
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={images[selectedImage]} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-champagne' : 'border-transparent hover:border-champagne'
                    }`}
                  >
                    <img src={image} alt={`${item.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="font-playfair text-4xl font-bold text-charcoal mb-4">{item.name}</h1>
                <p className="text-3xl font-bold text-champagne mb-6">{item.price}</p>
                
                <div className="space-y-4">
                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-charcoal mb-2">Specifications</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Metal:</span>
                          <span className="ml-2 font-semibold">{item.metal}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Stones:</span>
                          <span className="ml-2 font-semibold">{item.stones}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-charcoal mb-2">Description</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description} This exquisite piece exemplifies our commitment to exceptional craftsmanship and timeless design. 
                        Meticulously handcrafted by our master artisans using only the finest materials.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-charcoal mb-2">Care Instructions</h3>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Store in provided jewelry box when not wearing</li>
                        <li>• Clean gently with soft cloth</li>
                        <li>• Avoid exposure to chemicals and perfumes</li>
                        <li>• Professional cleaning recommended annually</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleBuyNow}
                  className="w-full bg-champagne hover:bg-yellow-600 text-charcoal py-4 font-semibold text-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Purchase Now
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white py-4 font-semibold transition-colors duration-300"
                >
                  <Heart size={20} className="mr-2" />
                  Add to Wishlist
                </Button>
              </div>
              
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal mb-3">Complimentary Services</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <Truck size={16} className="text-champagne mr-2" />
                      Free worldwide shipping
                    </li>
                    <li className="flex items-center">
                      <ArrowLeft size={16} className="text-champagne mr-2" />
                      30-day return policy
                    </li>
                    <li className="flex items-center">
                      <Shield size={16} className="text-champagne mr-2" />
                      Lifetime warranty
                    </li>
                    <li className="flex items-center">
                      <Gift size={16} className="text-champagne mr-2" />
                      Complimentary gift wrapping
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
