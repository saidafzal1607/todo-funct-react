import React from 'react';
import { StyledTitle } from '../Styles/Title.Styled';
import { StyledHeader } from './Header.styled';

const Header = ({title}) => {
    return (
        <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
        </StyledHeader>
    );
};

export default Header;