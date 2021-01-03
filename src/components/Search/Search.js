import React, { Component } from 'react'

class Search extends Component{

    state={
        inputValue:''
    }
    onInputChange=(event)=>{
     
     this.setState({inputValue:event.target.value});
      
    }
    onFormSubmit=(event)=>{
      event.preventDefault();
      this.props.onChange(this.state.inputValue);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input value={this.state.inputValue} onChange={this.onInputChange} type="text" id="search" />
                    </div>
    
                </form>
            </div>
        );
    }
   
}
export default  Search;