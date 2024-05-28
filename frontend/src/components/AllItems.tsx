import React from "react";
import { Box, Image, Grid, Heading } from "grommet";

const links = [
  "https://th.bing.com/th/id/OIP.NbXKIzXCyWi-1IlW7BhVQAHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.4iDRipGNWsoR7UPZltofYwHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.QzGZxlS9fKfW_lndJeH4ogHaI4?w=176&h=211&c=7&r=0&o=5&pid=1.7",
];

const AllItems = () => {
  return (
    <Box width="full">
      <Box pad="medium">
        <Heading level={2} alignSelf="center">
          All Items
        </Heading>
      </Box>
      <Box>
        <Grid gap="small" columns="small">
          {links.map((item, index) => (
            <Image key={index} src={item} width="200px" height="200px" />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllItems;
