import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    background-color: #222;
`;

const LocationInput = styled.input`
    flex-grow: 1;
    border-width: 0 0 1px 0;
    margin: 15px 10px 15px 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: #333;
    border-style: none;
    text-shadow: none;
    text-transform: uppercase;
    color: #999;
    letter-spacing: 2px;
    outline: none;

    &:focus {
        background-color: #444;
    }
`;

const TypeInput = styled.input`
    flex-grow: 1;
    border-width: 0 0 1px 0;
    margin: 15px 10px 15px 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: #333;
    border-style: none;
    text-shadow: none;
    text-transform: uppercase;
    color: #999;
    letter-spacing: 2px;
    outline: none;

    &:focus {
        background-color: #444;
    }
`;

const SubmitInput = styled.input`
    display: block;
    font-size: .6em;
    margin: 15px 15px 15px 0; 
    padding: 10px;
    background-color: #333;
    border-radius: 5px;
    border: none;
    color: #999;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: none;
    text-transform: uppercase;

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
            onChange={e => setValue(e.target.value)}
            placeholder="Location"
          />
          <TypeInput
            type="text"
            value={info.type}
            onChange={e => setValue(e.target.value)}
            placeholder="Restaurant Type"
          />
          <SubmitInput type="submit" value="Search" />
        </Form>

    )
}
export default Search;