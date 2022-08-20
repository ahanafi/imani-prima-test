import React from 'react';

const Genre = ({ name }) => {
  return (
    <span style={{ 
      background: '#093356',
      color: '#fff',
      fontSize: '.75 rem',
      marginRight: '10px',
      padding: '5px 7.5px',
      borderRadius: '3px',
      boxShadow: '3px 3px 0 #eaec8c',
     }}>
     { name }
    </span>
  );
}

export default Genre;