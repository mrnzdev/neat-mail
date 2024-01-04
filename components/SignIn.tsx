'use client'

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const SignIn = () => {
	const { data: session } = useSession();
	if (session && session.user) {
		return (
			<div>
				<p>{session.user.name}</p>
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
		);
	}
	return <button onClick={() => signIn()}>Sign In</button>;
};

export default SignIn;