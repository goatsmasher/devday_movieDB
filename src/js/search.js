const searchBar = document.getElementById("search-bar");
const displayArea = document.getElementById("results");

let searchValue = "";


const handleSearchChange = (input) => {
	searchValue = input.target.value;
	populateMovies(searchValue);
};

async function populateMovies(input) {
	const route = await getRoutes();
	const APIKEY = await getAPIKey();
	const query = route + APIKEY + "&query=" + input;
	populateSearchResults(query);
}

const getRoutes = () => {
	return fetch("./../src/config/API_KEYS.json")
		.then(toJson)
		.then(returnEndpoint)
		.catch(errorHandling);
};

const getAPIKey = () => {
	return fetch("./../src/config/API_KEYS.json")
		.then(toJson)
		.then(getAPIKEY)
		.catch(errorHandling)
};

const toJson = (response) => {
	return response.json();
};

const getAPIKEY = (input) => {
	return input.API_KEY;
}

const returnEndpoint = (response) => {
	return response.ENDPOINT.SEARCH;
};

const populateSearchResults = (input) => {
	fetch(input)
		.then(toJson)
		.then(spreadResults)
		.then(populatePageWithResults)
		.catch(errorHandling)
};

const spreadResults = input => {
	return input.results;
};

const createStarRating = () => {

}

const populatePageWithResults = input => {
	if (input) {
		displayArea.innerHTML = "";
		input.map(element => {

			const rowNode = document.createElement("img");
			rowNode.setAttribute("src", "https://image.tmdb.org/t/p/w500/" + element.poster_path);
			rowNode.className = "poster-element";
			displayArea.appendChild(rowNode);
		});
	}
};

const errorHandling = (error) => {
	alert(error);
};

searchBar.addEventListener("keyup", handleSearchChange);