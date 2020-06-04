import React from 'react';
import './App.css';
import SearchView from './components/SearchView';
import Recommendation from './components/Recommendation';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import styled from 'styled-components';
import RecommendationContextProvider from "./contexts/RecommendationContext";


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5% auto 3%;
    max-width: 1000px;
    @media (max-width: 1000px){
        margin: 4% 3% -20px;   
    }
    @media (max-width: 769px){
        margin: auto;
    }
    @media (max-width: 360px){
        margin: 3px;
    }
    

`;

const ShareWrapper = styled.div`
    height: auto;
    padding: 80px 0px;
    background-color: #19B5FE;
    @media (max-width: 769px){
        margin-top: 30px;
        padding: 60px 0px;
    }
    
`;

const App = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <RecommendationContextProvider>
          <Recommendation />
          <SearchView />
        </RecommendationContextProvider>
      </Wrapper>
      <ShareWrapper>
        <Form />
      </ShareWrapper>
      <Footer />
    </div>
  )
}



export default App;