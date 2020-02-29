import React, { Component } from 'react';
import { getRandomColor } from './helpers'
import './Box.css'

class Box extends Component {

    constructor(props){
        super(props);
        this.state = {color: getRandomColor()};
        this.handleClick = this.handleClick.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    
    setColor() {
        let newColor = getRandomColor();
        do {
        this.setState({ color: newColor });
        } while(newColor === this.state.color)
    }
    handleClick() {
          this.setColor();
      }

      render() {
          return (
              <div className = "Box" 
              style = {{backgroundColor: this.state.color}} 
              onClick={this.handleClick}>

              </div>
          );
      }

      
}

export default Box;