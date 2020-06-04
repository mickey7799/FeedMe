import React, {useContext} from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import {RecommendationContext} from '../contexts/RecommendationContext';
import Loader from './Loader';

const Wrapper = styled.div`
    display: flex; 
    margin-top: 20px;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1000px){
        display: flex; 
        margin-top: 20px;
        flex-direction: column;
        align-items: flex-start;
    }
    @media (max-width: 769px){
        height: auto;
    }
`;

const SearchWrapper = styled.div`
    flex-grow: 0.5;
    margin-bottom: auto;
    padding-top: 3%; 
    @media (max-width: 1000px){
        flex-grow: 0.5;
    }
    @media (max-width: 769px){
        flex-grow: 1;
        margin-bottom: auto;
        padding-top: 20%;
        margin: auto;
    }
`;

const LocationTitle = styled.div`
    flex-grow: 1;
    font-size: 28px;
    line-height: 1.3;
    font-family: Inter, sans-serif;
    color: #19B5FE;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0em 2em;
    @media (max-width: 1000px){
        font-size: 28px;
        line-height: 1.3;
        margin-bottom: 10px;
        margin-top: 0px;
    }
    @media (max-width: 769px){
        font-size: 38px;
        line-height: 1.3;
        margin-bottom: 20px;
        margin-top: 50px;
        text-align: center;
    }
    @media (max-width: 415px){
        font-size: 32px;
        line-height: 1.3;
        margin-bottom: 20px;
        margin-top: 50px;
    }
`;

const Rating = styled.div`
    flex-grow: 1.5;
    font-family: 'Inter', sans-serif;
    color: #5f6368;
    margin: 0em 1em 0em 1em;
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.6em;
    @media (max-width: 769px){
        margin-top: 32px;
        text-align: center;
    }
    @media (max-width: 360px){
        font-size: 0.8em; 
    }
`;

const Div = styled.div`
    margin: 0em 2em 0em 2em;
    font-family: Inter, sans-serif;
    font-weight: 600;
    color:#5f6368;
`;

const SearchView = () => {
    const { recommendations, loading } = useContext(RecommendationContext);

    return loading ? (
        <Loader/>
    ): (
        <Wrapper>
            <SearchWrapper> 
                <SearchForm/>
            </SearchWrapper>
            
            <LocationTitle>You're searching for a {recommendations.categories[0].title} restaurant</LocationTitle>
            <Rating>   
                <Div>There are {recommendations.review_count} reviews!!!</Div>
                <Div>The rating of this restaurant is {recommendations.rating}</Div>
                <Div>The price range of this restaurant is {recommendations.price}</Div>
            </Rating>                
                    
        </Wrapper>

    )
}
export default SearchView;