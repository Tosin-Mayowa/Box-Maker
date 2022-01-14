import React,{Component} from 'react';
import NewBoxForm from '../NewBoxForm/NewBoxForm';
import Box from '../Box/Box';
import './BoxList.css';
import { v4 as uuidv4 } from 'uuid';
class BoxList extends Component{
    constructor(props){
super(props);
this.state={
  di:[{width:'', height:'', backgroundColor:'', id:uuidv4()} ],
  isAdded:false
};
this.addItem=this.addItem.bind(this);
this.remove=this.remove.bind(this);
    }

    addItem(item){
    
        this.setState(st=>(
            {di: [...st.di,item],
            isAdded:true
            }
        ))
    }

remove(id){
this.setState(st=>({
    di:st.di.filter(n=>n.id!==id)
}))
}
    render(){
        
        return (
          <div className='BoxList'>
          
           <NewBoxForm addItem={this.addItem} isAdded={this.state.isAdded} />
           


           {this.state.di.map(n=> <Box key={n.id} di={n} isAdded={this.state.isAdded} remove={this.remove} />)}
            
          
          </div>
           
            
        )
    }
}

export default BoxList;