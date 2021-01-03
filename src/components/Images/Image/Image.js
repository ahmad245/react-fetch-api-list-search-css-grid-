import React, { Component } from 'react'
class Image extends Component{
    constructor(props){
        super(props);
        this.imageRef=React.createRef();
    }
    state={
        span:0
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan)
    }

    setSpan=()=>{
        const height=this.imageRef.current.clientHeight;
        const span= Math.ceil(height / 10)+1;
        this.setState({span});

    }

    render(){
        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} src={this.props.image.urls.regular} alt={this.props.image.description} />
            </div>
        )
    }
    
}
export default Image;