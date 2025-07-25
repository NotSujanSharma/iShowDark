import { type ReactNode } from "react";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";

export const metadata = {
	title: "Nimbus",
	description: "Explore our curated collection of beauty essentials, designed to elevate your daily rituals.",
};

export default async function RootLayout(props: {
	children: ReactNode;
	params: Promise<{ channel: string }>;
}) {
	const channel = (await props.params).channel;

	return (
		<>
			<Header channel={channel} />
			{/* <div className="flex min-h-[calc(100dvh-64px)] flex-col"> */}
			{/* <main className="flex-1">{props.children}</main> */}
			{props.children}
				<Footer channel={channel} />
			{/* </div> */}
		</>
	);
}
