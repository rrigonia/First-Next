import Link from 'next/link';
import * as styles from '../styles';
import { nextPokemons, previousPokemons } from '../hooks/pokemons';

const Nav = ({ next, previous, changeData, changePok }) => {
	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<span className={`${styles.link} bg-red-400 border-red-600`}>
					Pokedex
				</span>
			</Link>

			<button
				onClick={() => nextPokemons(next, changePok, changeData)}
				className={styles.link}
			>
				Next
			</button>

			<button
				disabled={previous ? null : true}
				onClick={() => previousPokemons(previous, changePok, changeData)}
				className={previous ? styles.link : styles.disabled}
			>
				Previous
			</button>
		</nav>
	);
};

export { Nav };
