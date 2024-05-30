import { useEffect, useState } from "react";
import { Box, Image, Grid, Heading } from "grommet";
import { Floppa } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
const links = [
  "https://th.bing.com/th/id/OIP.NbXKIzXCyWi-1IlW7BhVQAHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.4iDRipGNWsoR7UPZltofYwHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.QzGZxlS9fKfW_lndJeH4ogHaI4?w=176&h=211&c=7&r=0&o=5&pid=1.7",
];

const floppaItems: Floppa[] = links.map((link, index) => ({
  name: `Floppa ${index + 1}`,
  imageUrl: link,
  price: (index + 1) * 100,
  description: `Description of Floppa ${index + 1}`,
  date: new Date(),
  material: "Material " + (index + 1),
  sizeSupplyCount: { XS: 10, S: 20, M: 30, L: 40, XL: 50 },
}));

const AllItems = () => {
  const navigate = useNavigate();
  const [floppas, setFloppas] = useState<Floppa[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000");

        if (response.ok) {
          const data = await response.json();
          setFloppas(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (floppa: Floppa) => {
    const encodedFloppaString = btoa(JSON.stringify(floppa));
    navigate(`/details/${encodedFloppaString}`);
  };

  return (
    <Box width="full">
      <Box pad="medium">
        <Heading level={2} alignSelf="center">
          All Items
        </Heading>
      </Box>
      <Box>
        <Grid gap="small" columns="small">
          {floppaItems.map((item, index) => (
            <Box onClick={() => handleClick(item)}>
              <Image
                key={index}
                src={item.imageUrl}
                width="200px"
                height="200px"
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllItems;
