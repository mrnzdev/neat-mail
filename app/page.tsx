"use client";

import { useEffect } from "react";
import { Header } from "@/components/header";
import SignIn from "@/components/sign-in";

export default function Home() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.defer = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<Header />
			<SignIn />
		</>
	);
}
