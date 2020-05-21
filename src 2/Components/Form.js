import React, { Component } from 'react';


export default class Form extends Component {


    render(){
        return (
            <div className="download-container w-container">
                <div className="download-wrapper">
                    <h3 className="h3">Our top recommendations. Your inbox.</h3>
                   
                    <form method="post" action="https://mc.us10.list-manage.com/subscribe/post" className="app-store-wrapper">
                        <input type="hidden" name="u" value="996c443c67aecf27290a79302"/>
                        <input type="hidden" name="id" value="413478499d"/>
                        <input type="email" required="" className="prelist-email" id="email" name="email" placeholder="Enter your email..."/>
                        
                        <button type="submit" className="prelist-submit">Subscribe</button>
                    </form>
                </div>
            </div>
        );
    }
}