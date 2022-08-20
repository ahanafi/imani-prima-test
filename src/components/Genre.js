import React from 'react';

const Genre = ({ name }) => {
  return (
    <span style={{ 
      background: '#0e4757',
      color: '#fff',
      fontSize: '.75 rem',
      marginRight: '5px',
      padding: '5px 7.5px',
      borderRadius: '3px'
     }}>
     { name }
    </span>
  );
}

export default Genre;