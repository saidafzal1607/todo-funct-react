import React from 'react';
import { StyledSearchItem } from './SearchItem.Styled';

const SearchItem = ({search, setSearch}) => {
    return (
        <StyledSearchItem onSubmit={(e)=>e.preventDefault()}>
            <input 
                type="text" 
                placeholder='Search item'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </StyledSearchItem>
    );
};

export default SearchItem;