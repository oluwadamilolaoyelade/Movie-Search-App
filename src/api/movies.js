import axios from "axios";

const baseUrl = "http://www.omdbapi.com/";
const apiKey = "8737c3d3";

function searchMovie(searchPhrase, page = 1) {
  return axios.get(
    `${baseUrl}?apikey=${apiKey}&s=${searchPhrase}&page=${page}`
    );
}
function getSingleMovie(movieId){
  return axios.get(`${baseUrl}?apikey=${apiKey}&i=${movieId}`)
}
export { searchMovie};
export { getSingleMovie };
