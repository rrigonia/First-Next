import Link from 'next/link';

import { nextPokemons, previousPokemons } from '../hooks/pokemons';

const link =
	'py-10 uppercase text-white transition-colors duration-200 text-lg font-bold bg-red-500 rounded-lg mb-5 px-8 text-center w-full border-l-8 border-r-8 border-transparent cursor-pointer hover:bg-red-400 hover:border-red-600';
const activeLink =
	'py-10 uppercase text-white transition-colors duration-200 text-lg font-bold bg-red-400 rounded-lg mb-5 px-8 text-center w-full border-l-8 border-r-8 border-red-600 cursor-pointer';
const disabled =
	'py-10 uppercase cursor-default text-gray-300 transition-colors duration-200 text-lg font-bold bg-gray-400 rounded-lg mb-5 px-8 text-center w-full border-l-8 border-r-8 border-gray-500';
const nav = ' bg-none flex flex-col items-center justify-center';

const Nav = ({ next, previous, changeData, changePok }) => {
	return (
		<nav className={nav}>
			<Link href='/'>
				<span className={`${activeLink} `}>Pokedex</span>
			</Link>

			<button
				onClick={() => nextPokemons(next, changePok, changeData)}
				className={link}
			>
				Next
			</button>

			<button
				disabled={previous ? null : true}
				onClick={() => previousPokemons(previous, changePok, changeData)}
				className={previous ? link : disabled}
			>
				Previous
			</button>
		</nav>
	);
};

export { Nav };
