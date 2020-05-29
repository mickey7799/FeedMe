import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Company from './Components/Company';
import Chef from './Components/Chef';
import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';

export default class App extends Component {
  // state = {
  //   chef: {
  //     name: "Tom Nijam",
  //     title: "Exec Chef of KFC",
  //     profileUrl: "https://d1qb2nb5cznatu.cloudfront.net/users/8627618-medium_jpg?1543043897",
  //     comment:"\"Without the doubt, the best chicken you ever eat\"",
  //     url: "https://res.cloudinary.com/hksqkdlah/image/upload/s--C9EcOChh--/c_scale,dpr_2.0,f_auto,h_172,q_auto:low,w_172/34448_sfs-north-carolina-dipped-fried-chicken-18"
  //   }
  // }
  state = {
    chef: null
  }
  
  
  componentDidMount() {

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${options[3]}`, 
    {headers: {
       Authorization: `Bearer ${apiKey}`
    }}).then(res =>{      
        const chef = res.data;
        console.log(chef)
        this.setState({chef: chef.businesses});
        
    }) .catch((err) => {
      console.log ('error')
    })
  
    // axios.get(`https://api.staging.hfg.clients.pipelabs.com.au/recommendation?skip=0&limit=1`,
    //   { headers: {"Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNTIxYjUzNTEzYmY4YzM2OThjZWY5NiIsImVtYWlsIjoibWF0dEBwaXBlbGFicy5jb20uYXUiLCJmaXJzdE5hbWUiOiJNYXR0IiwibGFzdE5hbWUiOiJIYXl3YXJkIiwiZnVsbE5hbWUiOiJNYXR0IEhheXdhcmQiLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE1NDk2ODk3NjcsImV4cCI6MTU4MTIyNTc2N30.gn97HUgo9jAOs1Mr9L_AQFaHTzXzykv_PXLuBh_i26k'} })
    //   .then(res => {
    //     const chef = res.data;
    //     this.setState({ chef: chef.recommendations[0] });
    //     console.log(chef.recommendations[0]);
    //   })
  }

  render() {
    if(this.state.chef===null){
      return (
      <div className="App-header App">
        Loading...
      </div>)
    }else{
    return (
      <div>
          <Header/>
          <div className="flex-container-row all-container">
            <Chef className="chef-container"
            name= {this.state.chef.author.fullName}
            
            profileUrl= {this.state.chef.author.profilePicture}
            comment={this.state.chef.text}
            url={this.state.chef.photos[0].url}  
            website={this.state.chef.venue.website} 
            venue={this.state.chef.venue.name}
            />
            <Company className="company-container" />
          </div>
          <div id="Download" className="download">
            <Form/>
          </div>
          <Footer/>
      </div>
    )}
  }
}