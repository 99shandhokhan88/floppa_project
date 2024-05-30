// App.js
import { Grommet } from "grommet";
import { Header } from "./components/Header";
import Details from "./components/Details";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";

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
    <Router>
      <Grommet theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:hash" element={<Details />} />
        </Routes>
      </Grommet>
    </Router>
  );
}

export default App;
