
import { Heart } from "lucide-react";

export const FavouriteItems = () => {
  return (<button className="p-2 relative text-gray-500 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 group">
  <Heart
    size={20}
    className="group-hover:scale-110 transition-transform"
    />
    <div className="hidden">
      
    </div>
  <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
    3
  </span>
</button>);
};
