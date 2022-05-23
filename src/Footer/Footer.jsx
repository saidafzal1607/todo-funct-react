import React from 'react';
import { StyledTitle } from '../Styles/Title.Styled';
import StyledFooter from './Footer.Styled';

const Footer = ({length}) => {
    return (
        <StyledFooter>
            <StyledTitle>
                {length} list {length > 1 ? "items" : "item"} 
            </StyledTitle>
        </StyledFooter>
    );
};

export default Footer;