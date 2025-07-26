import { ClipboardList, Truck, Route, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Order Initiated",
    description: "Select pickup and drop-off locations, choose vehicle type, and provide shipment details",
    gradient: "gradient-blue-purple"
  },
  {
    icon: Truck,
    step: "2", 
    title: "Order Dispatched",
    description: "Professional driver picks up your goods and begins the journey with real-time tracking",
    gradient: "gradient-purple-orange"
  },
  {
    icon: Route,
    step: "3",
    title: "In Transit", 
    description: "Track your shipment in real-time as it moves through our secure logistics network",
    gradient: "gradient-orange-blue"
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Delivered",
    description: "Safe delivery to destination with confirmation and payment completion",
    gradient: "gradient-green-blue"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, efficient process to get your goods moving with professional handling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${step.gradient} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 gradient-green-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
