
import { Plus } from "lucide-react";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoneyRange } from "@/lib/utils";

export function ProductElement({
	product,
	loading,
	priority,
}: { product: ProductListItemFragment } & { loading: "eager" | "lazy"; priority?: boolean }) {
	return (
		<li data-testid="ProductElement">
			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
				<div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
					<div className="relative overflow-hidden  bg-gray-50"> {/* aspect-[3/4] */}
						{product?.thumbnail?.url && (
							<ProductImageWrapper
								loading={loading}
								src={product.thumbnail.url}
								// src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=1000&fit=crop&crop=center"
								alt={product.thumbnail.alt ?? ""}
								width={512}
								height={512}
								sizes={"512px"}
								priority={priority}
							/>
						)}
						{/* Badges */}
						{product.category && (
							<span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 shadow-sm`}>
								{product.category?.name}
							</span>
						)}
						{/* <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
							<button className="w-full bg-gray-900 text-white py-2.5 rounded-full hover:bg-blue-600 transition-colors text-sm font-medium shadow-lg backdrop-blur-sm">
								Quick Add
							</button>
						</div> */}
					</div>
					<div className="p-4">
						<div className="mb-2">
							<h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
								{product.name}
							</h3>
							<p className="text-xs text-gray-500 mt-1" data-testid="ProductElement_Category">{product.category?.name}</p>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<span className="text-lg font-bold text-gray-900">
									{formatMoneyRange({
										start: product?.pricing?.priceRange?.start?.gross,
										stop: product?.pricing?.priceRange?.stop?.gross,
									})}
								</span>
								{/* {product.originalPrice && (
									<span className="text-sm text-gray-500 line-through">
										${product.originalPrice.toFixed(2)}
									</span>
								)} */}
							</div>
							<button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-all">
								<Plus size={16} />
							</button>
						</div>
					</div>
				</div>
			</LinkWithChannel>
		</li>
	);
}
