import React from 'react';
import Movies from "../components/movies";

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

    render()
{
    return (
        <main className='container content'>
            <Movies movies={this.state.movies}/>
        </main>
    );
}
}
;

export default Main;
