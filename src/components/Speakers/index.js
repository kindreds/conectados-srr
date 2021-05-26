import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import { useDisclosure } from '@chakra-ui/hooks';
import { Container, Heading, Box } from '@chakra-ui/layout';

import { speakers } from '../../data';
import SpeakerItem from './SpeakerItem';
import { SlideFade } from '@chakra-ui/transition';
import { useInView } from 'react-intersection-observer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useBreakpointValue } from '@chakra-ui/media-query';

const Modal = dynamic(() => import('../Modal'));

const Speakers = () => {
  const [ID, setID] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const [hasView, setHasView] = useState(false);
  const { inView: show, ref: node } = useInView();
  const row = useBreakpointValue({
    base: 1,
    ms: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 3,
    '1xl': 3,
  });

  useEffect(() => {
    if (show) return setHasView(true);
  }, [show]);

  const handleOpenModal = (id) => {
    setID(id);
    onToggle();
  };

  const settings = {
    rows: 2,
    dots: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: row,
  };

  return (
    <Box bg="bgGray">
      <SlideFade in={show} offsetY="100px" delay={0.3}>
        <Container
          id="invitados"
          pb={{ base: 20, md: 52 }}
          pt={{ base: 10, xl: 20 }}
          maxW={{ base: '90%', xl: '1200px' }}
        >
          <Modal finalRef={node} id={ID} isOpen={isOpen} onToggle={onToggle} />
          <Heading
            mb={12}
            fontWeight="bold"
            color="secundary"
            textAlign="center"
            fontSize={{ base: '2xl', xl: '4xl' }}
          >
            INVITADOS
          </Heading>
          <Box ref={node} maxW="1200px" maxH="500px" minH="500px">
            <Slider slidesToScroll={row} {...settings}>
              {speakers.map((item, i) => (
                <SpeakerItem
                  key={i}
                  {...item}
                  show={hasView}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            </Slider>
          </Box>
        </Container>
      </SlideFade>
    </Box>
  );
};

export default React.memo(Speakers);
