import React from 'react';

const ImageViewList = ({ images, handleClick }) => {
  return (
    <div>
      {
        images.map((image) => {
          return (
            <div className="image-view-list-entry">
              <img src={`http://imagegallery-env.us-west-1.elasticbeanstalk.com/newRoute/${image.large_image_url}`}
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
