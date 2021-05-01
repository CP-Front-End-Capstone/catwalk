/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function MyOutfitCard({
  overviewProduct, updateFit, outfit, styles, outfitStyle, setOutfitStyle, context,
}) {
  const updateList = (newProduct, newStyle) => {
    if (!outfit.includes(newProduct) && !outfit.includes(newStyle)) {
      const product = [...outfit, newProduct];
      const style = [...outfitStyle, newStyle];
      updateFit(product);
      setOutfitStyle(style);
      context.trackClicks('Add to Outfit Button', 'Your Outfit', context.dateGenerator());
    }
  };

  return (
    <div className="card">
      <img className="card-img-top" alt="myoutfit" src="https://via.placeholder.com/296x400?text=Add+To+Outfit+Now" width={300} height={400} />
      <div className="card-body">
        <h5 className="card-title">Click to add to your outfit</h5>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => updateList(overviewProduct, styles[0])}>Add to Outfit</button>
      </div>
    </div>
  );
}

export default MyOutfitCard;
