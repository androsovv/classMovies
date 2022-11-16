import React from 'react';
import Movies from "../components/movies";
import Search from "../components/search"
import Preloader from "../components/preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                this.setState({movies: data.Search, loading: false})
            })
    }

    movieSearch = (movie, type = '') => {
        this.setState({loading: true});
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}${type !== '' ? `&type=${type}` : ''}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({movies: data.Search, loading: false})
                })
}

render()
{
    const {movies, loading} = this.state;
    return (
        <main className='container content'>
            <Search movieSearch={this.movieSearch}/>
            {
                loading ? <Preloader/> : (<Movies movies={movies}/>)
            }
        </main>
    )
}
}
;

export default Main;
