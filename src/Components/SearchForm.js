import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {RecommendationContext} from '../contexts/RecommendationContext';

const Form = styled.form`
    margin: 1em 2em 0em 2em;
    display: flex;
    background-color: #19B5FE;
`;

const LocationInput = styled.input`
    flex-grow: 1;
    border-width: 0 0 1px 0;
    margin: 15px 10px 15px 15px;
    padding: 10px;
    background-color: #F8F8F8;
    border-style: none;
    text-shadow: none;
    color: #5f6368;
    outline: none;

    &:focus {
        background-color: #FFFFFF;
    }
`;

const TypeInput = styled.input`
    flex-grow: 1;
    border-width: 0 0 1px 0;
    margin: 15px 10px 15px 15px;
    padding: 10px;
    background-color: #F8F8F8;
    border-style: none;
    text-shadow: none;
    color: #5f6368;
    outline: none;

    &:focus {
        background-color:#FFFFFF;
    }
`;

const SubmitInput = styled.input`
    display: block;
    font-size: 1em;
    margin: 15px 15px 15px 15px; 
    padding: 10px;
    background-color: #E34B44;
    border: none;
    color: #FFFFFF;
    font-weight: bold;
    text-shadow: none;

    &:hover {
        background: #F22613;
        color: #fafafa;
        cursor: pointer;
    }
`;


const SearchForm = () => {
    const { runSearch } = useContext(RecommendationContext);

    const [location, setLocation] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!location||!type) return;
        runSearch(location, type);
        setLocation('');
        setType('');
    }

    return (
        <Form onSubmit={handleSubmit}>
          <LocationInput
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Location (Melbourne)"
          />
          <TypeInput
            type="text"
            value={type}
            onChange={e => setType(e.target.value)}
            placeholder="Type (Breakfast)"
          />
          <SubmitInput type="submit" value="Search" />
        </Form>

    )
}
export default SearchForm;