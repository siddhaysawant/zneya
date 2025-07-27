import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-charcoal mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Visit our boutiques or reach out to our team for personalized service</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">Get in Touch</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-semibold text-charcoal mb-2">First Name</Label>
                        <Input type="text" id="firstName" className="focus:ring-2 focus:ring-champagne focus:border-transparent" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-semibold text-charcoal mb-2">Last Name</Label>
                        <Input type="text" id="lastName" className="focus:ring-2 focus:ring-champagne focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-charcoal mb-2">Email</Label>
                      <Input type="email" id="email" className="focus:ring-2 focus:ring-champagne focus:border-transparent" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-charcoal mb-2">Phone</Label>
                      <Input type="tel" id="phone" className="focus:ring-2 focus:ring-champagne focus:border-transparent" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-charcoal mb-2">Message</Label>
                      <Textarea id="message" rows={4} className="focus:ring-2 focus:ring-champagne focus:border-transparent" />
                    </div>
                    <Button className="w-full bg-champagne hover:bg-yellow-600 text-charcoal py-4 font-semibold transition-colors duration-300">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Boutique Locations */}
              <Card className="bg-charcoal text-white p-8">
                <CardContent className="p-0">
                  <h3 className="font-playfair text-2xl font-bold mb-6">Boutique Locations</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-champagne mb-2">Milan Flagship</h4>
                      <p className="text-gray-300 mb-1">Via Montenapoleone 12</p>
                      <p className="text-gray-300 mb-1">20121 Milano, Italy</p>
                      <p className="text-gray-300">+39 02 7600 8423</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-champagne mb-2">New York Boutique</h4>
                      <p className="text-gray-300 mb-1">Madison Avenue 985</p>
                      <p className="text-gray-300 mb-1">New York, NY 10075</p>
                      <p className="text-gray-300">+1 212 794 3580</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-champagne mb-2">London Showroom</h4>
                      <p className="text-gray-300 mb-1">Bond Street 157</p>
                      <p className="text-gray-300 mb-1">London W1S 2AX, UK</p>
                      <p className="text-gray-300">+44 20 7629 4691</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Business Hours */}
              <Card className="bg-gray-50 p-8">
                <CardContent className="p-0">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">Monday - Friday</span>
                      <span>10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Saturday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sunday</span>
                      <span>12:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
