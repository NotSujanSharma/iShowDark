import { ChevronRight } from "lucide-react";
import { SubCategoriesDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";


function extractPlainTextFromDescription(jsonString : string): string {
    try {
        const data: any = JSON.parse(jsonString);
        if (!data.blocks) return "";

        return data.blocks
            .map((block: any) => block.data?.text || "")
            .join(" ")
            .replace(/&nbsp;/g, " ")
            .trim();
    } catch (e) {
        console.error("Invalid description JSON:", e);
        return "";
    }
}

export async function Category() {
    const data = await executeGraphQL(SubCategoriesDocument, {
        variables: { slug: "makeups" },
        revalidate: 60,
    });

    if (!data) {
        return null;
    }

    // Type assertion to ensure TypeScript knows the structure
    const categoryData = data as { category?: { children?: any } };
    
    if (!categoryData.category?.children) {
        return null;
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                        Discover Our World
                    </h2>
                    <p className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                        Crafted for You
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {categoryData.category.children.edges.map((category : any, index : number) => (

                        <LinkWithChannel href={`/categories/${category.node.slug}`}
                            className={`group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${index === 1 ? "md:scale-105 md:z-10" : ""}`}

                        >

                            <img
                                src={category.node.backgroundImage?.url}
                                alt={category.node.name}
                                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                <h3 className="text-2xl lg:text-3xl font-serif font-semibold">
                                    {category.node.name}
                                </h3>
                                <p className="mt-1 text-sm text-blue-100 group-hover:text-white transition-colors">
                                    {extractPlainTextFromDescription(category.node.description || "")}
                                </p>
                                <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-300 group-hover:text-blue-100 transition-colors">
                                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                                </span>
                            </div>
                        </LinkWithChannel>

                    ))}
                </div>
            </div>
        </section>
    );
}
