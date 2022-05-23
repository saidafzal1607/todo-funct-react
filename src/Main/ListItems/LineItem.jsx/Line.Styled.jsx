import styled from "styled-components";

export const StyledLine = styled.li`
    max-width:500px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    column-gap:10px;
    margin:10px 0;
    
    input[type=checkbox]{
        min-height:25px;
        min-width:25px
    }

    .trash-btn{
        min-height:25px;
        min-width:25px;
        cursor:pointer;
        transition:.5s ease;
    }

    .trash-btn:hover{
        color:red;
    }

    label{
        text-align:center;
    }
`