// App.js
import React from "react";
import { Grommet, Box, Button, Heading } from "grommet";
import { Header } from "./components/Header";
import AllItems from "./components/AllItems";

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
            Welcome to Big Floppa Cap inventory
          </Heading>
          <Box pad="medium" gap="medium">
            <Button
              label="All Stock"
              onClick={() => alert("Hello, Grommet!")}
            />
            <Button
              label="Info Articolo"
              onClick={() => alert("Hello, Grommet!")}
            />
          </Box>
          <AllItems />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
