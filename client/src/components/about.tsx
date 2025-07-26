import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional logistics fleet with modern trucks"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Greendrive Mobility</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to Greendrive Mobility, your trusted logistics partner revolutionizing transportation across India. 
              We are a comprehensive web portal designed to simplify and streamline logistics operations, connecting 
              businesses and individuals with reliable transportation services.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Greendrive Mobility, we believe that logistics is the backbone of every successful economy. With a 
              mission to transform the industry, we've created a platform that bridges the gap between service 
              providers and customers, ensuring seamless, efficient, and cost-effective solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-blue-purple rounded-lg flex items-center justify-center mb-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Transport</h4>
                  <p className="text-gray-600">GPS tracking and insurance coverage for all shipments</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-green-blue rounded-lg flex items-center justify-center mb-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">On-Time Delivery</h4>
                  <p className="text-gray-600">Reliable scheduling with 98% on-time delivery rate</p>
                </CardContent>
              </Card>
            </div>

            <Button className="gradient-blue-purple text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
