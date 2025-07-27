import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { JewelryItem } from '@/lib/jewelry-data';
import { useJewelryStore } from '@/store/jewelry-store';
import { useLocation } from 'wouter';

interface JewelryItemProps {
  item: JewelryItem;
}

export default function JewelryItemCard({ item }: JewelryItemProps) {
  const [, setLocation] = useLocation();
  const setSelectedItem = useJewelryStore((state) => state.setSelectedItem);

  const handleClick = () => {
    setSelectedItem(item);
    setLocation(`/jewelry/${item.id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <Card className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
        <div className="relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-3">{item.metal}</p>
          <p className="font-bold text-charcoal text-lg">{item.price}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
