export interface JewelryItem {
  id: string;
  name: string;
  price: string;
  metal: string;
  stones: string;
  image: string;
  category: 'rings' | 'bracelets' | 'necklaces';
  description: string;
}

export const jewelryData: JewelryItem[] = [
  // Rings
  {
    id: '1',
    name: 'Diamond Solitaire Ring',
    price: '$2,850',
    metal: '18K White Gold',
    stones: '0.5 Carat Diamond',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'rings',
    description: 'This exquisite diamond solitaire ring exemplifies timeless elegance with its classic design and brilliant-cut diamond.'
  },
  {
    id: '2',
    name: 'Rose Gold Vintage Ring',
    price: '$1,950',
    metal: '14K Rose Gold',
    stones: 'Ruby & Diamonds',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'rings',
    description: 'A vintage-inspired ring featuring a stunning ruby center stone surrounded by delicate diamonds in warm rose gold.'
  },
  {
    id: '3',
    name: 'Emerald Halo Ring',
    price: '$3,200',
    metal: 'Platinum',
    stones: 'Emerald & Diamonds',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'rings',
    description: 'A magnificent emerald halo ring showcasing a vibrant emerald center stone encircled by brilliant diamonds.'
  },
  {
    id: '4',
    name: 'Gold Eternity Band',
    price: '$1,650',
    metal: '18K Yellow Gold',
    stones: 'Diamond Pavé',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'rings',
    description: 'An elegant eternity band featuring diamond pavé setting in lustrous yellow gold, symbolizing endless love.'
  },
  {
    id: '5',
    name: 'Sapphire Trilogy Ring',
    price: '$2,450',
    metal: 'White Gold',
    stones: 'Blue Sapphires',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'rings',
    description: 'A three-stone sapphire ring representing past, present, and future in brilliant blue sapphires.'
  },
  {
    id: '6',
    name: 'Art Deco Diamond Ring',
    price: '$3,800',
    metal: 'Platinum',
    stones: 'Diamond & Onyx',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'rings',
    description: 'An Art Deco-inspired ring featuring geometric patterns with diamonds and onyx in platinum setting.'
  },
  {
    id: '7',
    name: 'Pearl Cocktail Ring',
    price: '$1,200',
    metal: '14K Gold',
    stones: 'Cultured Pearl',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'rings',
    description: 'A statement cocktail ring featuring a lustrous cultured pearl in an elegant gold setting.'
  },
  {
    id: '8',
    name: 'Mens Signet Ring',
    price: '$2,100',
    metal: '18K Gold',
    stones: 'Onyx Inlay',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'rings',
    description: 'A classic mens signet ring with onyx inlay, perfect for the modern gentleman.'
  },

  // Bracelets
  {
    id: '9',
    name: 'Diamond Tennis Bracelet',
    price: '$4,500',
    metal: '18K White Gold',
    stones: '2.5 Carat Diamonds',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'bracelets',
    description: 'A classic diamond tennis bracelet featuring a continuous line of brilliant diamonds in white gold.'
  },
  {
    id: '10',
    name: 'Gold Chain Bracelet',
    price: '$1,850',
    metal: '14K Yellow Gold',
    stones: 'None',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'bracelets',
    description: 'An elegant gold chain bracelet with interlocking links, perfect for everyday luxury.'
  },
  {
    id: '11',
    name: 'Silver Cuff Bracelet',
    price: '$950',
    metal: 'Sterling Silver',
    stones: 'Turquoise Inlay',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'bracelets',
    description: 'A sterling silver cuff bracelet featuring beautiful turquoise inlay work.'
  },
  {
    id: '12',
    name: 'Rose Gold Bangle Set',
    price: '$2,200',
    metal: '18K Rose Gold',
    stones: 'None',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'bracelets',
    description: 'A set of three rose gold bangles designed to be worn together or separately.'
  },
  {
    id: '13',
    name: 'Emerald Link Bracelet',
    price: '$3,600',
    metal: 'Platinum',
    stones: 'Emeralds',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'bracelets',
    description: 'A sophisticated link bracelet featuring emerald stations in platinum setting.'
  },
  {
    id: '14',
    name: 'Pearl Strand Bracelet',
    price: '$1,400',
    metal: '14K Gold Clasp',
    stones: 'Cultured Pearls',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'bracelets',
    description: 'A double strand pearl bracelet with lustrous cultured pearls and gold clasp.'
  },
  {
    id: '15',
    name: 'Charm Bracelet',
    price: '$1,650',
    metal: 'Sterling Silver',
    stones: 'Mixed Charms',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'bracelets',
    description: 'A vintage-style charm bracelet with various meaningful pendants and charms.'
  },
  {
    id: '16',
    name: 'Platinum Mesh Bracelet',
    price: '$5,200',
    metal: 'Platinum',
    stones: 'None',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'bracelets',
    description: 'A sophisticated platinum mesh bracelet with contemporary design and luxurious feel.'
  },

  // Necklaces
  {
    id: '17',
    name: 'Diamond Pendant Necklace',
    price: '$3,800',
    metal: '18K White Gold',
    stones: '1 Carat Diamond',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'necklaces',
    description: 'An elegant diamond pendant necklace featuring a brilliant one-carat diamond in white gold setting.'
  },
  {
    id: '18',
    name: 'Pearl Strand Necklace',
    price: '$2,200',
    metal: '14K Gold Clasp',
    stones: 'Cultured Pearls',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'necklaces',
    description: 'A classic pearl strand necklace with lustrous cultured pearls and elegant gold clasp.'
  },
  {
    id: '19',
    name: 'Emerald Drop Necklace',
    price: '$4,600',
    metal: 'Platinum',
    stones: 'Emerald & Diamonds',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'necklaces',
    description: 'A sophisticated emerald drop necklace with diamonds in platinum setting.'
  },
  {
    id: '20',
    name: 'Gold Chain Necklace',
    price: '$1,950',
    metal: '18K Yellow Gold',
    stones: 'None',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'necklaces',
    description: 'A classic gold chain necklace in lustrous yellow gold, perfect for layering or wearing alone.'
  },
  {
    id: '21',
    name: 'Ruby Tennis Necklace',
    price: '$5,800',
    metal: '18K White Gold',
    stones: 'Rubies & Diamonds',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'necklaces',
    description: 'A stunning ruby and diamond tennis necklace featuring alternating rubies and diamonds.'
  },
  {
    id: '22',
    name: 'Art Nouveau Necklace',
    price: '$3,400',
    metal: 'Sterling Silver',
    stones: 'Amethyst',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'necklaces',
    description: 'An Art Nouveau-inspired necklace featuring beautiful amethyst stones in sterling silver.'
  },
  {
    id: '23',
    name: 'Choker Necklace',
    price: '$2,100',
    metal: '14K Rose Gold',
    stones: 'Diamond Pavé',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'necklaces',
    description: 'A modern diamond pavé choker in warm rose gold, perfect for contemporary style.'
  },
  {
    id: '24',
    name: 'Layered Chain Set',
    price: '$2,800',
    metal: 'Mixed Gold Tones',
    stones: 'None',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    category: 'necklaces',
    description: 'A set of three layered chain necklaces in mixed gold tones for versatile styling.'
  }
];

export const getJewelryByCategory = (category: 'rings' | 'bracelets' | 'necklaces'): JewelryItem[] => {
  return jewelryData.filter(item => item.category === category);
};

export const getJewelryById = (id: string): JewelryItem | undefined => {
  return jewelryData.find(item => item.id === id);
};
