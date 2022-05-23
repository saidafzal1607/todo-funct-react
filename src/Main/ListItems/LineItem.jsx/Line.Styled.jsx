import styled from "styled-components";

export const StyledLine = styled.li`
    max-width:500px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    column-gap:10px;
    
    input[type=checkbox]{
        height:25px;
        width:25px
    }

    label{
        text-align:center;
    }
`