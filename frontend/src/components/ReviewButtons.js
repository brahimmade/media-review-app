import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MEDIA_CREATE_SHOW } from '../constants/mediaConstants';

import { showUICollaborator } from '../actions/collaboratorActions';

const ReviewButtons = () => {
  const dispatch = useDispatch();

  const style = {
    backgroundColor: '#3A3A3A',
    height: '100%',
    width: '100%',
    paddingTop: '1.1rem',
    cursor: 'pointer',
  };

  return (
    <div
      className='bg-dark d-flex justify-content-center p-2'
      style={{ height: '95px', borderRadius: '.25rem' }}
    >
      <div
        className='d-inline text-center noselect review-buttons'
        style={{ ...style, borderRadius: '0.25rem 0 0 0.25rem' }}
        onClick={() => dispatch({ type: MEDIA_CREATE_SHOW })}
      >
        <span className='material-icons-round text-success review-button-upload'>
          cloud_upload
        </span>
        <h6
          style={{
            transform: 'translate(0, -4px)',
          }}
          className='text-light'
        >
          Upload
        </h6>
      </div>
      <div
        className='d-inline text-center noselect mx-1 review-buttons'
        style={{ ...style }}
        onClick={() => dispatch(showUICollaborator())}
      >
        <span className='material-icons-round text-info review-button-collaborator'>
          people
        </span>
        <h6
          style={{
            transform: 'translate(0, -4px)',
          }}
          className='text-light'
        >
          Collaborators
        </h6>
      </div>
      <div
        className='d-inline text-center noselect review-buttons'
        style={{
          ...style,
          width: '40%',
          borderRadius: '0 0.25rem 0.25rem 0',
        }}
      >
        <span
          style={{
            transform: 'translate(0, 12px)',
          }}
          className='material-icons-round text-light review-button-settings'
        >
          settings
        </span>
      </div>
    </div>
  );
};

export default ReviewButtons;