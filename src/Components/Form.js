import React, { Component } from 'react';


export default class Form extends Component {


    render(){
        return (
            <div className="download-container w-container">
                <div className="download-wrapper">
                    <h3 className="h3">Tell me what's in your mind?</h3>
                   
                    <form  className="app-store-wrapper">
                        <input type="hidden" name="u" value="996c443c67aecf27290a79302"/>
                        <input type="hidden" name="id" value="413478499d"/>
                        <input type="text" required="" className="prelist-word" id="word" name="word" placeholder="Your words..."/>
                        
                        <button type="submit" className="prelist-submit">Share</button>
                    </form>
                </div>
            </div>
        );
    }
}