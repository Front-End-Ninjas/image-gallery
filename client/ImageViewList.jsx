import React from 'react';

const ImageViewList = ({ images, handleClick }) => {
  return (
    <div className="image-view-list">
      {
      images.map((image) => {
        return (
          <div className="image-view-list-entry">
            <img src={`http://localhost:3000/newRoute/${image.large_image_url}`}
              onClick={e => handleClick(e)}
            />
          </div>
         );
      })
    }
    </div>
  );
};

export default ImageViewList;
