import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, IndianRupee, Clock, Shield } from "lucide-react";

export default function RateCalculator() {
  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    weight: "",
    vehicleType: "",
    serviceType: "Regular"
  });
  const [showRate, setShowRate] = useState(false);

  const handleCalculate = () => {
    if (formData.fromCity && formData.toCity && formData.weight && formData.vehicleType) {
      setShowRate(true);
    } else {
      alert("Please fill all required fields");
    }
  };

  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Pune", "Hyderabad", "Ahmedabad"];
  const vehicles = ["2 Wheeler", "3 Wheeler", "Tata Ace", "Pickup Truck", "Tata 407"];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Shipping Rates</h2>
          <p className="text-xl text-gray-600">Get instant quotes for your transportation needs</p>
        </div>

        <Card className="shadow-2xl">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fromCity" className="text-sm font-medium text-gray-700 mb-2">
                    From City *
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, fromCity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pickup city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="toCity" className="text-sm font-medium text-gray-700 mb-2">
                    To City *
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, toCity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="weight" className="text-sm font-medium text-gray-700 mb-2">
                    Weight (kg) *
                  </Label>
                  <Input
                    type="number"
                    placeholder="Enter weight"
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    className="focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2">
                    Vehicle Type *
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicles.map((vehicle) => (
                        <SelectItem key={vehicle} value={vehicle}>{vehicle}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Regular" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Regular">Regular</SelectItem>
                      <SelectItem value="Express">Express</SelectItem>
                      <SelectItem value="Same Day">Same Day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleCalculate}
                className="w-full gradient-full text-white py-4 text-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all"
              >
                <Calculator className="mr-2" size={20} />
                Calculate Rate
              </Button>

              {showRate && (
                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Estimated Rate</h4>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">
                      {formData.fromCity} to {formData.toCity} ({formData.weight}kg)
                    </span>
                    <span className="text-2xl font-bold text-green-600 flex items-center">
                      <IndianRupee size={20} />
                      2,500
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <IndianRupee size={16} className="mr-1" />
                      <span>Includes fuel charges and GST</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>Estimated delivery: 2-3 days</span>
                    </div>
                    <div className="flex items-center">
                      <Shield size={16} className="mr-1" />
                      <span>Real-time tracking included</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
