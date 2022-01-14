import React, { Component } from 'react';
import './Box.css';
class Box extends Component{ 
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
this.props.remove(this.props.di.id);
    }
    render(){
        const {di,isAdded}=this.props;
        let test=isAdded&&di.width!==''?'Box-show':'Box-hide'
        return(
           <div className="Box">
           <div
           style={{ 
               width:`${di.width}px`,
               height: `${di.height}px`,
               backgroundColor:di.backgroundColor
        }}></div>
            
            <button className={`Box-btn ${test}`} onClick={this.handleClick}>x</button>
            </div>
        )
    }

}



export default Box;