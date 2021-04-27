import React from 'react';

const ReviewPhotos = (props) => (
  props.photos.map((photo) => {
    const photoId = photo.id;
    const photoUrl = photo.url;

    return (

      <div key={photoId}>
        <img alt={photoId} src={photoUrl} width="50px" length="50px" data-toggle="modal" data-target="#imageModal" />
        <div className="modal" id="imageModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <img alt={photoId} src={photoUrl} width="470px" length="470px" data-toggle="modal" data-target="#imageModal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
);

export default ReviewPhotos;
