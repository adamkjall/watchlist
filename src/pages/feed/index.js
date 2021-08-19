import { useEffect, useState } from "react"

import MovieCard from "../../components/movieCard"

import { fetchPopularMovies, fetchTrendingMovies } from "../../lib/themoviedb"

export default function Feed() {
    const [popularMovies, setPopularMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])

    
    useEffect(() => {
        
    })

    return (
        <div>
            
        </div>
    )
}
