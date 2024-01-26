import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

// Constants
const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_SCOPES = "https://www.googleapis.com/auth/userinfo.email";

export default function SignIn() {
	const redirectToGoogleForAuthentication = () => {
		try {
			const redirectUri = encodeURIComponent(window.location.origin);
			const scope = encodeURIComponent(GOOGLE_SCOPES);
			const responseType = "token";
			const url = `${GOOGLE_AUTH_URL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

			window.location.href = url;
		} catch (error) {
			console.error("Error during sign-in:", error);
		}
	};

	return (
		<Button
			onClick={redirectToGoogleForAuthentication}
			variant={"outline"}
			size={"icon"}
		>
			<LogIn className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<LogIn className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	);
}