import React from 'react';
import {FaPlus} from 'react-icons/fa'
import { StyledAddItem } from './AddItem.Styled';
import { useRef } from 'react';
 
const AddItem = ({handleSubmit, newItem, setNewItem}) => {

    const inputRef = useRef('');

    return (
        <StyledAddItem onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Add Task'
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}
                ref={inputRef}
                
            />
            <FaPlus
                role="button"
                className='plus-btn'
                onClick={handleSubmit}
                onChange={()=>inputRef.current.focus()}
            />
        </StyledAddItem>
    );
};

export default AddItem;