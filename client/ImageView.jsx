import React from 'react';

const ImageView = ({ image }) => {
  return (
    <div>
      <img src={`http://localhost:3000/images/${image.large_image_url}`} />
    </div>
  );
};

export default ImageView;
