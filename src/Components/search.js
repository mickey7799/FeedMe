import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    position: center;
    margin: 1em 2em;
    display: flex;
    background-color: #19B5FE;
`;

const LocationInput = styled.input`
    flex-grow: 1;
    border-width: 0 0 1px 0;
    margin: 15px 10px 15px 15px;
    padding: 10px;
    background-color: #FFFFFF;
    border-style: none;
    text-shadow: none;
    color: #5f6368;
    outline: none;

    &:focus {
        background-color: 	#F8F8F8;
    }
`;

const TypeInput = styled.input`
    flex-grow: 1;
    border-width: 0 0 1px 0;
    margin: 15px 10px 15px 15px;
    padding: 10px;
    background-color: #FFFFFF;
    border-style: none;
    text-shadow: none;
    color: #5f6368;
    outline: none;

    &:focus {
        background-color: 	#F8F8F8;
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
        background: #4b71b5;
        color: #fafafa;
        cursor: pointer;
    }
`;


function Search(){

    const [info, setInfo] = useState(
        {
            location: '',
            type: ''
        }
    );

    const handleSubmit = e => {
        e.preventDefault();
        if(!info) return;
        setInfo(info);
    }

    return (
        <Form onSubmit={handleSubmit}>
          <LocationInput
            type="text"
            value={info.location}
            onChange={e => setInfo(e.target.value)}
            placeholder="Location"
          />
          <TypeInput
            type="text"
            value={info.type}
            onChange={e => setInfo(e.target.value)}
            placeholder="Restaurant Type"
          />
          <SubmitInput type="submit" value="Search" />
        </Form>

    )
}
export default Search;