import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Car, Truck, TruckIcon, Package, Users } from "lucide-react";

const services = [
  {
    icon: Bike,
    title: "2 Wheeler Delivery",
    description: "Fast and efficient delivery for small packages up to 20kg. Perfect for documents and small items.",
    capacity: "20kg",
    size: "1.3ft × 1.3ft × 1.3ft",
    gradient: "from-blue-50 to-purple-50",
    buttonGradient: "gradient-blue-purple"
  },
  {
    icon: Car,
    title: "3 Wheeler Goods",
    description: "Reliable transportation for medium-sized goods with professional handling and timely delivery.",
    capacity: "500kg",
    size: "6ft × 4.5ft × 5ft",
    gradient: "from-purple-50 to-orange-50",
    buttonGradient: "gradient-purple-orange"
  },
  {
    icon: Truck,
    title: "Tata Ace Goods",
    description: "Heavy-duty transportation for larger shipments with secure handling and GPS tracking.",
    capacity: "750kg",
    size: "7ft × 5ft × 6ft",
    gradient: "from-green-50 to-blue-50",
    buttonGradient: "gradient-green-blue"
  },
  {
    icon: TruckIcon,
    title: "Mahindra Pickup",
    description: "Robust pickup trucks for industrial goods and bulk shipments with enhanced security.",
    capacity: "1200kg",
    size: "8ft × 4.5ft × 5.5ft",
    gradient: "from-orange-50 to-blue-50",
    buttonGradient: "gradient-orange-blue"
  },
  {
    icon: Package,
    title: "Tata 407",
    description: "Commercial vehicle for large-scale logistics operations with premium safety features.",
    capacity: "2500kg",
    size: "9.5ft × 5.5ft × 6ft",
    gradient: "from-blue-50 to-green-50",
    buttonGradient: "gradient-blue-purple"
  },
  {
    icon: Users,
    title: "Packers & Movers",
    description: "Complete relocation services with professional packing and secure transportation.",
    capacity: "20kg",
    size: "1.3ft × 1.3ft × 1.3ft",
    gradient: "from-purple-50 to-green-50",
    buttonGradient: "gradient-purple-orange"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fleet Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional transportation solutions with a comprehensive fleet to handle all your logistics needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${service.gradient} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-0`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.buttonGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <p><strong>Capacity:</strong> {service.capacity}</p>
                    <p><strong>Size:</strong> {service.size}</p>
                  </div>
                  <Button className={`w-full ${service.buttonGradient} text-white hover:opacity-90 transition-all`}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
