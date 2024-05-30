import { Header as Head, Box, Image, Nav, Text } from "grommet";
import { Link } from "react-router-dom";

export const Header = () => {
  const items = [{ label: "Dario" }, { label: "Egi" }, { label: "Venelin" }];

  return (
    <Head fill="horizontal" background="brand" pad="small">
      <Link to={"/"}>
        <Image
          width="50px"
          src="https://th.bing.com/th?id=OIP.mfg-kvrRnle81HfnIdXLRAHaHr&w=245&h=254&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        />
      </Link>
      <Nav direction="row" gap="medium" margin={{ right: "small" }}>
        {items.map((item) => (
          <Box key={item.label}>
            <Text>{item.label} </Text>
          </Box>
        ))}
      </Nav>
    </Head>
  );
};
