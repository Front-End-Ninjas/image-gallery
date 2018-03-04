import React from 'react';

const ImageView = ({ image }) => {
  return (
    <div>
      <img src={`${image}`} />
    </div>
  );
};

export default ImageView;
