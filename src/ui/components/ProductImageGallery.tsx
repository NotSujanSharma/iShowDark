"use client";

import { useState } from "react";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

interface ProductImageGalleryProps {
    images: Array<{ url: string; alt?: string | null }>;
}

export const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    if (images.length === 0) {
        return (
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <ProductImageWrapper
                    alt={images[selectedImageIndex]?.alt ?? ""}
                    width={600}
                    height={600}
                    src={images[selectedImageIndex]?.url ?? ""}
                    className="w-full h-full object-cover cursor-zoom-in"
                />
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={image.url}
                            className={`flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md overflow-hidden border-2 transition-colors ${index === selectedImageIndex
                                    ? 'border-blue-500'
                                    : 'border-transparent hover:border-blue-300 focus:border-blue-500'
                                }`}
                            onMouseEnter={() => setSelectedImageIndex(index)}
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <ProductImageWrapper
                                alt={image.alt ?? ""}
                                width={64}
                                height={64}
                                src={image.url}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};