
import { Leaf } from "lucide-react";

export const RitualSection = () => (
    <section className="py-20 bg-white ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
              Our Philosophy
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              The Art of the Ritual
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              At Nimbus, we believe beauty is more than skin deep—it&#39;s a daily
              ritual, a moment of self-care that nurtures both body and soul. Each
              product is thoughtfully crafted, blending the finest natural
              extracts with innovative science to create an experience that
              delights the senses and delivers visible results.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Embrace the journey to radiant well-being. Transform your routine
              into a cherished ritual.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center px-8 py-3 border-2 border-pink-500 text-base font-medium rounded-full text-pink-600 bg-transparent hover:bg-pink-50 hover:border-pink-600 transition-transform transform hover:scale-105 shadow-sm"
            >
              Discover Our Ingredients <Leaf size={18} className="ml-2" />
            </a>
          </div>
          <div className="relative order-1 md:order-2 h-96 md:h-[550px]">
            <img
              src="https://placehold.co/800x1000/fde6f0/7A5C58?text=Ingredients+ko+photo"
              alt="Artistic display of beauty product textures and ingredients"
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transform md:-rotate-2 transition-all duration-500 hover:rotate-0 hover:scale-105"
              
            />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-rose-300 rounded-full opacity-40 animate-blob filter blur-lg animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
