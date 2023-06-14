import React from 'react';
import { LoaderObject } from './Loader.styled';
import { Hearts } from 'react-loader-spinner';

export function Loader() {
  return (
    <LoaderObject>
      <Hearts
        visible={true}
        height="80"
        width="80"
        radius="10"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        color="purple"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </LoaderObject>
  );
}
