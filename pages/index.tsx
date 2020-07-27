import { Box, Flex, Heading, Stack, Text, Image, Alert, AlertIcon, AlertDescription, CloseButton } from '@chakra-ui/core';
import React, { useState } from 'react';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout title='Home'>
      <Flex w='100%' h='400px' justify='center' align='center'>
        <Stack spacing={5} w='80%' px={10}>
          <Heading as='h1' size='2xl' color='#29461A'>Weather now</Heading>
          <Heading as='h2' size='lg' w='380px' color='#638129'>
            Type the name of the city you are interested in to get its current weather conditions</Heading>
        </Stack>
      </Flex>
    </Layout>
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