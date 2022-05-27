import React from 'react';
import AddItem from './AddItem/AddItem';
import ListItems from './ListItems/ListItems';
import { StyledMain } from './Main.styled';
import SearchItem from './SearchItem/SearchItem';

const Main = ({items, newItem, setNewItem, handleSubmit, handleChecked, handleDelete, search, setSearch}) => {





    return (
        <StyledMain >
            <div className="wrapper">

            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem
                search={search}
                setSearch={setSearch}
            />
            <ListItems
            items={items.filter(item=>((item.task).toLowerCase().includes(search.toLowerCase())))}
            
            handleChecked={handleChecked}
            handleDelete={handleDelete}
            />
            </div>


        </StyledMain>
    );
};

export default Main;