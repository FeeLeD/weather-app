import Layout from "components/Layout";
import { connect } from 'react-redux';
import { WeatherData } from "interfaces";
import { NextPageContext } from "next";
import { Flex, Stack, Heading, Box, Text, Image } from "@chakra-ui/core";
import { useRouter } from "next/router";
import WeatherCardSkeleton from "components/Weather/WeatherCardSkeleton";
import { cities } from 'pages/api/cities';

type CityWeatherProps = {
  data?: WeatherData
}

const City: React.FC<CityWeatherProps> = ({ data }: CityWeatherProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <WeatherCardSkeleton />
    )
  }

  return (
    <Layout title={data ? data.name : 'City'}>
      {
        data.cod === '404' ?
          <Flex w='100%' h='400px' justify='center' align='center'>
            <Stack spacing={5} w='80%' px={10}>
              <Heading as='h1' size='2xl' color='#f77352'>City not found</Heading>
              <Heading as='h2' size='lg' w='380px' color='#ab462c'>
                Check the city you are intrested in</Heading>
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
                <Text opacity={0.8}>Wind</Text>
                <Text>{`${data.wind.speed} meter/sec`}</Text>
              </Flex>

              <Flex justify='space-between'>
                <Text opacity={0.8}>Cloudiness</Text>
                <Text>{`${data.clouds.all} %`}</Text>
              </Flex>
            </Flex>

          </Box>
      }
    </Layout>
  )
}

export default connect()(City);

interface PostNextPageContext extends NextPageContext {
  params: {
    city: string
  }
}

export const getStaticPaths = async () => {
  setTimeout(() => {
    const citiesData = cities;

    const paths = citiesData.map(city => ({
      params: { city: city.name }
    }));

    return {
      paths: paths,
      fallback: true
    }
  }, 1000);
}

export const getStaticProps = async ({ params }: PostNextPageContext) => {
  const res = await fetch(process.env.WEATHER_API + params.city + process.env.API_KEY);
  const weatherData = await res.json();

  return { props: { data: weatherData } }
}

/* export const getServerSideProps = async ({ query }: PostNextPageContext) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query.city}&units=metric&appid=ce5ac4b82688be2efbf4c631e22bb57a`);
  const weatherData = await res.json();

  return {
    props: {
      data: weatherData
    }
  }
} */