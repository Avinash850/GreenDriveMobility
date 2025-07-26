import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sagar Kumar",
    role: "Business Owner",
    content: "Excellent service! Greendrive Mobility delivered our goods on time and in perfect condition. The tracking system is fantastic and customer service is top-notch.",
    initials: "SK",
    gradient: "gradient-blue-purple"
  },
  {
    name: "Rajesh Sharma", 
    role: "Manufacturing Manager",
    content: "Professional and reliable service. We've been using Greendrive for our monthly shipments and they never disappoint. Highly recommended for logistics needs.",
    initials: "RS",
    gradient: "gradient-purple-orange"
  },
  {
    name: "Priya Mehta",
    role: "E-commerce Director", 
    content: "Outstanding logistics partner! Their fleet is modern, drivers are professional, and the pricing is very competitive. Great experience overall.",
    initials: "PM",
    gradient: "gradient-green-blue"
  }
];

const stats = [
  { value: "5000+", label: "Happy Customers", color: "text-blue-600" },
  { value: "250+", label: "Professional Drivers", color: "text-purple-600" },
  { value: "50+", label: "Cities Covered", color: "text-orange-500" },
  { value: "98%", label: "On-time Delivery", color: "text-green-500" }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of businesses and individuals across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
