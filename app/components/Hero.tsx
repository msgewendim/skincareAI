import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[80vh] bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-pink-100 rounded-full">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-1.5 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-pink-700">AI Skin Analysis</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              Discover Your Skin`s
              <span className="text-pink-600"> True Potential</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Get personalized skincare recommendations with our advanced AI analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button className="bg-pink-600 hover:bg-pink-700 text-sm sm:text-base" size="lg">
                Start Analysis
                <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-base">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-md md:max-w-none mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-xl opacity-30" />
            <div className="relative aspect-square md:aspect-auto">
              <Image
                src="/hero.jpg"
                width={600}
                height={600}
                alt="Skin Analysis Visualization"
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;