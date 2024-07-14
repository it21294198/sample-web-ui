import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [
                { id: 0, result: 'hello' },
                { id: 1, result: 'world' },
                { id: 2, result: 'react' },
                { id: 3, result: 'search' }
            ],
            searchInput: ''
        };
    }

    // componentDidMount() {
    //     this.fetchSearchResults();
    // }

    // fetchSearchResults = () => {
    //     // Example API URL, replace with your actual API endpoint
    //     const apiUrl = `https://api.example.com/search?query=${this.state.searchInput}`;

    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ searchResult: data.results });
    //         })
    //         .catch(error => {
    //             console.error('Error fetching search results:', error);
    //         });
    // }

    // handleInputChange = (e) => {
    //     this.setState({ searchInput: e.target.value }, this.fetchSearchResults);
    // }

    handleInputChange = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        const { searchInput, searchResult } = this.state;
        const filteredResults = searchResult.filter(item =>
            item.result.toLowerCase().includes(searchInput.toLowerCase())
        );

        return (
            <div className='search-bar-container'>
                <input
                    type='text'
                    value={searchInput}
                    onChange={this.handleInputChange}
                />
                <ul className='search-result'>
                    { this.state.searchInput && filteredResults.map(item => (
                        <li className='search-result-item' key={item.id}>{item.result}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
