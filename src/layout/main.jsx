import React from 'react';
import Movies from "../components/movies";
import Search from "../components/search"
import Preloader from "../components/preloader";

class Main extends React.Component {
    state = {
       movies: [],
    }
    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=a58b43b1&s=matrix")
            .then(response => response.json())
            .then(data => {
                this.setState({movies: data.Search})
            })
    }

    movieSearch = (movie) => {
        fetch(`http://www.omdbapi.com/?apikey=a58b43b1&s=${movie}`)
            .then(response => response.json())
            .then(data => {
                this.setState({movies: data.Search})
            })
    }

    render() {
        const {movies} = this.state;
    return (
        <main className='container content'>
            <Search movieSearch={this.movieSearch}/>
            {
                movies.length ? (<Movies movies={this.state.movies}/>) : <Preloader />
            }
        </main>
    )
}
}
;

export default Main;
