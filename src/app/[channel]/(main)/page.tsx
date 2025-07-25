import HomePage from "@/app/Home/page";

export const metadata = {
	title: "Nimbus",
	description:
		"Explore our curated collection of beauty essentials, designed to elevate your daily rituals.",
};

export default async function Page(props: { params: Promise<{ channel: string }> }) {
	const params = await props.params;
	
	return (
		// <section className="mx-auto max-w-7xl p-8 pb-16">
		<section>
			<h2 className="sr-only">Product list</h2>
			{/* <ProductList products={products} /> */}
			<HomePage channel={params.channel} />
		</section>
	);
}
