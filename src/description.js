import React, { Component } from "react";


class Description extends Component {
     render() {
         
        function dlt(elem){
      
            if( elem.target && elem.target.id === 'delbutton' );
              elem.target.parentNode.parentNode.remove();
           
          };
    
        return (
            <div>
    
                    <div className="todo-wrapper flex">
    
                        <div className="flex" id="description">
                            <span>{this.props.name}</span>
                        </div>
    
                        <div className="flex">
                            <label className="flexlabel">
                                <input type="checkbox" name="options" id="option1" autocomplete="off" />
                            </label>
                                <button onClick={dlt} className="delbutton" id="delbutton">Delete</button>
                        </div>         
                    </div>
              </div> 
        )
    }
    
}

export default Description;