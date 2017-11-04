const recommendationSection = document.getElementById("movie-recommendations-conent");

const populateMoviePopular = () => {
	fetch("./../src/config/API_KEYS.json")
		.then(toJson)
		.then(apiCall_POPULAR)
		.catch(errorHandling);
};

const apiCall_POPULAR = (response) => {
	console.log(response.ENDPOINT.POPULAR);
};


const toJson = (response) => {
	return response.json();
};

const errorHandling = (error) => {
	alert(error);
};
