// App.js
import React from "react";
import { Grommet, Box, Button, Heading } from "grommet";
import { Header } from "./components/Header";

const theme = {
  global: {
    colors: {
      brand: "#dc2626",
      text: "#fff",
    },
    font: {
      family: "Arial",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Header />
      <Box width="auto">
        <Box align="center" pad="large">
          <Heading level="2" alignSelf="center">
            Welcome to our shop
          </Heading>
          <Box pad="medium">
            <Button label="Shop Now" onClick={() => alert("Hello, Grommet!")} />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
