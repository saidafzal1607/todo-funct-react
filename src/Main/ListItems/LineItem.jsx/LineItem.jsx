import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import { StyledLine } from './Line.Styled';


const LineItem = ({item, handleChecked, handleDelete}) => {
    return (
        

        <StyledLine>
        <input 
            type="checkbox" 
            checked={item.checked}
            onChange={()=>handleChecked(item.id)}
        />
        <label
            style={item.checked ? {textDecoration:'line-through'}:null}
            onDoubleClick={()=>handleChecked(item.id)}
        >
            {item.task}
        </label>
        <FaTrashAlt
            className='trash-btn'
            role="button"
            onClick={()=>handleDelete(item.id)}
        />
    </StyledLine>
    );
};

export default LineItem;