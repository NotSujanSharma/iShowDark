
import { Sparkles } from "lucide-react";

export const PromoSection = () => (
    <section className="py-20 my-16 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white relative">
      <div className="absolute inset-0 opacity-20">
        <Sparkles className="absolute top-1/4 left-1/4 w-32 h-32 text-pink-300 animate-pulse" />
        <Sparkles className="absolute bottom-1/4 right-1/4 w-24 h-24 text-purple-300 animate-ping animation-delay-1000" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Exclusive Offer
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
          Unlock Your Radiance
        </h2>
        <p className="mt-4 text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
          Join the Nimbus family and receive{" "}
          <span className="font-bold text-yellow-300">15% OFF</span> your first
          indulgence. Plus, early access to new arrivals and secret sales.
        </p>
        <a
          href="#"
          className="mt-10 inline-block bg-white text-pink-600 font-semibold py-3.5 px-10 rounded-full shadow-xl hover:bg-pink-50 transition-transform transform hover:scale-105 text-lg"
        >
          Claim Your Welcome Gift
        </a>
      </div>
    </section>
  );
  