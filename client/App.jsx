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
      selectedImage: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetcher();
  }


  fetch() {
    // let this = that;
    //const id = 17; //Math.floor(Math.random() * 299);


    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/images/17',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      //contentType: 'application/json',
      success: (data) => {
        console.log('GET success', data);
        this.setState({ images: data });
      },
      error: function(data) {
        console.error('GET was not successful', data);
      }
    })
  }
  fetcher() {
    axios.get('http://localhost:3000/images/17')
      .then(({ data }) => {
        console.log('HELLO FROM AXIOS', data);
        this.setState({ images: data });
        console.log('STATE', this.state.images);
      })
  .catch(err => err);
  }
  

  handleClick(selected) {
    const id = selected.target.src.slice(29);
    this.setState({ selectedImage: { product_id: id } });
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
