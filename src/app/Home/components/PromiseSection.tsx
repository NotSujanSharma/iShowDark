
import { Leaf, Sparkles, Gift } from "lucide-react";

export const PromiseSection = () => (
    <section className="py-20 bg-pink-50/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            The Nimbus Difference
          </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Design made just for you. With high risk, comes high reward.
         
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 text-center">
          <div className="p-6">
            <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 text-white mx-auto shadow-lg">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Take Risk
            </h3>
            <p className="text-gray-600 text-sm">
            Designed to stir conversation, raise eyebrows, and break the internet. These tees aren’t safe, and that’s the point.
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 text-white mx-auto shadow-lg">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Offend Everyone
            </h3>
            <p className="text-gray-600 text-sm">
            Our shirts offend the right people. If you’re not getting dirty looks, are you even wearing it right?
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-yellow-400 text-white mx-auto shadow-lg">
              <Gift size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Stay Silent and Mew
            </h3>
            <p className="text-gray-600 text-sm">
              Clothes that speak louder than you ever could. One shirt. One warning. One middle finger to the status quo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

