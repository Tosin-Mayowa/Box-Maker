import React, { Component } from 'react';
import './NewBoxForm.css'
import { v4 as uuidv4 } from 'uuid';
class NewBoxForm extends Component{
    constructor(props){
        super(props);
        this.state={width:'', height:'', backgroundColor:''}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

handleChange(e){
this.setState({
    [e.target.name]:e.target.value
})
}

handleSubmit(e){
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({width:'', height:'', backgroundColor:'', id:uuidv4()})

}


    render(){
        const {isAdded}=this.props;
        return(
            <form onSubmit={this.handleSubmit}  className='NewFormBox'>
             <div id='Form1' >
             <label htmlFor="widt">Width:</label> 
              <input type="text" name='width' value={this.state.width} onChange={this.handleChange}/>
               </div>
              <div id='Form2'>
              <label htmlFor="widt">height:</label> 
              <input type="text" name='height' value={this.state.height} onChange={this.handleChange}/>
              </div>
             <div id='Form3'>
             <label htmlFor="widt">BackgroundColor:</label> 
              <input type="text" name='backgroundColor' value={this.state.backgroundColor} onChange={this.handleChange} />
            </div>
              
            <div id='Form4'>
            <button>Submit</button>
            </div>
            </form>
        )
    }
}

export default NewBoxForm;