/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';

function ProductCard({
  overviewProduct, style, updateFit, outfit, setOutfit, outfitStyle, setOutfitStyle,
}) {
  const deleteFromList = (product, currentStyle) => {
    const newOutfit = outfit.filter((fit) => fit !== product);
    const newStyle = outfitStyle.filter((item) => item !== currentStyle);
    setOutfit(newOutfit);
    setOutfitStyle(newStyle);
    updateFit(false);
  };
  return (
    <div className="card w-25 box-shadow-hover">
      <img className="card-img-top" src={style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'} alt={overviewProduct.name} width={296} height={400} />
      <div className="card-img-overlay">
        <button type="button" className="close" onClick={() => deleteFromList(overviewProduct, style)}>
          <span className="far fa-times-circle" />
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{overviewProduct.category}</h5>
        <div className="card-text">
          <h6 className="card-subtitle mb-2 text-muted">{overviewProduct.name}</h6>
        </div>
        <div className="card-text">
          <h6>
            $
            {overviewProduct.default_price}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
