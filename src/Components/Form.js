import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
    cursor: pointer;
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
`;

export default class Form extends Component {


    render(){
        return (
            <div className="download-container w-container">
                <div className="download-wrapper">
                    <h3 className="h3">Tell me what's in your mind?</h3>
                   
                    <Wrapper>
                        <input type="hidden" name="u" value="996c443c67aecf27290a79302"/>
                        <input type="hidden" name="id" value="413478499d"/>
                        <input type="text" required="" className="prelist-word" id="word" name="word" placeholder="Your words..."/>
                        
                        <button type="submit" className="prelist-submit">Share</button>
                    </Wrapper>
                </div>
            </div>
        );
    }
}