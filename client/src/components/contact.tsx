import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours."
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const serviceTypes = [
    "Regular Delivery",
    "Express Delivery", 
    "Bulk Transportation",
    "Packers & Movers",
    "Custom Solution"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start shipping? Contact us for personalized logistics solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <Label>Service Type</Label>
                  <Select onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your logistics requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full gradient-full text-white py-4 text-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all"
                >
                  <Send className="mr-2" size={20} />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-blue-purple rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone Support</h4>
                    <p className="text-gray-600">Call us for immediate assistance</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600">+91 9818494446</p>
                <p className="text-gray-500 text-sm mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-purple-orange rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email Support</h4>
                    <p className="text-gray-600">Send us your queries anytime</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-purple-600">support@greendrivemobility.com</p>
                <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-green-blue rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Office Address</h4>
                    <p className="text-gray-600">Visit our main office</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Plot No. 123, Industrial Area<br />
                  Sector 18, Gurugram<br />
                  Haryana 122015, India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
