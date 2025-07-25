
import { Mail } from "lucide-react";

export const NewsletterSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail size={48} className="mx-auto text-blue-500 mb-4" />
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
          Join Our Inner Circle
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Be the first to know about new arrivals, exclusive beauty insights, and
          members-only offers from Nimbus.
        </p>
        <form className="mt-10 sm:flex max-w-lg mx-auto">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-6 py-3.5 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-full shadow-sm sm:max-w-xs mx-auto sm:mx-0 text-sm"
            placeholder="yourname@example.com"
          />
          <div className="mt-3 rounded-full shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );

