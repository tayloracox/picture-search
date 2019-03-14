import React from 'react';
import unsplash from '../api/unsplash.js'
import SearchBar from './SearchBar';
import ImageList from './ImageList.js'

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <h1>Picture Search</h1>
                <p>Search for an image below by typing in your search term and hitting the enter key.</p>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;