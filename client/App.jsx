import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import ImageView from './ImageView';
import ImageViewList from './ImageViewList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetcher = this.fetcher.bind(this);
  }

  componentDidMount() {
    this.fetcher();
  }


  // fetch() {
  //   // let this = that;
  //   //const id = 17; //Math.floor(Math.random() * 299);


  //   $.ajax({
  //     method: 'GET',
  //     url: 'http://localhost:3000/item/17/images',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers': '*',
  //     },
  //     //contentType: 'application/json',
  //     success: (data) => {
  //       console.log('GET success', data);
  //       this.setState({ images: data });
  //     },
  //     error: function(data) {
  //       console.error('GET was not successful', data);
  //     }
  //   })
  // }
  fetcher() {
    axios.get('http://localhost:3000/item/17/images')
      .then(({ data }) => {
        console.log('HELLO FROM AXIOS', data);
        this.setState({ images: data });
        this.setState({ selectedImage: `http://localhost:3000/newRoute/${data[0].large_image_url}` });
        console.log('STATE', this.state.selectedImage);
      })
      .catch(err => err);
  }

  handleClick(selected) {
    console.log('clicked', selected.target.src);
    const id = selected.target.src; //.slice(29);
    this.setState({ selectedImage: id });
  }

  render() {
    return (
      <div>
        <p> Hello React!</p>
        <div className="app-view">
          <ImageViewList images={this.state.images} handleClick={e => this.handleClick(e)} />
        </div>
        <div className="image-view">
          <ImageView image={this.state.selectedImage} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
