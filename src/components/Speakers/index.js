import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { useDisclosure } from '@chakra-ui/hooks';
import { Container, Heading, Box } from '@chakra-ui/layout';

import Modal from '../Modal';
import { speakers } from '../../data';
import SpeakerItem from './SpeakerItem';
import { SlideFade } from '@chakra-ui/transition';
import useIntersected from '../../hooks/useIntersected';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useBreakpointValue } from '@chakra-ui/media-query';

const Speakers = () => {
  const [ID, setID] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const row = useBreakpointValue({
    base: 1,
    ms: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 3,
    '1xl': 3,
  });

  const node = useRef();
  const { show } = useIntersected({ node, margin: '0px' });

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
          <Box ref={node} maxW="1200px" maxH="500px">
            <Slider slidesToScroll={row} {...settings}>
              {speakers.map((item, i) => (
                <SpeakerItem
                  key={i}
                  {...item}
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

export default Speakers;
