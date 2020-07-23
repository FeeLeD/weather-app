import { ThemeProvider, CSSReset, Input, InputGroup, InputLeftElement, Icon, Box, Flex, Link as UILink, Heading, Stack, Text, Image, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/core';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

type Weather = {
  id: number | string,
  main: string,
  description: string,
  icon: string
};

type Main = {
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number
}

type Wind = {
  speed: number,
  deg: number
}

type Clouds = {
  all: number
}

type Sys = {
  country: string
}

interface IData {
  name: string,
  weather: Weather[],
  main: Main,
  wind: Wind,
  clouds: Clouds,
  sys: Sys
};

interface IError {
  cod: string,
  message: string
}

const defaultNoError: IError = {
  cod: '0',
  message: 'no errors'
};

function Home() {

  const [error, setError] = useState<IError>(defaultNoError);
  const [data, setData] = useState<IData>({});
  const [city, setCity] = useState('');
  const handleChange = event => setCity(event.target.value);

  const router = useRouter();

  const handleKeyPressed = async (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter')
      return;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ce5ac4b82688be2efbf4c631e22bb57a`);
    const weatherData = await res.json();

    if (weatherData.cod === '404') {
      setError(weatherData);
    }
    else
      setData(weatherData);
  }

  const handleCloseButton = (event: React.MouseEvent): void => {
    setError(defaultNoError);
  }

  return (
    <ThemeProvider>
      <CSSReset />

      <img
        className='img-background'
        src='/background/tree.jpg'
        alt='Imagine wonderful nature view...'
      />

      {
        error.cod !== '0' &&
        <Alert position='absolute' zIndex={1} top='5px' right='5px' rounded='lg' w='230px' status='error'>
          <AlertIcon />
          <AlertDescription>{error.message}</AlertDescription>
          <CloseButton onClick={handleCloseButton} position="absolute" right="8px" top="8px" />
        </Alert>
      }

      <Flex
        w='100%'
        bg='#6da6b16e'
        shadow='0 4px 10px #6da6b16e'
        px={8}
        py={2}
        align='center'
        justify='space-around'
      >

        <Flex w='130px' justify='space-between'>
          <Link href='/'>
            <UILink color="#fff" fontSize='1.1rem'>
              Home
              </UILink>
          </Link>

          <Link href='/about'>
            <UILink color="#fff" fontSize='1.1rem'>
              About
              </UILink>
          </Link>
        </Flex>

        <InputGroup>
          <InputLeftElement children={<Icon name='search' />} />
          <Input
            value={city}
            onChange={handleChange}
            size='lg'
            minW='300px'
            placeholder='Type the name of the city'
            onKeyPress={handleKeyPressed}
          />
        </InputGroup>
      </Flex>

      {
        (Object.keys(data).length === 0 && data.constructor === Object) ?
          <Flex w='100%' h='400px' justify='center' align='center'>
            <Stack spacing={5} w='80%' px={10}>
              <Heading as='h1' size='2xl' color='#29461A'>Weather now</Heading>
              <Heading as='h2' size='lg' w='380px' color='#638129'>
                Type the name of the city you are interested in to get its current weather conditions</Heading>
            </Stack>
          </Flex>
          :
          <Box maxW='sm' shadow='0 0 5px #0000004d' rounded='10px' m='100px auto' minH='400px' bg='#ffffffef'>

            <Box bg='#346d7ee5' w='100%' h='250px' textAlign='center' p='10px' borderRadius='10px 10px 0 0' color='#fff'>
              <Text fontSize='2rem'>{`${data.name}, ${data.sys.country}`}</Text>
              <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' m='auto' />
              <Heading>{`${Math.round(data.main.temp)} °C`}</Heading>
              <Text>{data.weather[0].description}</Text>
            </Box>

            <Flex direction='column' justify='space-between' p='15px 20px' h='150px'>
              <Flex justify='space-between'>
                <Text opacity={0.8}>Humidity</Text>
                <Text>{`${data.main.humidity} %`}</Text>
              </Flex>

              <Flex justify='space-between'>
                <Text opacity={0.8}>Pressure</Text>
                <Text>{`${data.main.pressure} hPa`}</Text>
              </Flex>

              <Flex justify='space-between'>
                <Text opacity={0.8} t>Wind</Text>
                <Text>{`${data.wind.speed} meter/sec`}</Text>
              </Flex>

              <Flex justify='space-between'>
                <Text opacity={0.8}>Cloudiness</Text>
                <Text>{`${data.clouds.all} %`}</Text>
              </Flex>
            </Flex>

          </Box>
      }

    </ThemeProvider>
  );
}

/* export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=ce5ac4b82688be2efbf4c631e22bb57a')
  const weatherData = await res.json()

  return {
    props: {
      weatherData
    },
  }
} */

export default Home;