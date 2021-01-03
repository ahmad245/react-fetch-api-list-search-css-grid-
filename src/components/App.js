import React, { Component } from "react";
import axios from "axios";
import Search from "./Search/Search";
import ImageList from "./Images/ImageList/ImageList";

const KEY = "ptoRpC52GpH9TEoM70ujLc15jqrXdUXZxjaSxI6jSAg";
//const SECRET = "zv8Cy3TdoLPtykivLSGs3qSyBkzo4XEAaQKWeOKx_sw";
class App extends Component {
  state={
    images:[]
  }
  onSearchSubmit=async(term)=> {
  let response= await  axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID " + KEY,
      },
    });
    
    this.setState({images:response.data.results})
    
  }
  render() {
    return (
      <div>
        <Search onChange={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
