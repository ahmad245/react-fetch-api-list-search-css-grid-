import React, { Component } from 'react'
import Image from '../Image/Image';
import './ImageList.css';
class ImageList extends Component{
    
    render(){
        const images=this.props.images.map((image)=>{
            return <Image image={image} key={image.id} />
        })
        return (<div className="image-list">
            {images}
        </div>);
    }
}
export default ImageList;