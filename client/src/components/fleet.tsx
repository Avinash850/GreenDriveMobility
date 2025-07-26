import { Card, CardContent } from "@/components/ui/card";

const fleetVehicles = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Small Delivery Trucks",
    description: "Perfect for urban deliveries and small to medium shipments",
    capacity: "500-750kg",
    status: "Available",
    statusColor: "green"
  },
  {
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Heavy Duty Trucks", 
    description: "Long-distance transportation for large-scale logistics",
    capacity: "2500kg+",
    status: "Available",
    statusColor: "green"
  },
  {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Pickup Trucks",
    description: "Versatile vehicles for various cargo types and sizes",
    capacity: "1200kg",
    status: "Available", 
    statusColor: "green"
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Express Vehicles",
    description: "Fast delivery solutions for urgent shipments",
    capacity: "Same Day Delivery",
    status: "Express",
    statusColor: "orange"
  },
  {
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Specialized Vehicles", 
    description: "Custom solutions for specific cargo requirements",
    capacity: "Custom Capacity",
    status: "Specialized",
    statusColor: "purple"
  },
  {
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Commercial Fleet",
    description: "Large-scale commercial transportation solutions", 
    capacity: "Bulk Capacity",
    status: "Commercial",
    statusColor: "blue"
  }
];

export default function Fleet() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Fleet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, well-maintained vehicles equipped with the latest technology for safe and efficient transportation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetVehicles.map((vehicle, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.title}</h3>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Capacity: {vehicle.capacity}</span>
                  <span className={`px-3 py-1 rounded-full text-${vehicle.statusColor}-800 bg-${vehicle.statusColor}-100`}>
                    {vehicle.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
