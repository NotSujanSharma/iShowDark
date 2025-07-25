
import React from "react";
import { ChevronRight } from "lucide-react";
// import ProductCard from "./ProductCard";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import { ProductElement } from "@/ui/components/ProductElement";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function YouMightLove({ channel }: { channel: string }) {
    const data = await executeGraphQL(ProductListByCollectionDocument, {
        variables: {
            slug: "featured-products",
            channel: channel,
        },
        revalidate: 60,
    });

    if (!data.collection?.products) {
        return null;
    }

    let products = data.collection?.products.edges.map(({ node: product }) => product);
    //four products
    products = products.slice(0, 4);
    return (
        <section className="py-20 bg-blue-50/30">
            {" "}
            {/* Changed background slightly */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                        You Might Also Love
                    </h2>
                   
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-10">


                    {products.map((product, index) => (
                        //     <ProductCard
                        //       key={product.id}
                        //       product={product}
                        //   />
                        <ProductElement
                            key={product.id}
                            product={product}
                            priority={index < 2}
                            loading={index < 3 ? "eager" : "lazy"}
                        />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <LinkWithChannel
                        href="/products"
                        className="inline-flex items-center px-8 py-3 border-2 border-blue-500 text-base font-medium rounded-full text-blue-600 bg-transparent hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                    >
                        View All Products{" "}
                        <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </LinkWithChannel>
                </div>
            </div>
        </section>
    );
}
