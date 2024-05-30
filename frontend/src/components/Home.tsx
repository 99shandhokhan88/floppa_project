import { Box, Heading, Button, TextInput, Text } from "grommet";
import React, { useState } from "react";
import AllItems from "./AllItems";

const Home = () => {
  const [enterNew, setEnterNew] = useState(false);
  return (
    <Box width="auto">
      <Box align="center" pad="large">
        <Heading level="2" alignSelf="center">
          Welcome to Big Floppa Cap inventory
        </Heading>
        <Box pad="medium" gap="medium">
          <Button label="New Item" onClick={() => setEnterNew(!enterNew)} />
        </Box>
        {enterNew && (
          <Box>
            <NewItem />
          </Box>
        )}
        <AllItems />
      </Box>
    </Box>
  );
};

export default Home;

import { Floppa } from "../utils/interfaces";

const NewItem = () => {
  const [newItem, setNewItem] = useState<Floppa>({
    name: "",
    imageUrl: "",
    price: 0,
    description: "",
    date: new Date(),
    material: "",
    sizeSupplyCount: { XS: 0, S: 0, M: 0, L: 0, XL: 0 },
  });
  const postItem = async () => {
    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Failed to post item");
      }

      alert("Item posted successfully");
    } catch (error) {
      console.error("Error posting item:", error);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Floppa | keyof Floppa["sizeSupplyCount"]
  ) => {
    const { value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [key]: key === "price" ? parseFloat(value) : value, // Convert price to number
    }));
  };
  return (
    <Box>
      <Box direction="row">
        <Box width="xsmall">
          <Text>Name</Text>
        </Box>
        <TextInput
          value={newItem.name}
          onChange={(e) => handleChange(e, "name")}
        />
      </Box>
      <Box direction="row" align="center">
        <Box width="xsmall">
          <Text>Image URL:</Text>
        </Box>
        <TextInput
          value={newItem.imageUrl}
          onChange={(e) => handleChange(e, "imageUrl")}
        />
      </Box>
      <Box direction="row" align="center">
        <Box width="xsmall">
          <Text>Price:</Text>
        </Box>
        <TextInput
          type="number"
          value={newItem.price.toString()}
          onChange={(e) => handleChange(e, "price")}
        />
      </Box>

      <Box direction="row" align="center">
        <Box width="xsmall">
          <Text>Description:</Text>
        </Box>
        <TextInput
          value={newItem.description}
          onChange={(e) => handleChange(e, "description")}
        />
      </Box>

      <Box direction="row" align="center">
        <Box width="xsmall">
          <Text>Material:</Text>
        </Box>
        <TextInput
          value={newItem.material}
          onChange={(e) => handleChange(e, "material")}
        />
      </Box>
      {/* Add inputs for size supply count */}
      {Object.entries(newItem.sizeSupplyCount).map(([size, count]) => (
        <Box direction="row">
          <Box width="xsmall">
            <Text>{size}</Text>
          </Box>
          <TextInput
            key={size}
            placeholder={`${size} Count`}
            value={count}
            type="number"
            onChange={(e) =>
              handleChange(e, size as keyof Floppa["sizeSupplyCount"])
            }
          />
        </Box>
      ))}
      <Button label="Submit" onClick={postItem} />
    </Box>
  );
};
