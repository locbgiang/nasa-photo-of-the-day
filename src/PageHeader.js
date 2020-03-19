import React from "react";
import "./PageHeader.css";
import styled from 'styled-components';

const HeaderWrapDiv = styled.div`
    background-color: white;
    width:1500px;
    height:120px;
    margin: 0 auto;
    
    display:flex;
    align-items:center;
    justify-content:center;
`;

const HeaderTextH1 = styled.h1`
`;



const PageHeader = props =>{
    return(
        <section className='header'>
            <HeaderWrapDiv>
                <HeaderTextH1>NASA NEWS</HeaderTextH1>
            </HeaderWrapDiv>
        </section>
    )
}

export default PageHeader;