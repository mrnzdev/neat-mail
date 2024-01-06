import React from 'react';
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className='flex justify-between'>
			<h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>
				<Link href={'/'}>Neat Mail</Link>
			</h1>
			<ModeToggle />
		</header>
	);
};
