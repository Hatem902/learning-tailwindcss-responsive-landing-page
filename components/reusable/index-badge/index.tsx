import React from 'react';

const IndexBadge = ({ text }: any) => {
  return (
    <span className='py-0 px-4 bg-red-500 justify-center rounded-full h-fit mr-6 text-white text-semibold text-xl'>
      {text}
    </span>
  );
};

export default IndexBadge;
