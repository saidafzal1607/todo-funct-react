import styled from "styled-components";

export const StyledAddItem = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:15px 25px;
    

    input{
        flex-grow:1;
        font-size:20px;
        padding:5px;
        border-radius:5px;
    }

    .plus-btn{
        cursor:pointer;
        border-radius:5px;

        margin-left:10px;
        border:1px solid #000;
        height:35px;
        width:35px;
        padding:5px;
    }
`