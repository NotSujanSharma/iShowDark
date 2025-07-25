
import { Heart, MessageCircle, Star } from "lucide-react";
  
  export const ReviewsSection = () => {
    const testimonials = [
      {
        id: 1,
        name: "Sarah L.",
        quote:
          "Nimbus has transformed my skin! The Moonlit Dew Serum is pure magic. My face has never felt so soft and radiant.",
        image: "https://placehold.co/400x400/E6A4B4/FFFFFF?text=Sarah+L.",
        stars: 5,
      },
      {
        id: 2,
        name: "Jessica M.",
        quote:
          "I'm obsessed with the Aurora Veil Lipstick. The color is stunning and it feels so luxurious. Finally found my perfect red!",
        image: "https://placehold.co/400x400/D988B9/FFFFFF?text=Jessica+M.",
        stars: 5,
      },
      {
        id: 3,
        name: "Chloe K.",
        quote:
          "The attention to detail and quality is amazing. Plus, knowing it's cruelty-free makes me love Nimbus even more.",
        image: "https://placehold.co/400x400/C7A2CB/FFFFFF?text=Chloe+K.",
        stars: 5,
      },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
              Community Glow
            </h2>
            <p className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Loved by You, For You
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-pink-50/40 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:scale-105"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                  
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {testimonial.name}
                </h3>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={i} size={18} className="text-gray-300" />
                  ))}
                </div>
                <MessageCircle size={24} className="text-pink-400 mb-2" />
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-2.5 border border-pink-500 text-sm font-medium rounded-full text-pink-600 bg-transparent hover:bg-pink-50 transition-colors"
            >
              Share Your Glow <Heart size={16} className="ml-2 text-pink-500" />
            </a>
          </div>
        </div>
      </section>
    );
};
  
