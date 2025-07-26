import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your Greendrive assistant. How can I help you today?\n\nTry asking:\n• \"Track my shipment\"\n• \"Get pricing\"\n• \"Book a pickup\"\n• \"Contact support\"",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const botResponses: Record<string, string> = {
    track: "To track your shipment, please enter your tracking number in the tracking section above or call our support at +91 9818494446.",
    pricing: "Our pricing varies based on distance, weight, and vehicle type. Use our rate calculator above for instant quotes!",
    book: "To book a pickup, click the \"Book Now\" button in our services section or call us at +91 9818494446.",
    contact: "You can reach us at +91 9818494446 or email support@greendrivemobility.com. Our office hours are Mon-Sat 9AM-8PM.",
    services: "We offer 2-wheeler delivery, 3-wheeler goods, pickup trucks, heavy vehicles, and packers & movers services.",
    default: "Thank you for your message! For immediate assistance, please call +91 9818494446 or email support@greendrivemobility.com."
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("track")) return botResponses.track;
    if (message.includes("price") || message.includes("cost") || message.includes("rate")) return botResponses.pricing;
    if (message.includes("book") || message.includes("pickup")) return botResponses.book;
    if (message.includes("contact") || message.includes("phone") || message.includes("support")) return botResponses.contact;
    if (message.includes("service")) return botResponses.services;
    
    return botResponses.default;
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 h-96 shadow-2xl">
          <div className="gradient-blue-purple text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <Bot className="text-blue-600" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Greendrive Assistant</h4>
                  <p className="text-sm text-blue-100">Online now</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 hover:bg-transparent"
              >
                <X size={16} />
              </Button>
            </div>
          </div>

          <CardContent className="p-0 h-64 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm whitespace-pre-line ${
                      message.isUser
                        ? "gradient-blue-purple text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="text-sm"
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  className="gradient-blue-purple text-white hover:opacity-90"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 gradient-blue-purple text-white rounded-full shadow-lg hover:opacity-90 transform hover:scale-110 transition-all"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
}
