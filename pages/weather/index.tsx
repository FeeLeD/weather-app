import Layout from "components/Layout";
import {
  Flex,
  Badge,
  Stack,
  Heading,
  Box,
  Tooltip,
  List,
  ListItem,
  IconButton
} from "@chakra-ui/core";
import { useRouter } from "next/router";

interface WeatherProps {
  cities: City[] | null
};

type City = {
  name: string,
  desc: string
}

const Weather: React.FC<WeatherProps> = ({ cities }: WeatherProps) => {
  const router = useRouter();

  const clickHandler = (city: string): void => {
    router.push(`/weather/${city}`);
  }

  return (
    <Layout title='Cities'>
      <Box w='fit-content' shadow='0 10px 25px #6da6b16e' rounded='10px' bg='#fff' m='50px 150px'>
        <Stack borderRadius='10px 10px 0 0' bg='#346d7ee5' spacing={1} px={10} py={5}>
          <Heading as='h1' size='2xl' color='#fff'>Weather</Heading>
          <Heading as='h2' size='lg' color='#1B4451'>The most visited cities</Heading>
        </Stack>
        <List spacing={5} p='20px 40px'>
          {cities && cities.map(city =>
            <ListItem key={city.name}>
              <Flex align='center' justify='space-between'>
                <Tooltip hasArrow label={city.desc} aria-label=''>
                  <Badge fontSize='1rem' color='teal'>{city.name}</Badge>
                </Tooltip>
                <IconButton onClick={() => clickHandler(city.name)} variantColor="teal" aria-label="Search weather" icon="search" size='sm'/>
              </Flex>
            </ListItem>
          )}
        </List>
      </Box>

    </Layout>
  )
}

export default Weather;

export const getStaticProps = async () => {

  const res = await fetch(process.env.CITIES_API);
  const cities = await res.json();

  return {
    props: {
      cities
    }
  }
};