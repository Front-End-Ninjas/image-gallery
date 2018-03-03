import React from 'react';

const ImageView = ({ image }) => {
  return (
    <div>
      <img src={`http://localhost:3000/images/${image.product_id}`} />
    </div>
  );
};

export default ImageView;
