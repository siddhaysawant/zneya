import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function CollectionCard({ title, description, image, href }: CollectionCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 cursor-pointer"
      >
        <img 
          src={image} 
          alt={`${title} collection`} 
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="font-playfair text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90 mb-4">{description}</p>
          <div className="flex items-center text-champagne">
            <span className="font-semibold">Explore Collection</span>
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={16} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
