const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p";

export const fetchTrendingMovies = async () => {
  return await makeRequest("/trending/movie/week");
};

export const fetchPopularMovies = async () => {
    return await makeRequest("/discover/movie", "&sort_by=popularity.desc")
}

const makeRequest = async (path = "", params = "") => {
  try {
    const res = await fetch(
      `${BASE_URL}${path}?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}${params}&language=en-US&include_adult=false&include_video=false`
    );
    const data = await res.json();
    if (data && data.status_code) throw data;
    return data.results;
  } catch (error) {
    console.log("TMDB request error", error);
    return [];
  }
};
