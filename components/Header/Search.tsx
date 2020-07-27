import { InputGroup, InputLeftElement, Icon, Input } from "@chakra-ui/core";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setCityName } from "../../actions/weather";
import Router from 'next/router';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const handleChange = event => setCity(event.target.value);

  const handleKeyPressed = async (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter')
      return;

    dispatch(setCityName(city));
    Router.push(`/weather/${city}`);

    /*  if (weatherData.cod === '404') {
       setError(weatherData);
     }
     else
       setData(weatherData); */
  }

  return (
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
  )
};

export default connect()(Search);