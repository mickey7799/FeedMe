import React, { useContext  } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import styled from 'styled-components';
import {RecommendationContext} from '../contexts/RecommendationContext';
import Loader from './Loader';

const Card = styled.div`
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
    @media (max-width: 769px){
        margin-top: 5em;
        min-width: 353.5px;
    }
`;

const Wrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    @media (max-width: 769px){
        margin-bottom: 15px;
        padding-top: 25px;
        padding-right: 25px;
        padding-left: 25px;
    }
    @media (max-width: 415px){
        padding-right: 10px;
        padding-left: 10px;
    }
    @media (max-width: 360px){
        padding-right: 10px;
        padding-left: 10px;
    }
`;

const Profile = styled.div`
    border-radius: 100%;
    width: 75px;
    height: 75px;
    background-size: cover;
    background-position: center;
    background-image: url("images/child.svg");
    @media (max-width: 769px){
        width: 100px;
        height: 100px;
    }
`;
const InfoWrapper = styled.div`
    margin-left: 20px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    max-width: 250px;
    @media (max-width: 769px){
        margin-left: 25px;
        max-width: 250px;
    }
    @media (max-width: 415px){
        margin-left: 10px;
        max-width: 200px;
    }
    @media (max-width: 360px){
        margin-left: 10px;
        max-width: 150px;
    }
`;

const Name = styled.div`
    margin-bottom: 5px;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 769px){
        font-size: 24px;
        font-weight: 500;
    }
`;

const Description = styled.span`
    font-family: Inter, sans-serif;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const DescriptionWrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    font-family: 'Inter beta', sans-serif;
    font-weight: 300;
    @media (max-width: 769px){
        margin-top: 10px;
    }
`;

const Commnet = styled.div`
    -webkit-box-orient: vertical;
    margin-top: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
    font-family: 'Inter beta', sans-serif;
    font-weight: 300;
    font-size: 14px;
    display: -webkit-box;
    max-width: 400px;
    height: 5em;
    @media (max-width: 769px){
        margin-right: 25px;
        margin-bottom: 25px;
        margin-left: 25px;
        font-size: 16px;
        font-weight: 300;
    }
    @media (max-width: 360px){
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const FoodImg = styled.div`
    width: 353.5px;
    height: 353.5px;
    margin-top: auto; 
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    background-image: url(${props => props.url});
`;

const Recommendation = () => {
    const {recommendations, loading} = useContext(RecommendationContext);
    
    return loading ? (
        <Loader/>
    ): (
        <Card>
            <Wrapper>
                <Profile />
                <InfoWrapper>
                    <Name>{recommendations.name}</Name>
                    <DescriptionWrapper>
                        <div>Food expert of</div>
                        <Description> {recommendations.categories[0].title} </Description>
                    </DescriptionWrapper>
                </InfoWrapper>
            </Wrapper>
            <Commnet>
                <LinesEllipsis
                    text={'This fantastic restaurant is a ' + recommendations.categories[0].title + ' restaurant! It received ' + recommendations.review_count + ' reviews and got a rating of ' + recommendations.rating + ". Come and try it!"}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                />
            </Commnet>
            <FoodImg url={recommendations.image_url} />
            
        </Card>

    )
}

export default Recommendation;