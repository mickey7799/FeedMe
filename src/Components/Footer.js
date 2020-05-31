import React, { Component } from 'react';

export default class Footer extends Component{

    render(){
        return (
            <div id="Footer" className="footer">
                <div className="footer-container w-container">
                    <div className="footer-wrapper-top">
                        <a href="/" className="w-inline-block w--current">
                            <img src="/images/cupcake.svg" width="160" height="44" alt="" className="cake-logo"/>
                            
                             
                        </a>
                        <a href="mailto:hic.ch.ntu@gmail.com" className="link">Contact</a>
                        <a  href="https://www.instagram.com/yelp/?hl=en" target="_blank" rel="noopener noreferrer" className="Footer__InstagramLink-sc-1mb098p-0 bBdLAF">
                            <img src="/images/instagram.svg"/>
                        </a>
                        <div className="text-block">© 2020 Vickey Lee</div>
                    </div>
                </div>
            </div>
        );
    }
}