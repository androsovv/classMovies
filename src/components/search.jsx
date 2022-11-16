import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: '',
    }

    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.movieSearch(this.state.search, this.state.type)
        }
    }
    handleType = (event) => {
        this.setState(() => ({type: event.target.value}), () => {
            this.props.movieSearch(this.state.search, this.state.type);
        });
    }

    render() {
        return <div className="row">
            <div className="col s12">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                <a
                    className="waves-effect waves-light btn"
                    onClick={() => this.props.movieSearch(this.state.search, this.state.type)}
                >Search</a>
                <div className="types">
                    <label>
                        <input name="all" type="radio" value='' onChange={this.handleType}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input name="all" type="radio" value='movie'  onChange={this.handleType}/>
                        <span>Movies</span>
                    </label>
                    <label>
                        <input name="all" type="radio" value='series'  onChange={this.handleType}/>
                        <span>Series</span>
                    </label>

                </div>
            </div>
        </div>
    }
}

export default Search;