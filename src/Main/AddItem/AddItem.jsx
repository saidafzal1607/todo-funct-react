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
            <button
            type='submit'
            className='plus-btn'
            onClick={()=>inputRef.current.focus()}
            
            >
                <FaPlus/>

            </button>
        </StyledAddItem>
    );
};

export default AddItem;