
import React, { Component } from 'react';
import gql from 'graphql-tag';
import axios from 'axios';


export default class Links extends Component {
  componentDidMount() {
        axios({
            method: "POST",
            url: "http://localhost:4000/",
            data:{
               query: LINKS_QUERY
            }
        }).then((response) => {
            console.log(response.data)
        })
  }

    render() {
      return(
        <div>
          Links will go here
        </div>
      )
    }
 }

 const LINKS_QUERY = gql `
   query linksQuery {
     links {
       id
       url
       description
     }
   }
`
