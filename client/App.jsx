import React from 'react';
import axios from 'axios';
import ImageView from './ImageView';
import ImageViewList from './ImageViewList';

class imageGallery extends React.Component {
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

  fetcher() {
    axios.get(`/item/${this.props.id}/images`)
      .then(({ data }) => {
        this.setState({ images: data });
        this.setState({ selectedImage: `/newRoute/${data[0].large_image_url}` });
      })
      .catch(err => err);
  }

  handleClick(selected) {
    const id = selected.target.src;
    this.setState({ selectedImage: id });
  }

  render() {
    return (
      <div>
        <div className="app-view">
          <div className="image-view-list">
            <ImageViewList images={this.state.images} handleClick={e => this.handleClick(e)} />
          </div>
          <div className="image-view">
            <ImageView image={this.state.selectedImage} />
          </div>
        </div>
      </div>
    );
  }
}

window.imageGallery = imageGallery;
