"use client";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import  Obsession  from "./images/Obsession.jpg";

export const EditorsPickSection = () => {
  const mockProducts = [
    {
      id: 1,
      name: "Aurora Veil Lipstick",
      price: "$32.00",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=750&fit=crop&crop=center",
      category: "Makeup",
      description:
        "A weightless, hydrating matte lipstick with a velvety finish.",
      badge: "Bestseller",
    }
  ];
  const featuredProduct = mockProducts[0];

  return (
    <section className="py-20 bg-blue-50/50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={Obsession.src}
              alt={featuredProduct.name}
              className="w-full max-w-md mx-auto md:max-w-none h-auto object-contain rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"
            />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-300 rounded-full opacity-30 animate-blob filter blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-purple-400 to-blue-300 rounded-full opacity-30 animate-blob animation-delay-2000 filter blur-xl"></div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Editor's Obsession
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Adiddys
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Diddy's limited T-shirt edition featuring the Baby Oil.
            </p>
            <p className="mt-3 text-2xl font-semibold text-blue-600">
              $29.99
            </p>
            <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center md:items-start">
              <LinkWithChannel
                href="/products/moonlit-dew-serum"
                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-900 transition-transform transform hover:scale-105 shadow-lg"
              >
                Buy Now
              </LinkWithChannel>
              
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

