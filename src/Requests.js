const key = 'b1e9dc3c84419a1ea8c1b5225836a5b1'

const requests = {
        Popular:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
        HorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
        trending:`https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
        Toprated: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
        Upcoming: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`
};

export default requests