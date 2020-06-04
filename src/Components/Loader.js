import React from 'react';
import styled from 'styled-components';

const Load = styled.div`
    display: flex;
    height: auto;
    width: 355px;
    margin: auto;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    border: 0.75px solid #e5e5e5;
    border-radius: 7px;
    background-color: #fcfcfc;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);
    @media (max-width: 1000px){
        width: 275px;
    }
    @media (max-width: 769px){
        min-width: 400px;
        width: 70%;
        flex: 1 1 50%;
    }
    @media (max-width: 415px){
        min-width: 330px;
        width: 70%;
    }
    @media (max-width: 360px){
        min-width: 275px;
        width: 70%;
    }

`;

const Loader = () => {
  return (
    <Load> Loading... </Load>
  );
}

export default Loader;