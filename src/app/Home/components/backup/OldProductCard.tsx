import { Heart } from "lucide-react";


const OldProductCard = ({ product  }: { product: any }) => (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/70 backdrop-blur-sm rounded-full text-gray-600 hover:text-blue-500 hover:bg-white transition-all">
            <Heart size={18} />
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-gray-800 mb-1">
          <a href="#" className="hover:text-blue-600 transition-colors">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="text-xs text-gray-500 mb-2">{product.category}</p>
        <p className="text-lg font-bold text-blue-700 mb-3">{product.price}</p>
        <button className="mt-auto w-full bg-gray-800 text-white py-2.5 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Add to Bag
        </button>
      </div>
    </div>
  );

export default OldProductCard;