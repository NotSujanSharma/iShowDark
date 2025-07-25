import { ChevronRight } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import Hero from "./images/Hero.jpg";

export const HeroSection = () => (
    <section className="relative min-h-[80vh] md:min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-blue-50 via-blue-50 to-purple-50 overflow-hidden">
    <FloatingParticles />
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="heroPattern"
              patternUnits="userSpaceOnUse"
              width="50"
              height="50"
              patternTransform="scale(2) rotate(45)"
            >
              <path
                d="M25 0 L50 25 L25 50 L0 25 Z"
                fill="rgba(0, 65, 193, 0.05)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-8 items-center animate-in slide-in-from-bottom duration-900">
          <div className="text-center md:text-left py-12 md:py-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-gray-900">
            <span className="block">Designed to Offend.</span>
            <span className="block text-blue-600 mt-2 typewriter">Worn to Impress.</span>
            </h1>
          <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg text-gray-700 ">
              Discover Nimbus&#39;s most risky and most rewarding products.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <LinkWithChannel
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Explore Collection
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
            </LinkWithChannel>
            <LinkWithChannel
              
                href="/pages/our-philosophy"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-200 text-base font-medium rounded-full text-blue-600 bg-transparent hover:bg-blue-50 hover:border-blue-300 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Our Philosophy
              </LinkWithChannel>
            </div>
          </div>
          <div className="relative h-80 md:h-[500px] lg:h-[600px]">
            <img
              
              src={Hero.src}
              alt="Artistic beauty product display"
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transform md:rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105"
              width={800}
              height={1000}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-lg opacity-60 transform rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );