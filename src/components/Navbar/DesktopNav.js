import React from 'react';
import { Link } from 'react-scroll';
import { Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const DesktopNav = () => {
  return (
    <Stack
      spacing="20px"
      direction={'row'}
      display={{ base: 'none', xl: 'flex' }}
    >
      <Button
        borderRadius={0}
        cursor="pointer"
        as={Link}
        to="congreso"
        offset={-50}
        spy={true}
        smooth={true}
        duration={500}
        fontSize="sm"
        variant="link"
        fontWeight="light"
        activeClass="active_link"
        color="white"
        _hover={{ opacity: 0.6 }}
      >
        CONGRESO
      </Button>
      <Button
        borderRadius={0}
        cursor="pointer"
        as={Link}
        to="metodologia"
        offset={-50}
        spy={true}
        smooth={true}
        duration={500}
        fontSize="sm"
        variant="link"
        fontWeight="light"
        activeClass="active_link"
        color="white"
        _hover={{ opacity: 0.6 }}
      >
        METODOLOGÍA
      </Button>
      <Button
        borderRadius={0}
        cursor="pointer"
        as={Link}
        to="programa"
        offset={-50}
        spy={true}
        smooth={true}
        duration={500}
        fontSize="sm"
        variant="link"
        fontWeight="light"
        activeClass="active_link"
        color="white"
        _hover={{ opacity: 0.6 }}
      >
        PROGRAMA
      </Button>
      <Button
        borderRadius={0}
        cursor="pointer"
        as={Link}
        offset={-50}
        to="invitados"
        spy={true}
        smooth={true}
        duration={500}
        fontSize="sm"
        variant="link"
        fontWeight="light"
        activeClass="active_link"
        color="white"
        _hover={{ opacity: 0.6 }}
      >
        INVITADOS
      </Button>
      <Button
        borderRadius={0}
        cursor="pointer"
        as={Link}
        offset={-50}
        spy={true}
        smooth={true}
        duration={500}
        to="aliadas"
        fontSize="sm"
        variant="link"
        fontWeight="light"
        color="white"
        activeClass="active_link"
        _hover={{ opacity: 0.6 }}
      >
        INSTITUCIONES ALIADAS
      </Button>

      <Button
        as="a"
        href={
          'https://forms.office.com/Pages/ResponsePage.aspx?id=qN2bF2TZ_0OtO2dBhqL6KBUUV_NUIBtHqTCLvqHyWZtUNDJRRDdMTkZFMVNGMVdZVkZNRERLVjNWTi4u'
        }
        target="_blank"
        rel="noopener noreferrer"
        cursor="pointer"
        fontSize="sm"
        variant="outline"
        fontWeight="light"
        color="white"
        _hover={{ color: 'primary', bg: '#fff' }}
      >
        REGÍSTRATE AQUÍ
      </Button>
    </Stack>
  );
};

export default DesktopNav;
