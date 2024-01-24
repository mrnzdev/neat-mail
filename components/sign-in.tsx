import React from "react";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
export default function SignIn() {
	const handleSignIn = () => {
		const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
		const redirectUri = encodeURIComponent(
			window.location.origin + "/oauth2callback"
		);
		const scope = encodeURIComponent(
			"https://www.googleapis.com/auth/userinfo.email"
		);
		const responseType = "token";
		const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

		window.location.href = url;
	};

	return (
		<Button onClick={handleSignIn} variant={"outline"} size={"icon"}>
			<LogIn className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<LogIn className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	);
}
