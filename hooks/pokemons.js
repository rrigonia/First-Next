const fetchPokemonData = async pokemon => {
	const url = pokemon.url;
	const alldata = await fetch(url);
	const pokeData = await alldata.json();
	return pokeData;
};

async function nextPokemons(url, chgSt, dataSt) {
	const res = await fetch(url);
	const json = await res.json();
	let newPokemons = [];
	for (let i = 0; i < json.results.length; i++) {
		const data = await fetchPokemonData(json.results[i]);
		newPokemons.push(data);
	}
	chgSt(newPokemons);
	dataSt(json);
}
async function previousPokemons(url, chgSt, dataSt) {
	const res = await fetch(url);
	const json = await res.json();
	let newPokemons = [];
	for (let i = 0; i < json.results.length; i++) {
		const data = await fetchPokemonData(json.results[i]);
		newPokemons.push(data);
	}
	chgSt(newPokemons);
	dataSt(json);
}

export { fetchPokemonData, nextPokemons, previousPokemons };
