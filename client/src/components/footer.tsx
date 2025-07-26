import { Button } from "@/components/ui/button";
import { Truck, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Call to Action Section */}
      <section className="py-20 gradient-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Greendrive Mobility for their logistics needs. 
            Get started today with professional transportation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              <Truck className="mr-2" size={20} />
              Get Started Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 gradient-green-blue rounded-lg flex items-center justify-center mr-3">
                  <Truck className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">Greendrive Mobility</span>
              </div>
              <p className="text-gray-300 mb-6">
                Your trusted logistics partner for professional transportation solutions across India. 
                Moving forward, delivering excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 gradient-blue-purple rounded-lg flex items-center justify-center hover:opacity-80 transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 gradient-blue-purple rounded-lg flex items-center justify-center hover:opacity-80 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 gradient-blue-purple rounded-lg flex items-center justify-center hover:opacity-80 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 gradient-blue-purple rounded-lg flex items-center justify-center hover:opacity-80 transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-white transition-colors">Our Services</button></li>
                <li><button onClick={() => scrollToSection("tracking")} className="text-gray-300 hover:text-white transition-colors">Track Shipment</button></li>
                <li><button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">2 Wheeler Delivery</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">3 Wheeler Goods</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pickup Trucks</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Heavy Vehicles</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Packers & Movers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Express Delivery</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📞</span>
                  <span className="text-gray-300">+91 9818494446</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">✉️</span>
                  <span className="text-gray-300">support@greendrivemobility.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">📍</span>
                  <span className="text-gray-300">
                    Plot No. 123, Industrial Area<br />
                    Sector 18, Gurugram<br />
                    Haryana 122015, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Greendrive Mobility. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
