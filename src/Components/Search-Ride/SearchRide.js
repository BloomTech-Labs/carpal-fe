import React from 'react';
import './SearchRide.scss'

import SearchMap from './SearchMap';
import SearchInput from './SearchInput/SearchInput';

function SearchRide() {
    return (
        <div className='search-ride-container'>
            <div className='search-display'>
                <SearchInput />
            </div>
            <div className='map-search'>
                <SearchMap />
            </div>
        </div>
    )
}

export default SearchRide
