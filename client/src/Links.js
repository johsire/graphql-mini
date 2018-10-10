
import React, { Component } from 'react';
import gql from 'graphql-tag'

export default class Links extends Component {
   render() {
     return() {
       <div>
         Links will go here
       </div>
     }
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
