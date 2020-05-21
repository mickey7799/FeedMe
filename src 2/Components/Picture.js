import React, { Component } from 'react';
import axios from 'axios';

export default class Picture extends Component {
   state = {
      pic: []
   };

   componentDidMount() {
       axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res =>{
           const pic = res.data;
           this.setState({pic});
           
       })    
   }
   
   renderPic(pic){
       return(
        <div>
            <img src={pic.url} alt={pic.id}/>
        </div>
       );

   }

   render(){
       return (
           <div className='images'>
               {this.state.pic.map(pic => {
                   this.renderPic(pic)
               })}
           </div>
       );
   }
}