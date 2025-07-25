"use client";

import { loadStripe, type Stripe, type StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { CheckoutForm } from "./stripeForm";
import { useCheckout } from "@/checkout/hooks/useCheckout";

interface StripeConfig {
	data?: {
		stripePublishableKey?: string;
	};
}

export const StripeComponent = ({ config }: { config: StripeConfig }) => {
	const { checkout } = useCheckout();

	const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
	const [loadingError, setLoadingError] = useState<string | null>(null);

	useEffect(() => {
		if (config?.data?.stripePublishableKey) {
			loadStripe(config.data.stripePublishableKey)
				.then((stripe) => setStripePromise(stripe))
				.catch((error) => {
					console.error("Error initializing Stripe:", error);
					setLoadingError("Failed to initialize payment system");
				});
		} else {
			console.error("Missing Stripe publishable key");
			setLoadingError("Missing payment gateway configuration");
		}
	}, [config?.data?.stripePublishableKey]);

	if (loadingError) {
		return <div className="text-red-500">{loadingError}</div>;
	}

	if (!stripePromise) {
		return <div>Loading payment system...</div>;
	}

	// Use base currency units (dollars) for both Stripe Elements and Saleor 
	// The Saleor Stripe app expects amounts in base currency units and will handle Stripe API conversion
	const amount = checkout.totalPrice.gross.amount;
	const currency = checkout.totalPrice.gross.currency?.toLowerCase() || "usd";
	
	// Debug logging for amount formatting
	console.log("Stripe Elements configuration:", {
		amount: amount,
		currency: currency,
		message: "Using base currency units (dollars) to match Saleor transaction initialization",
	});
	
	const stripeOptions: StripeElementsOptions = {
		mode: "payment",
		amount,
		appearance: { theme: "stripe" },
		currency,
	};

	return (
		<Elements options={stripeOptions} stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
};
