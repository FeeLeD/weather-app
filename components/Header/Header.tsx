import { Flex } from '@chakra-ui/core';

import Navbar from './Navbar';
import Search from './Search';

/* const mapState = (state: RootState) => ({
  city: state.weather.city
}); */


/* const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type HeaderProps = PropsFromRedux; */

const Header: React.FC = () => {
  return (
    <Flex
      w='100%'
      bg='#6da6b16e'
      shadow='0 10px 25px #6da6b16e'
      px={8}
      py={2}
      align='center'
      justify='space-around'
    >
      <Navbar
        widthPx={300}
        navLinks={[
          { name: 'Home', href: '/' },
          { name: 'Weather', href: '/weather' },
          { name: 'About', href: '/about' }
        ]}
      />

      <Search />
      
    </Flex>
  )
}

export default Header;
