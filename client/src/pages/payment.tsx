import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useJewelryStore } from '@/store/jewelry-store';
import { useLocation } from 'wouter';
import { Lock, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Payment() {
  const [, setLocation] = useLocation();
  const selectedItem = useJewelryStore((state) => state.selectedItem);
  const clearSelectedItem = useJewelryStore((state) => state.clearSelectedItem);
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (!selectedItem) {
    setLocation('/');
    return null;
  }

  const price = parseFloat(selectedItem.price.replace('$', '').replace(',', ''));
  const tax = price * 0.08;
  const total = price + tax;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Order Completed!",
      description: `Thank you for your purchase of ${selectedItem.name}. This is a demo - no actual payment was processed.`,
    });
    
    clearSelectedItem();
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-playfair text-4xl font-bold text-charcoal mb-4">Secure Checkout</h1>
            <p className="text-xl text-gray-600">Complete your purchase with confidence</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={selectedItem.image} 
                        alt={selectedItem.name} 
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-charcoal">{selectedItem.name}</h3>
                        <p className="text-sm text-gray-600">{selectedItem.metal}</p>
                      </div>
                      <p className="font-bold text-champagne">{selectedItem.price}</p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-green-600">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-champagne">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6">Payment Information</h2>
                  
                  <form onSubmit={handleCompleteOrder} className="space-y-6">
                    {/* Billing Address */}
                    <div>
                      <h3 className="font-semibold text-charcoal mb-4">Billing Address</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input type="text" id="firstName" defaultValue="John" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input type="text" id="lastName" defaultValue="Smith" required />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="email">Email</Label>
                          <Input type="email" id="email" defaultValue="john.smith@email.com" required />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="address">Address</Label>
                          <Input type="text" id="address" defaultValue="123 Luxury Avenue" required />
                        </div>
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input type="text" id="city" defaultValue="New York" required />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input type="text" id="zipCode" defaultValue="10075" required />
                        </div>
                      </div>
                    </div>
                    
                    {/* Payment Method */}
                    <div>
                      <h3 className="font-semibold text-charcoal mb-4">Payment Method</h3>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center">
                            <CreditCard size={16} className="mr-2" />
                            Credit/Debit Card
                          </Label>
                        </div>
                      </RadioGroup>
                      
                      <div className="mt-4 grid grid-cols-1 gap-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input 
                            type="text" 
                            id="cardNumber" 
                            defaultValue="4532 1234 5678 9012" 
                            placeholder="1234 5678 9012 3456" 
                            required 
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input 
                              type="text" 
                              id="expiryDate" 
                              defaultValue="12/28" 
                              placeholder="MM/YY" 
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input 
                              type="text" 
                              id="cvv" 
                              defaultValue="123" 
                              placeholder="123" 
                              required 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Card className="bg-gray-50">
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-600 flex items-center">
                          <Lock className="text-champagne mr-2" size={16} />
                          Your payment information is encrypted and secure
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-champagne hover:bg-yellow-600 text-charcoal py-4 font-semibold text-lg transition-colors duration-300 transform hover:scale-105"
                    >
                      Complete Order - ${total.toFixed(2)}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
