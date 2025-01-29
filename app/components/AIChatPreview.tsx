import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Send, User } from "lucide-react";

const mockMessages = [
  {
    type: "bot",
    content: "Hello! What would you like to know about your skin today?"
  },
  {
    type: "user",
    content: "I have dry patches around my nose. What can I do?"
  },
  {
    type: "bot",
    content: "Based on your description, I recommend using a gentle hyaluronic acid serum followed by a non-comedogenic moisturizer. Would you like specific product suggestions?"
  }
];

const AIChatPreview = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Your Personal Skincare AI Assistant
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Get instant, personalized skincare advice 24/7
            </p>
          </div>

          <Card className="bg-white p-4 md:p-6 shadow-xl">
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 max-h-[300px] overflow-y-auto">
              {mockMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 md:gap-3 ${
                    message.type === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className={`rounded-full p-1.5 md:p-2 shrink-0 ${
                    message.type === "bot" ? "bg-pink-100" : "bg-purple-100"
                  }`}>
                    {message.type === "bot" ? 
                      <Bot className="w-3 h-3 md:w-4 md:h-4 text-pink-600" /> : 
                      <User className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                    }
                  </div>
                  <div className={`rounded-2xl px-3 md:px-4 py-2 max-w-[85%] md:max-w-[80%] ${
                    message.type === "bot" ? "bg-pink-50" : "bg-purple-50"
                  }`}>
                    <p className="text-sm md:text-base text-gray-700">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 md:gap-4">
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-sm md:text-base py-2 md:py-3">
                Start Chatting Now
                <Send className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIChatPreview;