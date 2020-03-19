import React from "react";
import "./PageBody.css";
import styled from 'styled-components';

const BodyWrapDiv = styled.div`
    background-color: white;
    width:1500px;
    margin: 20px auto;
`;
const BodyTopDiv = styled.div`
    display: flex;
    flex-direction: column;

    div{
        width: 25%;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items:flex-start;

    }
`;

const BodyMainDiv = styled.div`
    display: flex;
    img{
        margin-left: 10px;
        width:700px;
        height:700px;
    }
    p{
        margin-left: 10px;
        text-align:left;
        font-size:20px;
    }
`;


const PageBody = props => {
    return (
        <BodyWrapDiv>
            <BodyTopDiv>
                <h1>{props.title}</h1>
                <div>
                    <h3>By: {props.author}</h3>
                    <h4>{props.date}</h4>
                </div>
            </BodyTopDiv>
            <BodyMainDiv>
                <img src={props.image} />
                <p>{props.article}</p>
            </BodyMainDiv>
        </BodyWrapDiv>
    )
}

export default PageBody;