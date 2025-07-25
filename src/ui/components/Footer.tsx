import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ChannelSelect } from "./ChannelSelect";
import { Logo } from "./Logo";
import { ChannelsListDocument, MenuGetBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function Footer({ channel }: { channel: string }) {
	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "footer", channel },
		revalidate: 60 * 60 * 24,
	});
	const channels = process.env.SALEOR_APP_TOKEN
		? await executeGraphQL(ChannelsListDocument, {
			withAuth: false, // disable cookie-based auth for this call
			headers: {
				// and use app token instead
				Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
			},
		})
		: null;
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-gray-400 font-sans">
			<div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

					<div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
						<div
							className="text-3xl font-serif font-bold text-gray-50 tracking-tight"
						>
							<Logo />
						</div>
						<p className="mt-4 text-sm">
							We turn controversial ideas into wearable art. If it makes you nervous, it probably belongs on your chest.
						</p>
					</div>

					{footerLinks.menu?.items?.map((item) => {
						return (
							<div key={item.id}>
								<h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">{item.name}</h3>
								<ul className="space-y-3">
									{item.children?.map((child) => {
										if (child.category) {
											return (
												<li key={child.id} >
													<LinkWithChannel href={`/categories/${child.category.slug}`}>
														{child.category.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.collection) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/collections/${child.collection.slug}`} className="hover:text-blue-400 transition-colors text-sm">
														{child.collection.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.page) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/pages/${child.page.slug}`} className="hover:text-blue-400 transition-colors text-sm">
														{child.page.title}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.url) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={child.url}>{child.name}</LinkWithChannel>
												</li>
											);
										}
										return null;
									})}
								</ul>
							</div>
						);
					})}

					<div>
						<h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
							Connect
						</h3>
						<div className="flex space-x-5 mt-4">
							<Link
								href="#"
								className="text-gray-400 hover:text-blue-400 transition-colors"
							>
								<Instagram size={22} />
							</Link>
							<Link
								href="#"
								className="text-gray-400 hover:text-blue-400 transition-colors"
							>
								<Facebook size={22} />
							</Link>
							<Link
								href="#"
								className="text-gray-400 hover:text-blue-400 transition-colors"
							>
								<Twitter size={22} />
							</Link>
						</div>
						<p className="mt-6 text-sm">
							Email us:{" "}
							<Link
								href="mailto:care@nimbus.com"
								className="hover:text-blue-400 underline"
							>
								care@nimbus.com
							</Link>
						</p>
					</div>

					{channels?.channels && (
						<div className="mb-4 text-neutral-500">
							<label>
								<span className="text-sm">Change currency:</span> <ChannelSelect channels={channels.channels} />
							</label>
						</div>
					)}

				</div>
				<div className="mt-12 border-t border-gray-700 pt-8 text-center md:flex md:justify-between">
					<p className="text-xs text-gray-500">
						&copy; {currentYear} Nimbus Co. All rights reserved.
					</p>
					<div className="flex justify-center space-x-4 mt-4 md:mt-0 text-xs">
						<LinkWithChannel href="/pages/privacy-policy" className="hover:underline">
							Privacy Policy
						</LinkWithChannel>
						<LinkWithChannel href="/pages/terms-of-service" className="hover:underline">
							Terms of Service
						</LinkWithChannel>
						
					</div>
				</div>
			</div>
		</footer>
	);
}
