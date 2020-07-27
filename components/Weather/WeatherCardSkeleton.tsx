import { Box, Skeleton, Flex, Text } from "@chakra-ui/core"

const WeatherCardSkeleton: React.FC = () => {
  return (
    <Box maxW='sm' shadow='0 0 5px #0000004d' rounded='10px' m='100px auto' minH='400px' bg='#ffffffef'>
      <Skeleton w='100%' h='250px' borderRadius='10px 10px 0 0' />
      <Flex direction='column' justify='space-between' p='15px 20px' h='150px'>
        <Skeleton>
          <Text>text</Text>
        </Skeleton>

        <Skeleton>
          <Text>text</Text>
        </Skeleton>

        <Skeleton>
          <Text>text</Text>
        </Skeleton>

        <Skeleton>
          <Text>text</Text>
        </Skeleton>
      </Flex>
    </Box>
  )
}

export default WeatherCardSkeleton
