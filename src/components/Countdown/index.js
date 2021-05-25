import React, { useEffect, useRef, useState } from 'react';
import { Stack, Flex, Text } from '@chakra-ui/layout';
import useIntersected from '../../hooks/useIntersected';
import { SlideFade } from '@chakra-ui/transition';

const Countdown = () => {
  const node = useRef();
  const [isDone, setIsDone] = useState(false);
  const { show } = useIntersected({ node, margin: '0px' });

  useEffect(() => {
    handlerCD();
  }, []);

  function handlerCD() {
    let timer;
    const newYearTime = new Date(`May 27 2021 09:00:00`);
    // const newYearTime = new Date(`May 22 2021 11:54:00`);
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    function updateCountdown() {
      const currentTime = new Date();
      const diff = newYearTime - currentTime;

      const day = Math.floor(diff / 1000 / 60 / 60 / 24);
      const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
      const minute = Math.floor(diff / 1000 / 60) % 60;
      const second = Math.floor(diff / 1000) % 60;

      const stop = day <= 0 && hour <= 0 && minute <= 0 && second <= 0;

      if (stop) {
        setIsDone(true);
        clearInterval(timer);
        return;
      }

      days.innerHTML = day;
      hours.innerHTML = hour < 10 ? '0' + hour : hour;
      minutes.innerHTML = minute < 10 ? '0' + minute : minute;
      seconds.innerHTML = second < 10 ? '0' + second : second;
    }

    timer = setInterval(updateCountdown, 1000);
  }

  return (
    <div ref={node}>
      {isDone ? (
        <Stack
          pt={6}
          mt={-1}
          pb={10}
          bg="primary"
          justify="center"
          direction={{ base: 'column', sm: 'row' }}
        >
          <SlideFade in={show} offsetY="20px" delay={0.3}>
            <Flex alignItems="center" flexDirection="column">
              <Text
                id="days"
                color="#fff"
                fontSize={{ base: '7xl', xl: '8xl' }}
                fontWeight="bold"
                textAlign="center"
              >
                ¡Hoy inicia el congreso!
              </Text>
            </Flex>
          </SlideFade>
        </Stack>
      ) : (
        <Stack
          mt={-1}
          pb={10}
          bg="primary"
          justify="center"
          pt={6}
          // py={10}
          divider={
            <Text
              color="secundary"
              mx={{ base: 2, xl: 4 }}
              mt={{ base: 1, md: 1, xl: 3 }}
              fontSize={{ base: '6xl', xl: '7xl' }}
              display={{ base: 'none', sm: 'block' }}
            >
              :
            </Text>
          }
          direction={{ base: 'column', sm: 'row' }}
        >
          <SlideFade in={show} offsetY="20px" delay={0.3}>
            <Flex alignItems="center" flexDirection="column">
              <Text
                id="days"
                color="#fff"
                fontSize={{ base: '7xl', xl: '8xl' }}
                fontWeight="bold"
              >
                00
              </Text>
              <Text fontSize={{ xl: 'xl' }} color="#fff">
                DÍAS
              </Text>
            </Flex>
          </SlideFade>
          <SlideFade in={show} offsetY="20px" delay={0.6}>
            <Flex alignItems="center" flexDirection="column">
              <Text
                id="hours"
                color="#fff"
                fontSize={{ base: '7xl', xl: '8xl' }}
                fontWeight="bold"
              >
                00
              </Text>
              <Text fontSize={{ xl: 'xl' }} color="#fff">
                HORAS
              </Text>
            </Flex>
          </SlideFade>
          <SlideFade in={show} offsetY="20px" delay={0.9}>
            <Flex alignItems="center" flexDirection="column">
              <Text
                id="minutes"
                color="#fff"
                fontSize={{ base: '7xl', xl: '8xl' }}
                fontWeight="bold"
              >
                00
              </Text>
              <Text fontSize={{ xl: 'xl' }} color="#fff">
                MINUTOS
              </Text>
            </Flex>
          </SlideFade>
          <SlideFade in={show} offsetY="20px" delay={1.2}>
            <Flex alignItems="center" flexDirection="column">
              <Text
                id="seconds"
                color="#fff"
                fontSize={{ base: '7xl', xl: '8xl' }}
                fontWeight="bold"
              >
                00
              </Text>
              <Text fontSize={{ xl: 'xl' }} color="#fff">
                SEGUNDOS
              </Text>
            </Flex>
          </SlideFade>
        </Stack>
      )}
    </div>
  );
};

export default Countdown;
