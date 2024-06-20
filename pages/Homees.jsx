import React, { useState, useEffect, Component } from "react"
import { Link } from "react-router-dom";
import PhotoContainer from "../PhotoContainer";

export default class Homees extends Component {
  constructor(){
    super();
    this.state={
      photos:[]
    };
  }

  
  componentDidMount(){
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
        .then(response =>{
          console.log('responce', response);
          if(!response.ok){
            throw Error("enter fetching");
          }
          return response.json()
          .then(allData =>{
            this.setState({photos:allData});

          })
          .catch(err =>{
            throw Error(err.message);
          });
      
      }
    );
  }


  
 render() {
  return (
    <section className="app">
      <p>it is working</p>
      <PhotoContainer photos={this.state.photos}/>
    </section>
 
  );
 }
}