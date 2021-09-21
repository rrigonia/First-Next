import Head from 'next/head';
import * as styles from '../styles';
import { Nav } from '../components/nav';
import { PokeCard } from '../components/pokemon-lib';
import * as React from 'react';
import { fetchPokemonData } from '../hooks/pokemons';

export default function Home({ newPokemons, json }) {
	const [ data, setData ] = React.useState(json);
	const [ changedPokemons, setChangedPokemons ] = React.useState(null);
	const pokemons = changedPokemons || newPokemons;

	return (
		<div>
			<Head>
				<title>PokeApi Ex</title>
			</Head>
			<main className='bg-gray-200 h-screen'>
				<header className=''>
					<div className={styles.headerContainer}>
						<h5 className='ml-4'>PokeApi</h5>
					</div>
				</header>
				<div className='grid grid-cols-4 gap-4 my-20 mx-40'>
					<Nav
						next={data.next}
						previous={data.previous}
						changePok={setChangedPokemons}
						changeData={setData}
					/>
					<section
						style={{ maxHeight: 500 }}
						className='w-3/4 bg-red-500 rounded-lg col-span-3 overflow-auto mx-auto'
					>
						{pokemons.map(poke => <PokeCard key={poke.name} {...poke} />)}
					</section>
				</div>
			</main>
		</div>
	);
}

export async function getStaticProps(ctx) {
	let baseURL = 'https://pokeapi.co/api/v2/pokemon/';

	const res = await fetch(baseURL);
	const json = await res.json();
	let newPokemons = [];
	for (let i = 0; i < json.results.length; i++) {
		const data = await fetchPokemonData(json.results[i]);
		newPokemons.push(data);
	}

	return {
		props: {
			newPokemons,
			json
		}
	};
}
