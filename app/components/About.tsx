import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Brain, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />,
    title: "AI Analysis",
    description: "Advanced algorithms analyze your unique skin characteristics"
  },
  {
    icon: <UserCheck className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />,
    title: "Personal Care",
    description: "Custom skincare routines for your specific needs"
  },
  {
    icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />,
    title: "Smart Tracking",
    description: "Monitor skin progress with AI insights"
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-[90%] sm:max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Transform Your Skincare
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-2 sm:px-4">
            Advanced AI technology for personalized skincare analysis and recommendations
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="rounded-full bg-pink-100 p-2 sm:p-3 w-fit mx-auto mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;