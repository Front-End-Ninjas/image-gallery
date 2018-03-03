import React from 'react';

const ImageViewList = ({ images, handleClick }) => {
  return (
    <div className="image-view-list">
      {
      images.map((image) => {
        return (
          <div className="image-view-list-entry">
            <img src={`http://localhost:3000/images/${image.product_id}`}
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
