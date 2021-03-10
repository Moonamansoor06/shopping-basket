import React from 'react';
import Buttons from '../forms/Buttons';

const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <Buttons onClick={() => onLoadMoreEvt()}>
      Load More
    </Buttons>
  );
};

export default LoadMore;