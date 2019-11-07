import React from 'react';

const SearchPanel = () => {
    const search_placrholder = 'Click here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return <input placeholder = {
        search_placrholder
    }
    style = {
        searchStyle
    }
    />;
};

export default SearchPanel;