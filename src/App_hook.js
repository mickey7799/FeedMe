import React, { Component, useState } from 'react';
import './App.css';
//import axios from 'axios';
//import { apiKey } from "./Components/config";
import Company from './Components/Company';
import Chef from './Components/Chef';
import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App(){
    const [recommendation, setRecommendation] = useState(
        {
            name: "Tom Nijam",
            title: "Exec Chef of KFC",
            profileUrl: "https://d1qb2nb5cznatu.cloudfront.net/users/8627618-medium_jpg?1543043897",
            comment:"\"Without the doubt, the best chicken you ever eat\"",
            url: "https://res.cloudinary.com/hksqkdlah/image/upload/s--C9EcOChh--/c_scale,dpr_2.0,f_auto,h_172,q_auto:low,w_172/34448_sfs-north-carolina-dipped-fried-chicken-18",
            categories: [{title:'breakfast'}]
        }
    );

    if(recommendation===null){
        return (
        <div className="App-header App">
          Loading...
        </div>
        )
    }else{
      return (
        <div>
            <Header/>
            <div className="flex-container-row all-container">
              <Chef className="chef-container"
              name= {recommendation.name}
              title = {recommendation.title}
              profileUrl= {recommendation.profileUrl}
              comment={recommendation.comment}
              url={recommendation.url}  
              website={recommendation.url}
              categories = {recommendation.categories}
              />
              <Company className="company-container" />
            </div>
            <div id="Download" className="download">
              <Form/>
            </div>
            <Footer/>
        </div>
      )
    }
    
}

export default App;