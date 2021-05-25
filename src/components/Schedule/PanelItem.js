import React from 'react';
import dynamic from 'next/dynamic';
import { useBreakpointValue } from '@chakra-ui/media-query';

const ItemDesktop = dynamic(() => import('./ItemDesktop'));
const ItemMobile = dynamic(() => import('./ItemMobile'));

const PanelItem = (props) => {
  const isDesktop = useBreakpointValue({
    '1xl': true,
    xl: true,
    lg: true,
    md: false,
    sm: false,
    ms: false,
    base: false,
  });

  return (
    <>
      {typeof isDesktop === 'undefined' ? (
        <h1>Loading</h1>
      ) : isDesktop ? (
        <ItemDesktop {...props} />
      ) : (
        <ItemMobile {...props} />
      )}
    </>
  );
};

export default PanelItem;
