import React, { Component } from 'react';

export default class TechList extends Component {
  state = {
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  render() {
    console.log(this.state)
    return(
      <ul>
      </ul>
    )
  }
};
