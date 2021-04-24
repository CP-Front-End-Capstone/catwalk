import React from 'react';

const ReviewPhotos = (props) => (
  props.photos.map((photo) => (
    <div>
      <img alt={photo.id} src={photo.url} width="50px" length="50px" data-toggle="modal" data-target="#imageModal" />
      <div className="modal" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <img alt={photo.id} src={photo.url} width="470px" length="470px" data-toggle="modal" data-target="#imageModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
);

export default ReviewPhotos;
