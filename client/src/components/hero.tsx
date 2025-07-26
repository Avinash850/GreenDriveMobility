import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Calculator, Search, MapPin } from "lucide-react";

export default function Hero() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      alert(`Tracking package: ${trackingNumber}`);
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">
                Moving Forward,
              </span>
              <br />Delivering Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your trusted logistics partner for seamless transportation solutions across India. 
              Professional, reliable, and efficient delivery services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-blue-purple text-white hover:opacity-90 transform hover:scale-105 transition-all">
                <Truck className="mr-2" size={20} />
                Book Now
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:border-blue-600 hover:text-blue-600">
                <Calculator className="mr-2" size={20} />
                Calculate Rates
              </Button>
            </div>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Track Your Shipment
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Tracking Number
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., GDM123456789"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <Button
                  onClick={handleTrack}
                  className="w-full gradient-green-blue text-white hover:opacity-90 transform hover:scale-105 transition-all"
                >
                  <Search className="mr-2" size={20} />
                  Track Package
                </Button>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600">Sample Tracking</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    In Transit
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Package picked up - Mumbai</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>In transit - Delhi Hub</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                    <span>Out for delivery - Bangalore</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
