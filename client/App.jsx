import React from 'react';
import { render } from 'react-dom';
import ImageView from './ImageView';
import ImageViewList from './ImageViewList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { product_id: 1, large_image_url: 'electronics/url1.jpg', small_gallery_image_url: 'electronics/url1.jpg' },
        { product_id: 2, large_image_url: 'electronics/url2.jpg', small_gallery_image_url: 'electronics/url2.jpg' },
        { product_id: 3, large_image_url: 'electronics/url3.jpg', small_gallery_image_url: 'electronics/url3.jpg' },
        { product_id: 4, large_image_url: 'electronics/url4.jpg', small_gallery_image_url: 'electronics/url4.jpg' },
        { product_id: 5, large_image_url: 'electronics/url5.jpg', small_gallery_image_url: 'electronics/url5.jpg' },
      ],
      selectedImage: {
        product_id: 1,
      },
    };
    this.handleClick = this.handleClick.bind(this);
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
