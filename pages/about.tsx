import { Box, Tabs, TabPanels, TabPanel, TabList, Tab, Heading } from "@chakra-ui/core";

const About: React.FC = () => {
  return (
    <Box w='fit-content' shadow='0 10px 25px #6da6b16e' rounded='10px' bg='#ffffffe1' m='50px 150px' px={10} py={5}>
      <Heading as='h1' mb={5}>Page devoted to the developers</Heading>
      <Tabs variant="soft-rounded" variantColor="green">
        <TabList mb={5}>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>About first developer...</p>
          </TabPanel>
          <TabPanel>
            <p>About second developer...</p>
          </TabPanel>
          <TabPanel>
            <p>About third developer...</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default About;