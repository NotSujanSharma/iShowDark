import NextImage, { type ImageProps } from "next/image";

export const ProductImageWrapper = (props: ImageProps) => {
	return (
		<div className="aspect-square overflow-hidden bg-neutral-50">
			<NextImage {...props} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
		</div>
	);
};
