import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
    }

    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.movieSearch(this.state.search)
        }
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
                    onClick={() => this.props.movieSearch(this.state.search)}
                >Search</a>
            </div>
        </div>
    }
}

export default Search;