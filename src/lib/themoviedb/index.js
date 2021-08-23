const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p";

const makeRequest = async (path = "", params = "") => {
  try {
    const res = await fetch(
      `${BASE_URL}${path}?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}${params}&language=en-US&include_adult=false&include_video=false&vote_count.gte=20&vote_average.gte=4&with_runtime.gte=60`
    );
    const data = await res.json();
    if (data && data.status_code) throw data;
    return data;
  } catch (error) {
    console.log("TMDB request error", error);
    return [];
  }
};

const fetchTrendingMovies = async (page = 1) => {
  const data = await makeRequest("/trending/movie/week", `&page=${page}`);
  return data.results;
};

const fetchPopularMovies = async (page = 1) => {
  const data = await makeRequest(
    "/discover/movie",
    `&sort_by=popularity.desc&page=${page}`
  );
  return data.results;
};

const fetchNewMovies = async (page = 1) => {
  const data = await makeRequest(
    "/discover/movie",
    `&sort_by=primary_release_date.desc&page=${page}`
  );
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const data = await makeRequest(
    `/movie/${id}`,
    "&append_to_response=videos,reviews"
  );
  return data;
};

export const fetchMovies = async (
  category = "Trending",
  page = 1,
  query = ""
) => {
  switch (category) {
    case "Trending":
      return await fetchTrendingMovies(page);
    case "Popular":
      return await fetchPopularMovies(page);
    case "New":
      return await fetchNewMovies(page);
    default:
      return await fetchPopularMovies(page);
  }
};
